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

// 3. Unindexed programmatic device pages must NOT have AdSense script
const thinDevice = fs.readFileSync(path.join(distDir, 'fix-iphone-15-pro-max-speaker.html'), 'utf8');
assert(!thinDevice.includes('pagead2.googlesyndication.com'), 'Unindexed model page suppresses AdSense script');

// 4. Privacy policy must include partner sites link
const privacyHtml = fs.readFileSync(path.join(distDir, 'privacy.html'), 'utf8');
assert(privacyHtml.includes('<a href="https://policies.google.com/technologies/partner-sites"'), 'Privacy policy contains clickable Google Partner Sites hyperlink tag');

// 5. Tool container must have google-auto-ads-ignore
assert(indexHtml.includes('google-auto-ads-ignore'), 'Speaker tool container includes google-auto-ads-ignore');

// 6. Device directory must have nofollow on unindexed models
assert(indexHtml.includes('rel="nofollow"'), 'Device directory uses rel="nofollow" for unindexed models');

if (errors > 0) {
  console.error(`\nTest run failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('\nAll AdSense compliance tests passed with 0 errors.');
}
