# Re-index earning device pages and improve hub CTR

Branch: `seo/reindex-earning-pages` (not deployed)

## Step 1: How noindex is applied to device pages

There is no config list for model pages. The rule is built from code in three places:

1. **`src/components/pages/DevicePage.astro`** (shared by `src/pages/[device].astro` and
   `src/pages/[lang]/[device].astro`). It has a hard-coded `HUB_SLUGS` set of the five hub pages and
   defaults the `noindex` prop to:

   ```ts
   noindex = !HUB_SLUGS.has(device.slug) && device.category !== 'hub'
   ```

   So every model page (anything that is not a hub) is noindexed. The value goes to `Layout`.

2. **`src/layouts/Layout.astro`** adds a second rule for translations:

   ```ts
   const isThinTranslation = lang !== defaultLang && localized && !isTranslatedSubpageIndexed(subpage);
   const noindex = noindexProp || isThinTranslation;
   const showAds = (showAdsProp ?? true) && !noindex;
   ...
   {noindex && <meta name="robots" content="noindex, nofollow" />}
   ```

   `isTranslatedSubpageIndexed` comes from `src/data/indexing.ts`, where `INDEXED_TRANSLATED_SUBPAGES`
   is `['', 'privacy']`. Every other translated page, hubs included, is noindexed. The same `noindex`
   flag also turns off the AdSense script (`showAds`).

   Indexable pages emit **no** robots meta tag, which browsers and crawlers treat as `index, follow`.

3. **Supporting code that follows the same rule:**
   - `src/components/Hreflang.astro` lists translations only when `isTranslatedSubpageIndexed()` is true.
   - `scripts/generate-sitemap.mjs` keeps its own copy of `HUB_SLUGS` and writes only the hubs (English
     only, because of the translation rule) plus the static pages and guides: 30 URLs.
   - Links to model pages carry `rel="nofollow"` in `DeviceDirectory.astro` (`category !== 'hub'`) and
     in the "Other devices" cards in `DevicePage.astro` (`!HUB_SLUGS.has(slug)`).
