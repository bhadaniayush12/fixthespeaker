# Re-index earning device pages and improve hub CTR

Branch: `seo/reindex-earning-pages`, one commit per step. **Not deployed.**
Date: 2026-10-23

| Step | Commit |
|---|---|
| 1. Explain noindex | `c07c61d` docs(seo): document how noindex is applied to device pages |
| 2. Allowlist | `1e700cf` feat(seo): allowlist earning device pages as indexable |
| 3. Unique content | `d570931` feat(content): add sourced device-specific section to allowlisted pages |
| 4. Sitemap + check | `6439f2a` feat(sitemap): include allowlisted device pages; fail build on noindex URLs |
| 5. CTR titles | `1371780` feat(seo): CTR-focused titles and descriptions for Samsung and Android hubs |
| 6. Verify | this report + compliance test additions |

The uncommitted Playwright work that was already in the tree (`.gitignore`, `package.json`,
`package-lock.json`, `playwright.config.ts`, `tests/`) was left alone and is not part of any commit.

---

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

   Indexable pages emit **no** robots meta tag, which crawlers treat as `index, follow`.

3. **Supporting code that follows the same rule:**
   - `src/components/Hreflang.astro` lists translations only when `isTranslatedSubpageIndexed()` is true.
   - `scripts/generate-sitemap.mjs` keeps its own copy of `HUB_SLUGS` and wrote only the hubs (English
     only, because of the translation rule) plus static pages and guides: 30 URLs.
   - Links to model pages carry `rel="nofollow"` in `DeviceDirectory.astro` (`category !== 'hub'`) and
     in the "Other devices" cards in `DevicePage.astro` (`!HUB_SLUGS.has(slug)`).

## Step 2: Allowlist

New file **`src/data/indexable-devices.ts`** holds `INDEXABLE_DEVICE_PATHS`, the 17 paths as given.
To add more pages later, add a path there (and an entry in `src/data/deviceSpecifics.ts`, see Step 3).

Wiring (smallest change to each existing rule):

- `DevicePage.astro`: the default `noindex` is now also false when `isIndexableDevice(slug, lang)`.
- `Layout.astro`: `isThinTranslation` skips allowlisted paths, so `/es/…` and `/it/…` entries become
  indexable while every other translation keeps its noindex.
- `Hreflang.astro`: an allowlisted page lists only the locales of that model that are themselves
  allowlisted (e.g. Motorola edge 50 ultra: `x-default`, `en`, `es`; iPhone 17 Pro Max: `es`, `it`).
  Hreflang never points at a noindexed version. Other pages are unchanged.
- `DeviceDirectory.astro` and the "Other devices" cards: no `rel="nofollow"` on links to allowlisted
  pages, so crawlers can reach them. All other model links keep `nofollow`.

The robots meta stays absent on allowlisted pages, the same as the 30 pages that were already
indexable (no meta = `index, follow`). I did not add an explicit `index, follow` tag so all indexable
pages behave the same way.

## Step 3: Device-specific content

New file **`src/data/deviceSpecifics.ts`**: one entry per allowlisted page with "Where the speakers are",
"Water rating", three model-specific steps, one FAQ, and the source links shown on the page. It renders
as a "Model-specific notes" section after the hardware profile card. The FAQ is added first to both the
visible FAQ list and the `FAQPage` JSON-LD. English was written first; es/it entries are translations of
the same English text. (The English versions of the es/it-only models, such as `/fix-iphone-17-speaker`,
also show the English section but stay noindexed.)

**Rules I followed:** only facts from manufacturer pages, each page's sources listed under the section,
no numbers that are not on those pages. When an official page does not give grille positions, the text
says so instead of guessing. That applies to **iPhone 17 / 17 Pro Max, Galaxy S25, S24, S22 Ultra,
Z Fold6, Motorola edge 50 ultra, moto g84, Redmi 13C, Redmi Note 13 and realme 12 Pro+**. Specific
positions are given only where an official source names them:
- Pixel 7 / Pixel 8 Pro: Google's hardware diagram labels a "Top speaker" and a "Bottom speaker"
  (and, on the 8 Pro, a separate "mmWave antenna cover").
- Galaxy S24 Ultra: Samsung's S24 series release names a "Top Speaker Module" and "Bottom Speaker Module".
- Pixel Buds Pro 2: Google names the snout, rear vent and microphone meshes.

Sources used (all fetched 2026-10-23):

| Model | Official sources |
|---|---|
| iPhone 17 / 17 Pro Max | support.apple.com/en-us/125089, /125091 (tech specs), /108039 (water resistance), /102643 (liquid alert) |
| Pixel 7, Pixel 8 Pro | support.google.com/pixelphone/answer/7158570 (specs), /7157629 (hardware diagram), /7533279 (water) |
| Pixel Buds Pro 2 | store.google.com/product/pixel_buds_pro_2_specs, support.google.com/googlepixelbuds/answer/9112670 |
| Galaxy S25, S24, S24 Ultra | Samsung HK spec releases for S25 and S24 series; samsung.com/us/support/answer/ANS10001610; Samsung UK water-drop icon page |
| Galaxy S22 Ultra, Z Fold6 | news.samsung.com spec releases; ANS10001610; Samsung UK water-drop icon page |
| Motorola edge 50 ultra | en-us.support.motorola.com a_id 187312 (specs); motorola.com/gb product page (IP68 footnote) |
| moto g84 5G | motorola.com/au product page (water-repellent footnote); support spec page a_id 176650 (IP54, see note below) |
| Redmi 13C, Redmi Note 13 | mi.com FAQ KA-47262, KA-142672; mi.com spec pages for Redmi 13C, Note 13, Note 13 5G |
| realme 12 Pro+ | realme.com/global/realme-12-pro-plus (IP65 footnote); realme.com/ph spec page |

**One fact to double-check:** the moto g84 **IP54** figure. Motorola's support spec page (a_id 176650)
blocked automated fetching. I confirmed "IPX IP54" only from that page's text in the search-result
snippet. The product page I could read says only "water-repellent design". Please open the
support page in a browser before deploying. If you'd rather not rely on it, delete the IP54 sentence;
the rest of the section stands on the product page alone.

Word counts (speaker + water + steps text, without headings or the FAQ; target 150–250):

| Page | Words |
|---|---|
| /fix-motorola-edge-50-ultra-speaker | 209 |
| /es/fix-motorola-edge-50-ultra-speaker | 224 |
| /eject-water-samsung-galaxy-s25 | 188 |
| /clean-pixel-buds-pro-2-speaker | 196 |
| /fix-redmi-13c-speaker | 196 |
| /eject-water-samsung-galaxy-s24-ultra | 189 |
| /fix-pixel-8-pro-speaker | 198 |
| /es/fix-iphone-17-pro-max-speaker | 226 |
| /it/fix-iphone-17-pro-max-speaker | 224 |
| /es/eject-water-samsung-galaxy-s24 | 212 |
| /fix-pixel-7-speaker | 180 |
| /fix-redmi-note-13-speaker | 188 |
| /it/fix-iphone-17-speaker | 214 |
| /eject-water-samsung-galaxy-s22-ultra | 198 |
| /fix-realme-12-pro-plus-speaker | 180 |
| /fix-moto-g84-speaker | 180 |
| /fix-samsung-galaxy-z-fold-6-speaker | 205 |

## Step 4: Sitemap

- `scripts/generate-sitemap.mjs` reads the allowlist and adds each allowlisted URL, with hreflang
  alternates that match the page's own hreflang. It throws if an allowlisted slug is not a real device.
- `public/sitemap.xml` regenerated: **47 URLs** (30 existing + 17 allowlisted). `lastmod` moved to
  2026-10-23 for all entries because the script stamps the build date, as in earlier sitemap commits.
- **Build-time check:** `scripts/check-sitemap.mjs`, run from an `astro:build:done` hook in
  `astro.config.mjs`. It fails `astro build` if any sitemap URL has no built page or has a noindex robots
  tag. It also runs on its own: `node scripts/check-sitemap.mjs`.
  Tested: adding `/fix-iphone-15-pro-max-speaker` (noindexed) to the sitemap made the build exit 1 with
  `Sitemap check failed for 1 URL(s)`. Removing it restored a clean build.

## Step 5: CTR titles and descriptions (English hubs)

| Page | | Old | New |
|---|---|---|---|
| /eject-water-samsung-galaxy | Title | Eject Water from Samsung Galaxy Speaker: Sound Cleaner Tool (59) | **Water Eject Samsung: Free Instant Tool, All Galaxy Phones** (57) |
| | Description | Clear water from Samsung Galaxy S25, S24, S23, S22, Z Fold, Z Flip & A-series speakers. A 165 Hz water ejection sound helps clear muffled audio in about 60 seconds. (164) | **Free water eject sound for every Samsung Galaxy phone: S, Z Fold, Z Flip, A series. Starts instantly in your browser, no app. Helps clear muffled audio.** (152) |
| /fix-android-speaker | Title | Fix Android Speaker: Water Eject Sound & Speaker Dust Cleaner (61) | **Fix Android Speaker: Free Instant Water Eject Sound, No App** (59) |
| | Description | Eject water from Google Pixel, Samsung, Xiaomi, OnePlus, Motorola & Android speakers. 165 Hz water eject sound and high-frequency sweep fix muffled audio in 60s. (161) | **Free water eject sound for any Android phone: Pixel, Samsung, Xiaomi, OnePlus, Motorola. Instant, in your browser, no app. Helps clear muffled audio.** (149) |

Both lead with the target keyword. Both old descriptions were over 155 characters and would have been cut
off. "All Galaxy phones" is a compatibility claim (the tool runs in any phone browser), not a promise
that it fixes every phone. I kept the existing "helps clear" wording rather than "fixes".
Translated hub titles are unchanged; those pages are noindexed.

## Step 6: Verification

- `npm run build`: **0 errors**, 1,326 pages, sitemap check passed (47 URLs, none noindexed).
- `npm test` (AdSense compliance suite): **all passed**. Six assertions added: three allowlisted pages
  are indexable and have the section; `/fix-iphone-17-pro-max-speaker`, `/de/fix-pixel-7-speaker` and
  `/fix-iphone-15-pro-max-speaker` stay noindexed and ad-free.
- **Nothing else changed:** I built `main` in a separate worktree and compared every HTML file. Exactly
  17 pages changed robots status, all of them on the allowlist. The other 1,309 pages have the same
  robots tag as on `main`. Indexable pages: 30 → 47.

| URL | robots meta | canonical | in sitemap | section words |
|---|---|---|---|---|
| /fix-motorola-edge-50-ultra-speaker | none (index, follow) | self | yes | 209 |
| /eject-water-samsung-galaxy-s25 | none (index, follow) | self | yes | 188 |
| /clean-pixel-buds-pro-2-speaker | none (index, follow) | self | yes | 196 |
| /fix-redmi-13c-speaker | none (index, follow) | self | yes | 196 |
| /eject-water-samsung-galaxy-s24-ultra | none (index, follow) | self | yes | 189 |
| /fix-pixel-8-pro-speaker | none (index, follow) | self | yes | 198 |
| /es/fix-iphone-17-pro-max-speaker | none (index, follow) | self | yes | 226 |
| /es/eject-water-samsung-galaxy-s24 | none (index, follow) | self | yes | 212 |
| /fix-pixel-7-speaker | none (index, follow) | self | yes | 180 |
| /fix-redmi-note-13-speaker | none (index, follow) | self | yes | 188 |
| /it/fix-iphone-17-speaker | none (index, follow) | self | yes | 214 |
| /it/fix-iphone-17-pro-max-speaker | none (index, follow) | self | yes | 224 |
| /eject-water-samsung-galaxy-s22-ultra | none (index, follow) | self | yes | 198 |
| /fix-realme-12-pro-plus-speaker | none (index, follow) | self | yes | 180 |
| /es/fix-motorola-edge-50-ultra-speaker | none (index, follow) | self | yes | 224 |
| /fix-moto-g84-speaker | none (index, follow) | self | yes | 180 |
| /fix-samsung-galaxy-z-fold-6-speaker | none (index, follow) | self | yes | 205 |

**ads.txt / robots.txt / serving behaviour:** `public/ads.txt`, `public/robots.txt`, `public/_headers`,
`public/_redirects`, `worker.js`, `wrangler.json` and `functions/` have no changes against `main`.
`dist/ads.txt` and `dist/robots.txt` are byte-identical to the `main` build.
Nothing in the source tree mentions Tencent (searched everything except `node_modules/` and `dist/`). `ads.txt` is a static asset that
`worker.js` serves through `env.ASSETS.fetch`, and that path is unchanged, so however it currently behaves
for any crawler, Tencent's included, it is the same on this branch.

---

## Decisions for you before deploying

1. **Ads now load on these 17 pages.** In `Layout.astro`, `showAds` is tied to `!noindex`, so
   making a page indexable also loads AdSense auto-ads there. These pages were noindexed in the
   October 2026 AdSense work as thin, templated content. The new sourced section is meant to fix that,
   but whether it is enough is for you to judge.
   *APPROVAL-RISK INFERENCE*: the knowledge base says sites should have "Unique content relevant to
   visitors" and that content must be "High-quality / Original"
   (`docs/adsense/01_SITE_READINESS_AND_ELIGIBILITY.md`). Most of each page is still the shared template;
   the new 180–226-word section is the unique part. If you want indexing without ads for now, the
   smallest change is to pass `showAds={false}` from `DevicePage` for allowlisted model pages. I have not
   made that change.

2. **Older content on these pages that the official sources contradict or don't confirm.** I did not
   change it, because it was outside this task. Since the pages are now indexable, it is worth fixing:
   - iPhone 17 Pro Max: `ipRating` says "Titanium chassis" and the older tips/FAQs mention a titanium frame.
     Apple's tech specs list an aluminum enclosure ("50% recycled aluminum in the enclosure").
   - Pixel 7 / Pixel 8 Pro: `ipRating` says "1.5m up to 30 min". Google's spec page gives no depth.
   - Redmi 13C: `ipRating` reads "Standard splash resistant acoustic grille". Xiaomi lists **IP52**.
   - The older `customTips`/`customFaqs` on several allowlisted pages (S24 Ultra, S22 Ultra, Pixel 8 Pro,
     iPhone 17 Pro Max, Motorola, Redmi Note 13, moto g84, and their es translations) make claims
     I could not find in official sources. Examples: diagnostic dial codes such as `*#0*#` and
     `*#*#7287#*#*`, and exact grille geometry.

3. **moto g84 IP54.** See the note in Step 3.

This report does not guarantee indexing, ranking, or AdSense approval. The knowledge base in
`docs/adsense/` is a snapshot (last updated 2026-09-07) and may not reflect Google's current policies.
