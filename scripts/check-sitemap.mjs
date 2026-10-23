import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_URL = 'https://fixthespeaker.com';
const NOINDEX = /<meta name="robots" content="[^"]*noindex/i;

/**
 * Fails when a sitemap URL is missing from the build or is noindexed.
 * Runs after `astro build` (see astro.config.mjs) and can be run on its own: node scripts/check-sitemap.mjs
 */
export function checkSitemap(distDir) {
  const sitemap = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const errors = [];

  for (const loc of locs) {
    const pathname = new URL(loc).pathname.replace(/\/+$/, '');
    const file = path.join(distDir, pathname === '' ? 'index.html' : `${pathname}.html`);
    if (!loc.startsWith(SITE_URL) || !fs.existsSync(file)) {
      errors.push(`${loc}: no built page (${path.relative(distDir, file)})`);
    } else if (NOINDEX.test(fs.readFileSync(file, 'utf8'))) {
      errors.push(`${loc}: page is noindex`);
    }
  }

  if (errors.length) {
    throw new Error(`Sitemap check failed for ${errors.length} URL(s):\n  ${errors.join('\n  ')}`);
  }
  return locs.length;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
  try {
    console.log(`Sitemap check passed: ${checkSitemap(distDir)} URLs, none noindexed.`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
