import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://fixthespeaker.com';
const TODAY = new Date().toISOString().slice(0, 10); // dynamic: set to the actual build date

const LANGS = [
  { code: 'en', pathPrefix: '' },
  { code: 'es', pathPrefix: '/es' },
  { code: 'ja', pathPrefix: '/ja' },
  { code: 'fr', pathPrefix: '/fr' },
  { code: 'de', pathPrefix: '/de' },
  { code: 'pt', pathPrefix: '/pt' },
  { code: 'ko', pathPrefix: '/ko' },
  { code: 'it', pathPrefix: '/it' },
];

async function main() {
  // Dynamically import devices data from TS file
  const devicesModule = await import('../src/data/devices.ts');
  const devices = devicesModule.devices;
  const deviceSlugs = Object.keys(devices);
  const { isTranslatedSubpageIndexed } = await import('../src/data/indexing.ts');
  const HUB_SLUGS = new Set([
    'fix-iphone-speaker',
    'eject-water-samsung-galaxy',
    'clean-airpods-speaker',
    'fix-apple-watch-speaker',
    'fix-android-speaker',
  ]);

  const indexableDeviceSlugs = deviceSlugs.filter(
    (slug) => HUB_SLUGS.has(slug) || devices[slug].category === 'hub'
  );

  console.log(`Found ${deviceSlugs.length} total device profiles; indexing only ${indexableDeviceSlugs.length} hub pages in sitemap.`);

  const staticPages = [
    { slug: '', priority: '1.0', changefreq: 'weekly' },
    { slug: 'about', priority: '0.6', changefreq: 'monthly' },
    { slug: 'privacy', priority: '0.4', changefreq: 'monthly' },
    { slug: 'terms', priority: '0.4', changefreq: 'monthly' },
    { slug: 'contact', priority: '0.4', changefreq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // 1. Static Pages
  for (const page of staticPages) {
    const isRoot = page.slug === '';
    // Translations that are not indexable are left out of the sitemap and its hreflang alternates.
    const pageLangs = isTranslatedSubpageIndexed(page.slug) ? LANGS : LANGS.filter((l) => l.code === 'en');
    for (const lang of pageLangs) {
      const isDefault = lang.code === 'en';
      const loc = isRoot
        ? (isDefault ? `${SITE_URL}/` : `${SITE_URL}/${lang.code}`)
        : (isDefault ? `${SITE_URL}/${page.slug}` : `${SITE_URL}/${lang.code}/${page.slug}`);

      const pagePriority = isDefault ? page.priority : (parseFloat(page.priority) - 0.1).toFixed(1);

      xml += `  <url>\n`;
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <lastmod>${TODAY}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${pagePriority}</priority>\n`;

      // Hreflang alternates
      const defaultUrl = isRoot ? `${SITE_URL}/` : `${SITE_URL}/${page.slug}`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />\n`;
      for (const l of pageLangs) {
        const altUrl = isRoot
          ? (l.code === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${l.code}`)
          : (l.code === 'en' ? `${SITE_URL}/${page.slug}` : `${SITE_URL}/${l.code}/${page.slug}`);
        xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${altUrl}" />\n`;
      }
      xml += `  </url>\n`;
    }
  }

  // 2. Programmatic Device Hub Pages (exclusively 5 hub pages across all 8 languages)
  for (const slug of indexableDeviceSlugs) {
    const isHub = devices[slug].category === 'hub';
    const basePriority = isHub ? '0.85' : '0.80';

    const hubLangs = isTranslatedSubpageIndexed(slug) ? LANGS : LANGS.filter((l) => l.code === 'en');
    for (const lang of hubLangs) {
      const isDefault = lang.code === 'en';
      const loc = isDefault ? `${SITE_URL}/${slug}` : `${SITE_URL}/${lang.code}/${slug}`;
      const pagePriority = isDefault ? basePriority : (parseFloat(basePriority) - 0.05).toFixed(2);

      xml += `  <url>\n`;
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <lastmod>${TODAY}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>${pagePriority}</priority>\n`;

      const defaultUrl = `${SITE_URL}/${slug}`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />\n`;
      for (const l of hubLangs) {
        const altUrl = l.code === 'en' ? `${SITE_URL}/${slug}` : `${SITE_URL}/${l.code}/${slug}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${altUrl}" />\n`;
      }
      xml += `  </url>\n`;
    }
  }

  // 3. English-only guides (no localized versions, so no hreflang alternates)
  const { guides } = await import('../src/data/guides.ts');
  const guidePages = [
    { loc: `${SITE_URL}/guides`, lastmod: guides.map((g) => g.updated).sort().at(-1) ?? TODAY },
    ...guides.map((g) => ({ loc: `${SITE_URL}/guides/${g.slug}`, lastmod: g.updated })),
  ];
  for (const page of guidePages) {
    xml += `  <url>\n`;
    xml += `    <loc>${page.loc}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Successfully generated public/sitemap.xml with ${(xml.match(/<loc>/g) || []).length} total URL entries.`);
}

main().catch((err) => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
