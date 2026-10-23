// Device model pages that are indexable (index, follow) and may show ads, listed by URL path.
// Hub pages are always indexable in English; every other model page stays noindexed.
// Add a path here only once the page has a sourced entry in src/data/deviceSpecifics.ts.
export const INDEXABLE_DEVICE_PATHS: readonly string[] = [
  '/fix-motorola-edge-50-ultra-speaker',
  '/eject-water-samsung-galaxy-s25',
  '/clean-pixel-buds-pro-2-speaker',
  '/fix-redmi-13c-speaker',
  '/eject-water-samsung-galaxy-s24-ultra',
  '/fix-pixel-8-pro-speaker',
  '/es/fix-iphone-17-pro-max-speaker',
  '/es/eject-water-samsung-galaxy-s24',
  '/fix-pixel-7-speaker',
  '/fix-redmi-note-13-speaker',
  '/it/fix-iphone-17-speaker',
  '/it/fix-iphone-17-pro-max-speaker',
  '/eject-water-samsung-galaxy-s22-ultra',
  '/fix-realme-12-pro-plus-speaker',
  '/es/fix-motorola-edge-50-ultra-speaker',
  '/fix-moto-g84-speaker',
  '/fix-samsung-galaxy-z-fold-6-speaker',
];

const LOCALE_PREFIX = /^\/(es|ja|fr|de|pt|ko|it)(?=\/)/;

const normalizePath = (path: string): string => `/${path.replace(/^\/+|\/+$/g, '')}`;

const splitPath = (path: string): { lang: string; slug: string } => {
  const clean = normalizePath(path);
  const match = clean.match(LOCALE_PREFIX);
  return match ? { lang: match[1], slug: clean.slice(match[0].length + 1) } : { lang: 'en', slug: clean.slice(1) };
};

export const isIndexableDevicePath = (path: string): boolean => INDEXABLE_DEVICE_PATHS.includes(normalizePath(path));

export const isIndexableDevice = (slug: string, lang: string): boolean =>
  isIndexableDevicePath(lang === 'en' ? `/${slug}` : `/${lang}/${slug}`);

/** Locales in which this device slug is allowlisted, e.g. ['en', 'es']. Used for hreflang and the sitemap. */
export const indexableDeviceLocales = (slug: string): string[] =>
  INDEXABLE_DEVICE_PATHS.map(splitPath)
    .filter((entry) => entry.slug === slug)
    .map((entry) => entry.lang);
