/**
 * Worker route handler: GET /api/export-subscribers
 * Protected admin endpoint that assembles the subscriber CSV from KV.
 *
 * Usage:
 *   curl -H "x-admin-key: $ADMIN_API_KEY" https://fixthespeaker.com/api/export-subscribers -o subscribers.csv
 *
 * The key is accepted ONLY via the `x-admin-key` header. Query-string keys are
 * rejected because they leak into browser history, server logs and Referer headers.
 */

import { CSV_HEADER, LEGACY_CSV_KEY, SUBSCRIBER_PREFIX, recordToCsvRow } from '../lib/csv.js';

const encoder = new TextEncoder();

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

/**
 * Constant-time comparison of the provided key against the expected one.
 * A length mismatch short-circuits; the key length itself is not secret.
 */
function safeEqual(provided, expected) {
  const a = encoder.encode(provided);
  const b = encoder.encode(expected);
  if (a.byteLength !== b.byteLength) return false;
  return crypto.subtle.timingSafeEqual(a, b);
}

/** Reads every `sub:*` record from KV, following list pagination. */
async function collectRecords(kv) {
  const records = [];
  let cursor;

  do {
    const page = await kv.list({ prefix: SUBSCRIBER_PREFIX, cursor });
    const values = await Promise.all(page.keys.map((k) => kv.get(k.name, 'json')));
    for (const record of values) {
      if (record) records.push(record);
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  records.sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`));
  return records;
}

/** Rows from the pre-refactor single CSV blob, if it still exists. */
async function legacyRows(kv) {
  const legacy = await kv.get(LEGACY_CSV_KEY);
  if (!legacy) return [];
  return legacy
    .replace(/^\uFEFF/, '')
    .split('\n')
    .slice(1) // drop header
    .filter((line) => line.trim().length > 0);
}

export async function onRequestGet({ request, env }) {
  try {
    const expectedKey = env.ADMIN_API_KEY;

    // 1. Validate that the ADMIN_API_KEY is configured
    if (!expectedKey) {
      console.error('ADMIN_API_KEY is not configured in Cloudflare environment variables.');
      return json(500, { error: 'Export is not configured.' });
    }

    // 2. Refuse keys passed in the URL so they are never logged or leaked via Referer
    const url = new URL(request.url);
    if (url.searchParams.has('key')) {
      return json(400, { error: 'Pass the admin key in the x-admin-key header, not the query string.' });
    }

    // 3. Constant-time verification of the admin key
    const providedKey = request.headers.get('x-admin-key') || '';
    if (!providedKey || !safeEqual(providedKey, expectedKey)) {
      return json(401, { error: 'Unauthorized.' });
    }

    // 4. Verify KV binding
    if (!env.SUBSCRIBERS) {
      console.error('Missing SUBSCRIBERS KV namespace binding in Cloudflare.');
      return json(500, { error: 'Storage is not configured.' });
    }

    // 5. Assemble CSV: legacy blob rows first, then per-key records in chronological order
    const [legacy, records] = await Promise.all([
      legacyRows(env.SUBSCRIBERS),
      collectRecords(env.SUBSCRIBERS),
    ]);
    const rows = [...legacy, ...records.map(recordToCsvRow)];

    // UTF-8 BOM so Excel opens non-ASCII names correctly
    const csv = '\uFEFF' + CSV_HEADER + rows.join('\n') + (rows.length ? '\n' : '');

    const today = new Date().toISOString().slice(0, 10);
    const filename = `subscribers_export_${today}.csv`;

    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'no-referrer',
      },
    });
  } catch (err) {
    console.error('Export error:', err);
    return json(500, { error: 'Failed to export subscribers CSV.' });
  }
}
