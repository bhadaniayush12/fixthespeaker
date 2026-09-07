import { onRequestPost as handleSubscribe, onRequestOptions as handleSubscribeOptions } from './functions/api/subscribe.js';
import { onRequestGet as handleExport } from './functions/api/export-subscribers.js';

const SUPPORTED_LOCALES = new Set(['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it']);

function getLocale(pathname) {
  const locale = pathname.split('/').filter(Boolean)[0];
  return SUPPORTED_LOCALES.has(locale) ? locale : 'en';
}

function jsonResponse(status, body, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...extraHeaders },
  });
}

function methodNotAllowed(allow) {
  return jsonResponse(405, { error: 'Method not allowed.' }, { Allow: allow });
}

async function localizedErrorResponse(request, env, status, locale) {
  const url = new URL(request.url);
  const errorPath = locale === 'en' ? `/${status}` : `/${locale}/${status}`;
  const errorUrl = new URL(errorPath, url);
  // Always GET the error page: the original request may be a POST whose body was already consumed.
  const asset = await env.ASSETS.fetch(new Request(errorUrl, { method: 'GET', headers: request.headers }));
  return new Response(asset.body, {
    status,
    headers: asset.headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '');
    const locale = getLocale(url.pathname);

    try {
      if (path === '/api/subscribe') {
        if (request.method === 'OPTIONS') return handleSubscribeOptions({ request });
        if (request.method === 'POST') return handleSubscribe({ request, env });
        return methodNotAllowed('POST, OPTIONS');
      }

      if (path === '/api/export-subscribers') {
        if (request.method === 'GET') return handleExport({ request, env });
        return methodNotAllowed('GET');
      }

      // Unknown API routes should not fall through to the HTML 404 page.
      if (path.startsWith('/api/')) {
        return jsonResponse(404, { error: 'Not found.' });
      }

      // All remaining requests are served from the static asset bundle.
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404 && !url.pathname.endsWith('/404')) {
        return localizedErrorResponse(request, env, 404, locale);
      }
      return response;
    } catch (err) {
      console.error('Unhandled worker error:', err);
      try {
        return await localizedErrorResponse(request, env, 500, locale);
      } catch {
        return new Response('Internal Server Error', { status: 500 });
      }
    }
  },
};
