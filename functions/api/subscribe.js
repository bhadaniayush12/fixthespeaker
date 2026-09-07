/**
 * Worker route handler: POST /api/subscribe
 *
 * Stores each newsletter subscriber as its own KV entry (`sub:<email>`).
 * One key per subscriber avoids the read-modify-write race of a shared CSV blob,
 * keeps every write O(1) regardless of list size, and makes duplicate detection
 * a single lookup. The CSV is assembled on demand by /api/export-subscribers.
 */

import { subscriberKey } from '../lib/csv.js';

const ALLOWED_ORIGINS = new Set([
  'https://fixthespeaker.com',
  'https://www.fixthespeaker.com',
]);

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_USER_AGENT_LENGTH = 512;
const MIN_FORM_FILL_MS = 3000;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isAllowedOrigin(origin) {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  // Local development (wrangler dev / astro preview)
  return /^http:\/\/localhost(:\d+)?$/.test(origin);
}

function corsHeaders(request) {
  const origin = request.headers.get('origin') || '';
  const headers = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
  if (isAllowedOrigin(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

function json(request, status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

/** Coerces any incoming value (string, number, null, File, ...) to a trimmed string. */
function asString(value) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value).trim();
  return '';
}

/** Returns the submitted fields, or null when the content type is unsupported. */
async function parseFields(request) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => null);
    return body && typeof body === 'object' && !Array.isArray(body) ? body : {};
  }

  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    const formData = await request.formData();
    return {
      name: formData.get('name'),
      email: formData.get('email'),
      _gotcha: formData.get('_gotcha'),
      formLoadedAt: formData.get('formLoadedAt'),
    };
  }

  return null;
}

/**
 * Handles CORS preflight
 */
export async function onRequestOptions({ request }) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

/**
 * Handles subscription POST
 */
export async function onRequestPost({ request, env }) {
  try {
    const fields = await parseFields(request);
    if (!fields) {
      return json(request, 415, {
        success: false,
        error: 'Unsupported Content-Type. Please send JSON or form data.',
      });
    }

    const name = asString(fields.name).slice(0, MAX_NAME_LENGTH);
    const email = asString(fields.email).toLowerCase();
    const gotcha = asString(fields._gotcha);
    const formLoadedAt = Number(fields.formLoadedAt) || 0;

    // Bot heuristics: respond with a fake success so bots do not learn to adapt.
    const fakeSuccess = () => json(request, 200, { success: true, message: 'Subscribed!' });

    // 1. Honeypot: hidden input filled in
    if (gotcha) return fakeSuccess();

    // 2. Timing: form submitted faster than a human could fill it
    if (formLoadedAt > 0 && Date.now() - formLoadedAt < MIN_FORM_FILL_MS) return fakeSuccess();

    // 3. Email validation
    if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return json(request, 400, { success: false, error: 'Please provide a valid email address.' });
    }

    // 4. Verify KV binding
    if (!env.SUBSCRIBERS) {
      console.error('Missing SUBSCRIBERS KV namespace binding in Cloudflare.');
      return json(request, 500, { success: false, error: 'Storage is not configured.' });
    }

    // 5. Duplicate check is a single key lookup (case-insensitive via normalized key)
    const key = subscriberKey(email);
    const existing = await env.SUBSCRIBERS.get(key);
    if (existing !== null) {
      return json(request, 200, { success: true, message: 'You are already subscribed!' });
    }

    // 6. Store the record under its own key
    const now = new Date().toISOString();
    const record = {
      date: now.slice(0, 10),
      time: now.slice(11, 19),
      name: name || 'Subscriber',
      email,
      country: request.cf?.country || 'unknown',
      ip: request.headers.get('cf-connecting-ip') || 'unknown',
      userAgent: (request.headers.get('user-agent') || 'unknown').slice(0, MAX_USER_AGENT_LENGTH),
    };

    await env.SUBSCRIBERS.put(key, JSON.stringify(record));

    return json(request, 200, { success: true, message: 'Subscribed!' });
  } catch (err) {
    console.error('Subscription error:', err);
    return json(request, 500, {
      success: false,
      error: 'Internal server error. Please try again later.',
    });
  }
}
