import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://fixthespeaker.com';
const TODAY = '2026-09-06';

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

  console.log(`Found ${deviceSlugs.length} device slugs to include in sitemap.`);

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
    for (const lang of LANGS) {
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
      for (const l of LANGS) {
        const altUrl = isRoot
          ? (l.code === 'en' ? `${SITE_URL}/` : `${SITE_URL}/${l.code}`)
          : (l.code === 'en' ? `${SITE_URL}/${page.slug}` : `${SITE_URL}/${l.code}/${page.slug}`);
        xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${altUrl}" />\n`;
      }
      xml += `  </url>\n`;
    }
  }

  // 2. Programmatic Device Pages
  for (const slug of deviceSlugs) {
    const isHub = devices[slug].category === 'hub';
    const basePriority = isHub ? '0.85' : '0.80';

    for (const lang of LANGS) {
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
      for (const l of LANGS) {
        const altUrl = l.code === 'en' ? `${SITE_URL}/${slug}` : `${SITE_URL}/${l.code}/${slug}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${altUrl}" />\n`;
      }
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Successfully generated public/sitemap.xml with ${staticPages.length * 8 + deviceSlugs.length * 8} total URL entries.`);
}

main().catch((err) => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
