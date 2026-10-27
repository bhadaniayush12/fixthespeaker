import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Please run "npm run build" first.');
  process.exit(1);
}

let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Core pages must have AdSense script
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
assert(indexHtml.includes('pagead2.googlesyndication.com'), 'Homepage includes AdSense verification script');

const hubHtml = fs.readFileSync(path.join(distDir, 'fix-iphone-speaker.html'), 'utf8');
assert(hubHtml.includes('pagead2.googlesyndication.com'), 'Hub page (iPhone) includes AdSense verification script');

// 2. Error pages must NOT have AdSense script (Policy Prohibition)
const err404 = fs.readFileSync(path.join(distDir, '404.html'), 'utf8');
assert(!err404.includes('pagead2.googlesyndication.com'), '404 error page suppresses AdSense script');

const err500 = fs.readFileSync(path.join(distDir, '500.html'), 'utf8');
assert(!err500.includes('pagead2.googlesyndication.com'), '500 error page suppresses AdSense script');

// 4. Privacy policy must include partner sites link
const privacyHtml = fs.readFileSync(path.join(distDir, 'privacy.html'), 'utf8');
assert(privacyHtml.includes('<a href="https://policies.google.com/technologies/partner-sites"'), 'Privacy policy contains clickable Google Partner Sites hyperlink tag');

// 5. Tool container must have google-auto-ads-ignore
assert(indexHtml.includes('google-auto-ads-ignore'), 'Speaker tool container includes google-auto-ads-ignore');

const read = (file) => fs.readFileSync(path.join(distDir, file), 'utf8');
const builtPages = fs
  .readdirSync(distDir, { recursive: true })
  .filter((file) => file.endsWith('.html'))
  .map((file) => `/${file.replace(/\.html$/, '').replace(/^index$/, '')}`);
const isBuilt = (urlPath) => builtPages.includes(urlPath.replace(/\/+$/, '') || '/');
const { devices } = await import('../src/data/devices.ts');
const { INDEXABLE_DEVICE_SLUGS, isPublishedDevice } = await import('../src/data/indexable-devices.ts');
const publishedSlugs = Object.values(devices).filter(isPublishedDevice).map((d) => d.slug);
const retiredSlugs = Object.values(devices).filter((d) => !isPublishedDevice(d)).map((d) => d.slug);

// 6. Only English pages are built: home, about, contact, privacy, terms, 404/500, guides, hubs, allowlisted models
const LOCALES = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];
assert(!builtPages.some((p) => LOCALES.some((l) => p === `/${l}` || p.startsWith(`/${l}/`))), 'No translated (/[lang]/) pages are built');
assert(builtPages.length === 8 + publishedSlugs.length + 10, `Built pages are exactly the kept set (${builtPages.length})`);
assert(retiredSlugs.every((slug) => !isBuilt(`/${slug}`)), `Retired model pages (${retiredSlugs.length}) are not built`);

// 7. No hreflang alternates or language switcher anywhere
assert(builtPages.every((p) => !/hreflang=|og:locale:alternate|data-lang-code=/.test(read(`${p === '/' ? 'index' : p.slice(1)}.html`))), 'No page has hreflang, locale alternates or a language switcher');

// 7b. Allowlisted model pages (src/data/indexable-devices.ts) are indexable, carry the sourced section and no unsourced claims
const NOINDEX = 'name="robots" content="noindex';
const UNSOURCED = /Optimal Frequency|excursion|acoustic pressure|100%|resonan|Acoustic Profile/i;
for (const slug of INDEXABLE_DEVICE_SLUGS) {
  const html = read(`${slug}.html`);
  assert(!html.includes(NOINDEX) && html.includes('data-device-specific'), `Allowlisted ${slug} is indexable with a device-specific section`);
}
const { mainText } = await import('./check-similarity.mjs');
const claimHits = publishedSlugs.filter((slug) => UNSOURCED.test(mainText(read(`${slug}.html`))));
assert(claimHits.length === 0, `Device pages have no unsourced frequency/excursion/100% claims${claimHits.length ? `: ${claimHits.join(', ')}` : ''}`);

// 7c. Every internal link on a built page points to a built page (no links into redirects)
const broken = new Set();
for (const p of builtPages) {
  for (const [, href] of read(`${p === '/' ? 'index' : p.slice(1)}.html`).matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)/g)) {
    if (!isBuilt(href)) broken.add(`${p} -> ${href}`);
  }
}
assert(broken.size === 0, `Internal links all resolve to built pages${broken.size ? `: ${[...broken].slice(0, 5).join(', ')}` : ''}`);

// 7d. Sitemap lists exactly the built, indexable pages
const sitemapPaths = [...read('sitemap.xml').matchAll(/<loc>https:\/\/fixthespeaker\.com([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
const indexablePages = builtPages.filter((p) => !read(`${p === '/' ? 'index' : p.slice(1)}.html`).includes(NOINDEX));
assert(
  sitemapPaths.length === indexablePages.length && indexablePages.every((p) => sitemapPaths.includes(p)),
  `Sitemap lists exactly the ${indexablePages.length} indexable pages`,
);

// 7e. _redirects: within Cloudflare limits, never shadows a built page, targets are built, every retired URL is covered
const rules = read('_redirects')
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split(/\s+/));
const dynamicRules = rules.filter(([from]) => from.includes('*') || from.includes(':'));
const staticRules = rules.filter((rule) => !dynamicRules.includes(rule));
assert(staticRules.length <= 2000 && dynamicRules.length <= 100, `_redirects within limits (${staticRules.length} static, ${dynamicRules.length} dynamic)`);
assert(rules.every((rule) => rule.length === 3 && rule[2] === '301'), 'Every redirect is a 301');
assert(rules.findIndex((rule) => dynamicRules.includes(rule)) > rules.findLastIndex((rule) => staticRules.includes(rule)), 'Static redirects come before dynamic ones');
assert(staticRules.every(([from]) => !isBuilt(from) || from.endsWith('/')), 'No redirect source is a built page');
assert(rules.every(([, to]) => to === '/:splat' || isBuilt(to)), 'Every redirect target is a built page');
const staticFrom = new Set(staticRules.map(([from]) => from));
assert(retiredSlugs.every((slug) => staticFrom.has(`/${slug}`)), 'Every retired model URL has a redirect');
assert(LOCALES.every((l) => staticFrom.has(`/${l}`) && dynamicRules.some(([from]) => from === `/${l}/*`)), 'Every retired locale has a redirect');

// 8. Template text must not leak internal catalogue names
assert(!/(AirPods|Apple Watch|Android) Hub|\(All Models\)-/.test(read('fix-apple-watch-speaker.html')), 'fix-apple-watch-speaker.html has no leaked template names');

// 8b. No pair of device pages is a near-duplicate
const { compareDevicePages, DEFAULT_THRESHOLD } = await import('./check-similarity.mjs');
const [top] = compareDevicePages(distDir, publishedSlugs).pairs;
assert(top.containment < DEFAULT_THRESHOLD, `No device page pair reaches ${DEFAULT_THRESHOLD * 100}% similarity (highest ${(top.containment * 100).toFixed(1)}%: ${top.a} <> ${top.b})`);

// 9. EEA consent comes from the Google consent message; the site has no own banner or newsletter form
assert(!indexHtml.includes('id="cookie-consent"'), 'Homepage has no custom cookie banner');
assert(!indexHtml.includes('subscribe-form'), 'Homepage has no newsletter form');
assert(/region:\s*\[[^\]]*'DE'/.test(indexHtml) && indexHtml.includes("ad_storage: 'denied'"), 'EEA consent defaults stay denied');

if (errors > 0) {
  console.error(`\nTest run failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll AdSense compliance tests passed with 0 errors.');
}
