// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { checkSitemap } from './scripts/check-sitemap.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://fixthespeaker.com',
  // Clean URLs: /about is emitted as about.html and served as /about (matches canonical + sitemap)
  trailingSlash: 'never',
  // inlineStylesheets: the ~12 KB stylesheet ships inside each page so first paint does not wait on a CSS request.
  build: { format: 'file', inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'en',
    // English only: translated copies were retired in October 2026 and redirect to English (public/_redirects).
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    {
      // Build fails if any sitemap URL is noindexed or was not built (scripts/check-sitemap.mjs).
      name: 'sitemap-noindex-check',
      hooks: {
        'astro:build:done': ({ dir, logger }) => {
          logger.info(`Sitemap check passed: ${checkSitemap(fileURLToPath(dir))} URLs, none noindexed.`);
        },
      },
    },
  ],
});
