// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fixthespeaker.com',
  // Clean URLs: /about is emitted as about.html and served as /about (matches canonical + sitemap)
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
});
