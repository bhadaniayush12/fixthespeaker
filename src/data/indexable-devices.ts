// Device model pages that are built, indexable (index, follow) and may show ads, listed by URL path.
// The five brand hubs are always built as well. Every other model URL is 301-redirected in public/_redirects.
// Add a path here only once the page has a sourced English entry in src/data/deviceSpecifics.ts.
// The site is English-only: translated copies were retired in October 2026 (see public/_redirects).
export const INDEXABLE_DEVICE_PATHS: readonly string[] = [
  '/fix-motorola-edge-50-ultra-speaker',
  '/eject-water-samsung-galaxy-s25',
  '/clean-pixel-buds-pro-2-speaker',
  '/fix-redmi-13c-speaker',
  '/eject-water-samsung-galaxy-s24-ultra',
  '/fix-pixel-8-pro-speaker',
  '/fix-iphone-17-pro-max-speaker',
  '/eject-water-samsung-galaxy-s24',
  '/fix-pixel-7-speaker',
  '/fix-redmi-note-13-speaker',
  '/fix-iphone-17-speaker',
  '/eject-water-samsung-galaxy-s22-ultra',
  '/fix-realme-12-pro-plus-speaker',
  '/fix-moto-g84-speaker',
  '/fix-samsung-galaxy-z-fold-6-speaker',
];

export const INDEXABLE_DEVICE_SLUGS: readonly string[] = INDEXABLE_DEVICE_PATHS.map((path) => path.slice(1));

export const isIndexableDevice = (slug: string): boolean => INDEXABLE_DEVICE_SLUGS.includes(slug);

/** Device pages that are built: the brand hubs plus the allowlisted models above. */
export const isPublishedDevice = (device: { slug: string; category: string }): boolean =>
  device.category === 'hub' || isIndexableDevice(device.slug);
