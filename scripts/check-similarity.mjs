import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Near-duplicate check for built device pages (brand hubs + allowlisted models).
 * Compares the visible text inside <main> of every pair of pages with 5-word shingles and reports
 * the larger of the two containment scores (share of one page's shingles that also appear on the other).
 * Run after `astro build`: node scripts/check-similarity.mjs [threshold]
 */
export const SHINGLE_SIZE = 5;
export const DEFAULT_THRESHOLD = 0.7;

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsaquo: '›', middot: '·' };

export function mainText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  return main
    .replace(/<(script|style|template|svg)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) =>
      e[0] === '#' ? String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENTITIES[e] ?? m,
    )
    .replace(/\s+/g, ' ')
    .trim();
}

const words = (text) => text.toLowerCase().match(/[\p{L}\p{N}+’'.-]+/gu) ?? [];

function shingles(text) {
  const w = words(text);
  const set = new Set();
  for (let i = 0; i + SHINGLE_SIZE <= w.length; i++) set.add(w.slice(i, i + SHINGLE_SIZE).join(' '));
  return set;
}

/** Returns every page pair sorted by similarity (highest first). */
export function compareDevicePages(distDir, slugs) {
  const pages = slugs.map((slug) => {
    const text = mainText(fs.readFileSync(path.join(distDir, `${slug}.html`), 'utf8'));
    return { slug, words: words(text).length, shingles: shingles(text) };
  });
  const pairs = [];
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i];
      const b = pages[j];
      let shared = 0;
      for (const s of a.shingles) if (b.shingles.has(s)) shared++;
      const containment = Math.max(shared / a.shingles.size, shared / b.shingles.size);
      const jaccard = shared / (a.shingles.size + b.shingles.size - shared);
      pairs.push({ a: a.slug, b: b.slug, containment, jaccard });
    }
  }
  return { pages, pairs: pairs.sort((x, y) => y.containment - x.containment) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const distDir = path.join(root, 'dist');
  const threshold = Number(process.argv[2] ?? DEFAULT_THRESHOLD);
  const { devices } = await import('../src/data/devices.ts');
  const { isPublishedDevice } = await import('../src/data/indexable-devices.ts');
  const slugs = Object.values(devices).filter(isPublishedDevice).map((d) => d.slug);
  const { pages, pairs } = compareDevicePages(distDir, slugs);
  const pct = (n) => `${(n * 100).toFixed(1)}%`;

  console.log(`${pages.length} device pages, ${pairs.length} pairs, ${SHINGLE_SIZE}-word shingles, threshold ${pct(threshold)}`);
  for (const p of pages) console.log(`  ${p.slug}: ${p.words} words`);
  console.log('\nTop 10 pairs (containment / jaccard):');
  for (const p of pairs.slice(0, 10)) console.log(`  ${pct(p.containment).padStart(6)} / ${pct(p.jaccard).padStart(6)}  ${p.a} <> ${p.b}`);
  const over = pairs.filter((p) => p.containment >= threshold);
  console.log(`\nPairs at or above ${pct(threshold)}: ${over.length}`);
  if (over.length) process.exit(1);
}
