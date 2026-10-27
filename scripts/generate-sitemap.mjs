import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://fixthespeaker.com';
const TODAY = new Date().toISOString().slice(0, 10); // dynamic: set to the actual build date

// The site is English-only, so the sitemap lists each built, indexable page once with no hreflang alternates.
async function main() {
  // Dynamically import devices data from TS file
  const { devices } = await import('../src/data/devices.ts');
  const { INDEXABLE_DEVICE_SLUGS } = await import('../src/data/indexable-devices.ts');
  const { guides } = await import('../src/data/guides.ts');

  const hubSlugs = Object.keys(devices).filter((slug) => devices[slug].category === 'hub');
  for (const slug of INDEXABLE_DEVICE_SLUGS) {
    if (!devices[slug]) throw new Error(`Allowlisted device "${slug}" does not exist in src/data/devices.ts`);
  }

  const pages = [
    { loc: `${SITE_URL}/`, lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE_URL}/about`, lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
    { loc: `${SITE_URL}/privacy`, lastmod: TODAY, changefreq: 'monthly', priority: '0.4' },
    { loc: `${SITE_URL}/terms`, lastmod: TODAY, changefreq: 'monthly', priority: '0.4' },
    { loc: `${SITE_URL}/contact`, lastmod: TODAY, changefreq: 'monthly', priority: '0.4' },
    // Brand hubs
    ...hubSlugs.map((slug) => ({ loc: `${SITE_URL}/${slug}`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' })),
    // Allowlisted model pages (src/data/indexable-devices.ts)
    ...INDEXABLE_DEVICE_SLUGS.map((slug) => ({ loc: `${SITE_URL}/${slug}`, lastmod: TODAY, changefreq: 'monthly', priority: '0.70' })),
    // Guides
    { loc: `${SITE_URL}/guides`, lastmod: guides.map((g) => g.updated).sort().at(-1) ?? TODAY, changefreq: 'monthly', priority: '0.7' },
    ...guides.map((g) => ({ loc: `${SITE_URL}/guides/${g.slug}`, lastmod: g.updated, changefreq: 'monthly', priority: '0.7' })),
  ];

  console.log(`Indexing ${hubSlugs.length} hub pages, ${INDEXABLE_DEVICE_SLUGS.length} allowlisted model pages and ${guides.length} guides.`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
  for (const page of pages) {
    xml += `  <url>\n`;
    xml += `    <loc>${page.loc}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Successfully generated public/sitemap.xml with ${pages.length} total URL entries.`);
}

main().catch((err) => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
