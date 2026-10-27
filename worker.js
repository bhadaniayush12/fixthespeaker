import { onRequestGet as handleExport } from './functions/api/export-subscribers.js';

function jsonResponse(status, body, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...extraHeaders },
  });
}

function methodNotAllowed(allow) {
  return jsonResponse(405, { error: 'Method not allowed.' }, { Allow: allow });
}

// The site is English-only; translated URLs are redirected to English in public/_redirects.
async function errorResponse(request, env, status) {
  const errorUrl = new URL(`/${status}`, request.url);
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

    // One canonical origin: send http:// and www. traffic to https://fixthespeaker.com.
    const isProdHost = url.hostname === 'fixthespeaker.com' || url.hostname === 'www.fixthespeaker.com';
    if (isProdHost && (url.protocol === 'http:' || url.hostname === 'www.fixthespeaker.com')) {
      url.protocol = 'https:';
      url.hostname = 'fixthespeaker.com';
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname.replace(/\/$/, '');

    try {
      // The newsletter form was retired in October 2026; existing records stay exportable below.
      if (path === '/api/subscribe') {
        return jsonResponse(410, { error: 'Newsletter sign-up is closed.' });
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
        return errorResponse(request, env, 404);
      }
      return response;
    } catch (err) {
      console.error('Unhandled worker error:', err);
      try {
        return await errorResponse(request, env, 500);
      } catch {
        return new Response('Internal Server Error', { status: 500 });
      }
    }
  },
};
