import { onRequestPost as handleSubscribe, onRequestOptions as handleSubscribeOptions } from './functions/api/subscribe.js';
import { onRequestGet as handleExport } from './functions/api/export-subscribers.js';

const SUPPORTED_LOCALES = new Set(['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it']);

function getLocale(pathname) {
  const locale = pathname.split('/').filter(Boolean)[0];
  return SUPPORTED_LOCALES.has(locale) ? locale : 'en';
}

async function localizedErrorResponse(request, env, status, locale) {
  const url = new URL(request.url);
  const errorPath = locale === 'en' ? `/${status}` : `/${locale}/${status}`;
  const errorUrl = new URL(errorPath, url);
  const asset = await env.ASSETS.fetch(new Request(errorUrl, request));
  return new Response(asset.body, {
    status,
    headers: asset.headers,
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '');
    const locale = getLocale(url.pathname);

    try {
      if (path === '/api/subscribe') {
        if (request.method === 'OPTIONS') {
          return handleSubscribeOptions();
        }
        if (request.method === 'POST') {
          return handleSubscribe({ request, env });
        }
      }

      if (path === '/api/export-subscribers') {
        if (request.method === 'GET') {
          return handleExport({ request, env });
        }
      }

      // All remaining requests are served from the static asset bundle.
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404 && !url.pathname.endsWith('/404')) {
        return localizedErrorResponse(request, env, 404, locale);
      }
      return response;
    } catch {
      return localizedErrorResponse(request, env, 500, locale);
    }
  },
};
