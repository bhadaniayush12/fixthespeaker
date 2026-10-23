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

---

## Fix round 2: unsupported claims removed

Date: 2026-10-23. **Not deployed.** Commit: `fix(content): remove unsupported claims on allowlisted device pages`.

Ads behaviour is unchanged: no layout, component or allowlist file was touched, so `showAds` still follows `!noindex`.
Only `src/data/devices.ts`, `src/i18n/deviceTranslations.ts` and `src/data/deviceSpecifics.ts` changed.

**What was deleted:** every tip or FAQ on the allowlisted models (English and the Spanish custom content) that
contained a dial code, exact grille or port geometry, frame/glass materials (titanium, Gorilla Armor, Armor Aluminum),
an unsourced depth figure, or another hardware claim I could not find in an official source (S Pen silo
acoustics, Gore-Tex barrier, nanocoating, TurboPower/wireless wattage behaviour, CIT menu numbers, Xiaomi "Clear speaker"
path, Dolby Atmos settings path, "IP68 waterproof" wording that contradicts Motorola). Whole items were deleted; nothing
was rephrased. Generic care tips and FAQs (salt/pool rinse, moisture-alert behaviour, how the tone works, balance test)
were kept. Italian pages use the generic template and had no custom tips; they change only through `ipRating`.

### `ipRating` changes (`src/data/devices.ts`)

| Device | Old | New |
|---|---|---|
| iPhone 17 Pro Max | `IP68 (Titanium chassis, 6m depth up to 30 min)` | `IP68 (IEC 60529 — 6m depth up to 30 min)`, same wording as iPhone 17 |
| Pixel 7 | `IP68 (1.5m up to 30 min)` | `IP68 (IEC 60529)` |
| Pixel 8 Pro | `IP68 (1.5m up to 30 min)` | `IP68 (IEC 60529)` |
| Redmi 13C | `Standard splash resistant acoustic grille` | `IP52 (Splash and dust resistance)`, with a source comment: mi.com/global/product/redmi-13c/specs/ |
| moto g84 | `IP54 (Water repellent design)` | `Water-repellent` (IP54 is unverified, see below) |
| Galaxy S25 | `IP68 (1.5m up to 30 min)` | `IP68` |
| Galaxy S24 | `IP68 (1.5m up to 30 min)` | `IP68` |
| Galaxy S24 Ultra | `IP68 (Titanium frame, 1.5m depth up to 30 min)` | `IP68` |
| Galaxy S22 Ultra | `IP68 (1.5m up to 30 min)` | `IP68` |
| Galaxy Z Fold6 | `IP48 (Water resistance up to 1.5m for 30 min, dust >1mm)` | `IP48` |
| Motorola edge 50 ultra | `IP68 (Submersible up to 1.5m for 30 min)` | `IP68` |

The Samsung and Motorola edge values had the "1.5m" shorthand; I shortened them to the bare rating so the shorthand
is gone from the 17 pages. The depth detail for those models is still in the sourced "Water rating" section (see Verification).

### moto g84 IP54 (`src/data/deviceSpecifics.ts`)

- Water rating: `Motorola’s spec sheet lists IP54 for the moto g84 5G, and its product page describes a water-repellent design that…` → `Motorola’s product page describes a water-repellent design for the moto g84 5G that…`
- FAQ answer: `Motorola describes the moto g84 5G as water-repellent and lists it as IP54.` → `Motorola describes the moto g84 5G as water-repellent.`
- Source removed: `Motorola: moto g84 5G specifications` (support a_id 176650), now unused.

### Tips and FAQs deleted (94 items)

**iPhone 17 Pro Max** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: the primary loudspeaker is behind the precision-milled acoustic holes on the bottom right of the USB-C port, while the stereo earpiece speaker is integrated into an ultra-narrow micro-slit above the Dynamic Island at the top edge.'
- FAQ: q: 'Where exactly are the speaker ports located on the iPhone 17 Pro Max?', a: 'The iPhone 17 Pro Max features a dual stereo speaker system. The main high-power loudspeaker is located on the bottom titanium frame to the right of the USB-C port behind precision-drilled acoustic ports (the left side holes house the primary microphone). The secondary stereo earpiece speaker is integrated into an ultra-slim micro-slit along the top seam directly above the Dynamic Island.'
- FAQ: q: 'Can 165 Hz sound damage the iPhone 17 Pro Max acoustic chamber or titanium frame?', a: 'No. The 165 Hz acoustic pulse generates mechanical air displacement strictly within the safe operating parameters of Apple\'s high-excursion speaker drivers and internal amplifiers. It vibrates the speaker diaphragm just enough to dislodge liquid surface tension without causing mechanical strain or heating.'

**Galaxy S24 Ultra** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: the primary loudspeaker is behind the single continuous horizontal acoustic slit on the bottom edge between the USB-C port and S-Pen silo, while the stereo earpiece speaker is an ultra-fine micro-slit along the top seam of the Gorilla Armor glass.'
- TIP: 'Remove the S-Pen immediately: water easily gets trapped inside the S-Pen silo cavity directly next to the bottom speaker chamber, creating muffled resonance until the stylus is removed and both openings are ventilated.'
- TIP: 'Fresh water vs. Salt water: Galaxy S24 Ultra is IP68 rated (up to 1.5m for 30 min in fresh water), but salt water from the ocean or chlorinated pool water will pit the titanium frame and corrode speaker mesh. Gently rinse under a slow trickle of fresh tap water if exposed to salt or chemicals.'
- TIP: 'Use Samsung hardware diagnostics: open the Phone app dialer and enter *#0*# to launch the Hardware Diagnostic Mode, tap "SPEAKER" to toggle between upper and lower speaker output, or test audio through the Samsung Members app.'
- FAQ: q: 'Where are the speaker openings located on the Galaxy S24 Ultra?', a: 'The Galaxy S24 Ultra features a redesigned bottom loudspeaker port consisting of a single horizontal acoustic slot between the USB-C charging port and the S-Pen silo. The secondary stereo earpiece speaker is positioned along the top seam between the flat Corning Gorilla Armor glass and the Grade 5 titanium top rail.'
- FAQ: q: 'How do I test the top and bottom speakers on Galaxy S24 Ultra with diagnostic codes?', a: 'Samsung includes a built-in hardware diagnostic tool. Open the Phone app and dial *#0*#. In the diagnostic grid, tap "SPEAKER" — the first tap tests the bottom primary loudspeaker, and a second tap switches audio to the top earpiece speaker. Alternatively, open the Samsung Members app and run Diagnostics > Phone Diagnostics > Speaker.'
- FAQ: q: 'Should I remove the S-Pen when ejecting water from Galaxy S24 Ultra?', a: 'Yes, absolutely. The S-Pen silo sits directly adjacent to the primary loudspeaker acoustic box. Water trapped inside the hollow stylus silo dampens acoustic chamber resonance and holds moisture against internal seals. Click and withdraw the S-Pen, gently shake both the phone and stylus with ports pointing down, and run the 165 Hz tone with the S-Pen removed.'
- FAQ: q: 'Can 165 Hz sound damage the Titanium frame or Gorilla Armor acoustic seal of S24 Ultra?', a: 'No. The 165 Hz tone operates safely within the certified dynamic range and frequency limits of Samsung\'s stereo transducers. The sound waves create targeted pressure pulses that shatter liquid surface tension in the acoustic mesh without placing mechanical strain on the titanium frame or waterproof adhesive barriers.'

**Galaxy S24** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: the main loudspeaker sits on the bottom edge to the right of the USB-C port as a single horizontal slotted acoustic port, while the upper earpiece speaker is a hairline slit nestled along the top display bezel.'
- TIP: 'Access Samsung’s hardware diagnostic test: open the Phone dialer and enter *#0*# to launch Service Mode, then tap "Speaker" to play alternating high and low frequency tones across both top and bottom speakers (or use Phone Diagnostics in the Samsung Members app).'
- TIP: 'Fresh water vs. Salt water: Galaxy S24 is IP68 rated (up to 1.5m for 30 min in fresh water), but salt water and pool chlorine degrade adhesive seals and corrode speaker grilles. Always rinse immediately with fresh, still water if exposed to the ocean.'
- TIP: 'Never insert SIM pins, needles, or compressed air into the speaker slot or nearby microphone pinholes, as this tears the internal Gore-Tex water-resistant barrier.'
- FAQ: q: 'Where are the speaker grilles on the Samsung Galaxy S24?', a: 'The Galaxy S24 features a stereo audio array. The primary loudspeaker is located on the bottom edge to the right of the USB-C port, designed as a sleek single-slot horizontal acoustic opening (replacing the older multi-hole grille). The second speaker doubles as the telephone earpiece and is hidden in a hairline micro-slit at the absolute top edge of the front glass, above the punch-hole selfie camera.'
- FAQ: q: 'How do I access Samsung’s diagnostic menu (*#0*#) to test Galaxy S24 speakers?', a: 'Open your Samsung Phone app dialer and type *#0*#. A grey hardware diagnostic grid will appear. Tap "Speaker" to trigger an automated audio hardware test that alternates sound output between the bottom loudspeaker and top earpiece speaker. If your carrier disables *#0*#, open the preinstalled Samsung Members app > Support > Phone Diagnostics > Speaker to run Samsung’s official interactive hardware test.'

**Galaxy S22 Ultra** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: the primary loudspeaker is behind the 5-hole pill-shaped grille on the bottom edge to the right of the USB-C port, while the stereo earpiece speaker fires through a hairline micro-slit at the top edge above the curved display.'
- TIP: 'Remove the S-Pen right away: like other Ultra models, water easily pools in the hollow S-Pen silo adjacent to the bottom speaker chamber. Remove the S-Pen and shake it gently to prevent trapped liquid from muffling bass response.'
- TIP: 'Account for seal aging: Galaxy S22 Ultra launched with IP68 water resistance (1.5m for 30 min), but waterproof adhesive gaskets naturally degrade over years of heat, pocket flexing, and micro-drops. Never submerge an older phone or expose it to high-pressure faucets.'
- TIP: 'Run Samsung hardware diagnostics: dial *#0*# in the Samsung Phone dialer and tap "SPEAKER" to test both audio drivers independently, or use the Diagnostics feature in the Samsung Members app.'
- FAQ: q: 'Where are the speakers on the Samsung Galaxy S22 Ultra located?', a: 'The Galaxy S22 Ultra uses a stereo speaker system. The main loudspeaker outputs from the 5-hole pill grille on the bottom edge between the USB-C port and the left edge, beside the S-Pen silo. The secondary upper speaker is positioned in the narrow hairline seam where the curved Gorilla Glass Victus+ display meets the Armor Aluminum frame at the top.'
- FAQ: q: 'How do I test the S22 Ultra speakers using Samsung dialer codes?', a: 'Open the default Samsung Phone app and dial *#0*#. When the diagnostic menu appears, tap the "SPEAKER" tile. This initiates a dual-frequency hardware test that cycles between the bottom loudspeaker and top earpiece, allowing you to confirm that all crackling and distortion have cleared.'
- FAQ: q: 'Why do I need to take the S-Pen out when ejecting water from S22 Ultra?', a: 'The S-Pen silo is an open chamber that runs directly parallel to the bottom speaker acoustic box. Trapped water inside the silo creates an acoustic dampening effect that makes the bottom speaker sound distorted or quiet. Removing the stylus allows air to circulate and liquid to escape freely.'

**Pixel 8 Pro** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: the primary loudspeaker is behind the pill-shaped slot to the right of the centered USB-C port on the bottom edge (the left slot houses the primary microphone). The stereo earpiece speaker is an ultra-thin slit tucked above the top display bezel. Note: the cutout on the top aluminum frame is a 5G mmWave antenna window, not a speaker.'
- TIP: 'Fresh water vs. Pool & Sea water: Pixel 8 Pro is IP68 rated under IEC 60529 (up to 1.5m for 30 min in fresh water), but pool chlorine and ocean salt crystallize on the acoustic mesh and corrode the polished aluminum camera bar. If exposed to chlorinated or salt water, rinse gently under a slow trickle of cool tap water immediately.'
- TIP: 'Run Google hardware diagnostics: open the Google Phone dialer and enter *#*#7287#*#* (*#*#PAIRS#*#*) to run built-in hardware tests, or navigate to Settings > Tips & support > Diagnostics / Phone diagnostics to test speaker audio.'
- FAQ: q: 'Where are the speaker ports located on Google Pixel 8 Pro?', a: 'The Google Pixel 8 Pro features a dual stereo speaker configuration. The main high-output loudspeaker is located on the bottom edge behind the cutout to the right of the USB-C port (the matching cutout to the left is the bottom microphone). The secondary stereo earpiece speaker is integrated into an ultra-slim hairline slit between the top glass and the polished aluminum frame above the front camera. The cutout on the top edge of the phone is a 5G mmWave antenna cutout, not a speaker.'
- FAQ: q: 'How do I run a hardware speaker diagnostic on Pixel 8 Pro?', a: 'Google Pixel phones provide hardware diagnostic options: 1) Open the Phone dialer and enter *#*#7287#*#* (*#*#PAIRS#*#*) to access Google\'s Pixel Diagnostic Suite, where you can select the audio and speaker test. 2) Go to Settings > Tips & support > Diagnostics > Speaker to run automated tone tests. 3) Play our built-in stereo channel test in the browser to isolate left and right audio channels.'

**Redmi Note 13** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: the primary loudspeaker is behind the drilled grille holes on the bottom right of the USB-C port. The top speaker/earpiece fires through both a front-facing display slit and a secondary top-frame acoustic vent hole for stereo audio. A 3.5mm headphone jack is also located on the top edge.'
- TIP: 'Use Xiaomi hardware diagnostics: open the dialer and enter *#*#6484#*#* to open the Xiaomi CIT (Control and Identification Test) menu. Select test 10 (Receiver) and test 11 (Speaker) to verify both audio components independently.'
- TIP: 'MIUI / HyperOS Clear Speaker feature: you can combine our 165 Hz browser sound with Xiaomi\'s built-in tool by going to Settings > Additional Settings > Clear speaker (on supported MIUI/HyperOS builds).'
- FAQ: q: 'Where are the speaker ports located on the Redmi Note 13?', a: 'The Redmi Note 13 features dual stereo speakers. The primary bottom loudspeaker outputs through circular drilled holes on the bottom edge to the right of the USB-C port. The secondary top speaker outputs audio through both the narrow earpiece slit above the front display and a dedicated secondary acoustic opening on the top plastic frame beside the 3.5mm headphone jack and IR blaster.'
- FAQ: q: 'How do I access Xiaomi CIT hardware diagnostics to test my speakers?', a: 'Open the default Phone dialer app and enter *#*#6484#*#*. This opens Xiaomi\'s engineering CIT menu. Scroll to "Speaker" (typically item 11) to play automated test audio through the bottom loudspeaker, and "Receiver" (item 10) to test the upper earpiece. You can also access this by going to Settings > About Phone > Detailed info and specs > tapping "Kernel version" 5 times.'
- FAQ: q: 'How does the 165 Hz tone compare to Xiaomi\'s built-in "Clear speaker" feature?', a: 'Xiaomi\'s HyperOS/MIUI "Clear speaker" tool plays a 30-second audio sweep. Our web-based 165 Hz water ejector uses a continuous resonant square wave that specifically targets the mechanical displacement frequency of miniature speaker membranes, generating maximum air pressure to expel stubborn water droplets. Both tools can be used in tandem for thorough clearing.'

**Motorola edge 50 ultra** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: dual stereo speakers tuned with Dolby Atmos. The bottom loudspeaker fires through the acoustic slot on the lower edge beside the USB-C port and SIM tray. The top stereo speaker fires through an upper frame aperture and a micro-slit above the display bezel.'
- TIP: 'Special material care for wood and vegan leather backs: Edge 50 Ultra features real wood (Nordic Wood) and vegan leather finishes. While the phone is IP68 submersible (up to 1.5m for 30 min), organic wood and vegan leather should be blotted dry immediately with a clean cloth to prevent moisture staining or grain degradation.'
- TIP: 'TurboPower 125W charging caution: if Motorola displays a moisture warning for the USB-C port, do not connect the 125W wired TurboPower adapter. High-wattage charging on moist contacts causes rapid contact pitting. Use 50W wireless charging while the port air-dries.'
- TIP: 'Run Motorola hardware diagnostics: open the pre-installed Motorola "Device Help" app > Device Diagnostics > Hardware Test > Speaker, or dial *#*#2486#*#* (*#*#AUTON#*#*) in the dialer to launch the Motorola CQATest diagnostic suite.'
- FAQ: q: 'Where are the Dolby Atmos speakers located on the Motorola Edge 50 Ultra?', a: 'The Motorola Edge 50 Ultra features stereo speakers tuned by Dolby Atmos. The primary bottom loudspeaker is situated on the bottom aluminum frame behind an acoustic cutout next to the USB-C port and SIM card tray. The secondary stereo speaker outputs through an ultra-narrow earpiece slit above the curved pOLED display, supplemented by an acoustic port on the top rail.'
- FAQ: q: 'How do I test the Motorola Edge 50 Ultra speakers using Motorola CQATest or Device Help?', a: 'Motorola provides two diagnostic methods: 1) Open the pre-installed "Device Help" app, select "Device Diagnostics", tap "Hardware Test", and select "Speaker" and "Receiver" to test both audio drivers. 2) Open the phone dialer and enter *#*#2486#*#* (*#*#AUTON#*#*) to access the Motorola CQATest engineering suite, which offers advanced audio pathway tests.'
- FAQ: q: 'How should I care for the real wood or vegan leather back of the Edge 50 Ultra when wet?', a: 'The Edge 50 Ultra is IP68 waterproof, meaning water cannot penetrate the internal chassis. However, the external rear panels — whether real FSC-certified Nordic wood or vegan leather — are porous. Blot the back thoroughly with a dry microfiber cloth, do not use heat or hair dryers which can warp wood veneer or crack vegan leather, and allow it to dry in ambient room temperature.'
- FAQ: q: 'What should I do if TurboPower charging is disabled after water exposure?', a: 'Motorola software automatically blocks high-voltage TurboPower charging when moisture is sensed in the USB-C port to prevent pin corrosion. Leave the device standing upright in a well-ventilated spot for 2 to 3 hours. If you need immediate power, you can safely charge the Edge 50 Ultra on any 15W Qi or 50W Motorola wireless charging pad.'

**moto g84** (`src/data/devices.ts`)

- TIP: 'Locate your speaker ports: stereo speakers with Dolby Atmos. The primary loudspeaker is located behind the drilled holes on the bottom edge beside the USB-C port, while the secondary stereo earpiece speaker fires through the slim horizontal slit above the 6.5-inch pOLED display.'
- TIP: 'Important water protection notice: Moto G84 has an IP54 water-repellent design with internal barrier nanocoating. It is rated for accidental spills, light rain, and splashes, but is NOT waterproof and cannot be submerged. Blot dry immediately if exposed to liquids.'
- TIP: 'Dolby Atmos audio check: after ejecting water, open Settings > Sound & vibration > Dolby Atmos and toggle between "Smart Audio", "Music", and "Voice" to verify that stereo spatial separation and frequency range have been fully restored.'
- TIP: 'Run Motorola hardware diagnostics: open the pre-installed "Device Help" app, select "Device Diagnostics" > "Hardware Test" > "Speaker", or dial *#*#2486#*#* in the dialer for the Motorola CQATest hardware diagnostic menu.'
- FAQ: q: 'Where are the stereo speaker ports on the Moto G84?', a: 'The Moto G84 features dual stereo speakers with Dolby Atmos. The primary loudspeaker is on the bottom frame behind circular cutouts to the right of the USB-C port. The secondary stereo earpiece speaker is integrated into the slim horizontal slit between the front glass and frame directly above the selfie camera.'
- FAQ: q: 'Is the Moto G84 waterproof or just splash resistant?', a: 'The Moto G84 is splash resistant with an IP54 water-repellent design. While it features an internal nanocoating barrier to protect against splashes, sweat, and light rain, it does not have the hermetic waterproof seals required for submersion. If dropped into water or splashed, running the 165 Hz water eject tone immediately is essential to dislodge liquid before it reaches internal components.'
- FAQ: q: 'How do I test Moto G84 speaker clarity using Motorola diagnostic tools?', a: 'Open Motorola\'s pre-installed "Device Help" app, go to "Device Diagnostics", tap "Hardware Test", and select "Speaker" to play automated test tones. You can also dial *#*#2486#*#* in the Phone app to access the CQATest diagnostic menu, or use our browser Stereo Channel Test to verify left and right channel balance.'

**iPhone 17 Pro Max (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los puertos del altavoz: el altavoz principal de alta potencia se encuentra tras los orificios acústicos fresados a la derecha del puerto USB-C, mientras que el auricular/altavoz estéreo superior es una microrejilla ultrafina ubicada en el borde superior sobre la Dynamic Island.'
- FAQ: q: '¿Dónde se encuentran exactamente los altavoces en el iPhone 17 Pro Max?', a: 'El iPhone 17 Pro Max incorpora un sistema estéreo dual. El altavoz inferior principal de alto rendimiento está situado en el borde inferior de titanio a la derecha del conector USB-C (los orificios a la izquierda corresponden al micrófono). El altavoz secundario/auricular está integrado en una microabertura casi invisible situada justo encima de la Dynamic Island en el bisel superior.'
- FAQ: q: '¿Puede el tono de 165 Hz dañar la membrana o el chasis de titanio del iPhone 17 Pro Max?', a: 'No. El pulso acústico de 165 Hz opera estrictamente dentro de los parámetros de diseño y excursión acústica segura de los transductores y amplificadores de Apple. Genera ondas de presión mecánica en el aire que rompen la tensión superficial del agua atrapada sin provocar sobrecalentamiento ni fatiga mecánica.'

**Pixel 8 Pro (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los puertos de altavoz: el altavoz principal se encuentra tras la ranura ovalada a la derecha del puerto USB-C en el borde inferior (la ranura izquierda aloja el micrófono principal). El auricular estéreo superior es una ranura milimétrica oculta sobre el bisel de la pantalla. Nota: la hendidura en la parte superior del marco de aluminio es la antena 5G mmWave, no un altavoz.'
- TIP: 'Agua dulce vs. Piscina y Agua de mar: el Pixel 8 Pro cuenta con certificación IP68 (hasta 1,5 m durante 30 min en agua dulce), pero el cloro y la sal marina se cristalizan en la malla acústica y corroen el visor de cámara de aluminio pulido. Enjuaga con agua dulce del grifo si estuvo expuesto a sal o cloro.'
- TIP: 'Diagnóstico de hardware de Google: abre el marcador telefónico e introduce *#*#7287#*#* (*#*#PAIRS#*#*) o dirígete a Ajustes > Consejos y asistencia > Diagnóstico del teléfono para verificar el audio del altavoz.'
- FAQ: q: '¿Dónde están ubicados los altavoces en el Google Pixel 8 Pro?', a: 'El Google Pixel 8 Pro cuenta con altavoces estéreo duales. El altavoz principal inferior está a la derecha del puerto USB-C central (la ranura izquierda es el micrófono). El altavoz secundario/auricular está integrado en una finísima ranura entre el cristal superior y el marco de aluminio, encima de la cámara frontal. La abertura superior en el marco es una ventana de antena 5G mmWave, no un altavoz.'
- FAQ: q: '¿Cómo ejecutar un diagnóstico de altavoz en el Pixel 8 Pro?', a: 'Puedes probar el hardware de audio de tres formas: 1) Abre la app Teléfono y marca *#*#7287#*#* (*#*#PAIRS#*#*) para acceder a la suite de diagnóstico de Pixel. 2) Ve a Ajustes > Consejos y asistencia > Diagnóstico > Altavoz para realizar un test automático. 3) Usa nuestro test estéreo web para comprobar los canales izquierdo y derecho por separado.'

**Galaxy S24 Ultra (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los puertos: el altavoz inferior principal es la ranura acústica continua rediseñada situada entre el puerto USB-C y el compartimento del S-Pen. El altavoz estéreo superior es una ranura microscópica en el borde superior del cristal Gorilla Armor.'
- TIP: 'Retira el S-Pen de inmediato: el agua suele acumularse dentro del compartimento del S-Pen, justo al lado de la caja acústica del altavoz inferior, provocando un sonido sordo hasta que se extrae el lápiz y se ventilan ambas cavidades.'
- TIP: 'Agua dulce vs. Salada: el Galaxy S24 Ultra cuenta con certificación IP68 (1,5 m durante 30 min en agua dulce), pero el agua marina y el cloro dañan el titanio y la malla protectora. Enjuaga con un hilo fino de agua dulce del grifo si estuvo expuesto a sal o productos químicos.'
- TIP: 'Diagnóstico de hardware Samsung: abre el marcador telefónico y pulsa *#0*# para entrar al modo de prueba, luego toca "SPEAKER" para comprobar el altavoz inferior y el auricular superior de forma independiente.'
- FAQ: q: '¿Dónde se encuentran las aberturas de los altavoces en el Galaxy S24 Ultra?', a: 'El Galaxy S24 Ultra cuenta con una ranura continua inferior ubicada entre el puerto USB-C y el silo del S-Pen para el altavoz principal. El auricular estéreo secundario se aloja en el bisel superior, en la unión entre el cristal Corning Gorilla Armor y el marco de titanio Grado 5.'
- FAQ: q: '¿Cómo probar los altavoces del Galaxy S24 Ultra con códigos de diagnóstico?', a: 'Abre la aplicación Teléfono y marca *#0*#. En la cuadrícula que aparece, pulsa el botón "SPEAKER": la primera pulsación evalúa el altavoz principal inferior y la segunda conmuta el audio al auricular superior. También puedes usar Samsung Members en Diagnóstico del teléfono > Altavoz.'
- FAQ: q: '¿Debo extraer el S-Pen al expulsar agua del Galaxy S24 Ultra?', a: 'Sí, es fundamental. La cavidad del S-Pen discurre en paralelo a la cámara acústica del altavoz. El agua acumulada en el interior amortigua la resonancia de los graves y retiene humedad. Extrae el S-Pen, sacude suavemente ambos elementos hacia abajo y reproduce el tono de 165 Hz sin el lápiz insertado.'
- FAQ: q: '¿Puede el sonido de 165 Hz dañar el marco de titanio o el sello del Galaxy S24 Ultra?', a: 'No. El tono de 165 Hz se sitúa dentro del rango acústico seguro certificado para los transductores estéreo de Samsung. Genera pulsos de presión en el aire que expulsan las gotas sin someter a esfuerzo mecánico los sellos adhesivos impermeables ni el marco de titanio.'

**Galaxy S22 Ultra (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los altavoces: el altavoz principal inferior se encuentra tras la rejilla ovalada de 5 orificios a la derecha del puerto USB-C. El auricular estéreo superior emite a través de una ranura microscópica en el borde superior curvado.'
- TIP: 'Retira el S-Pen inmediatamente: el agua se filtra con facilidad en el hueco del S-Pen, adyacente a la caja de resonancia del altavoz inferior. Retira el lápiz táctil y sacúdelo suavemente para evitar que el líquido atrapado apague los graves.'
- TIP: 'Envejecimiento de los sellos: el Galaxy S22 Ultra cuenta con IP68 de fábrica, pero los adhesivos impermeables se degradan con los años por el calor y microcaídas. Nunca sumerjas un teléfono antiguo ni lo coloques bajo chorros a presión.'
- TIP: 'Diagnóstico Samsung: marca *#0*# en la app de Teléfono y pulsa "SPEAKER" para evaluar ambos transductores por separado, o utiliza la herramienta de diagnóstico de Samsung Members.'
- FAQ: q: '¿Dónde están los altavoces en el Samsung Galaxy S22 Ultra?', a: 'Dispone de altavoces estéreo: el altavoz inferior principal emite por la rejilla de 5 orificios junto al puerto USB-C y el silo del S-Pen. El altavoz superior se sitúa en la fina junta entre la pantalla Gorilla Glass Victus+ y el marco Armor Aluminum superior.'
- FAQ: q: '¿Cómo probar los altavoces del S22 Ultra con el menú secreto de Samsung?', a: 'Abre el marcador telefónico de Samsung y marca *#0*#. Toca el recuadro "SPEAKER" para iniciar la prueba de audio que alterna entre el altavoz inferior y el superior, confirmando que la distorsión y los chasquidos hayan desaparecido por completo.'
- FAQ: q: '¿Por qué hay que sacar el S-Pen al expulsar agua?', a: 'El compartimento del S-Pen es una cavidad abierta pegada a la cámara acústica del altavoz. El agua acumulada en su interior atenúa el sonido y hace que el altavoz suene bajo o distorsionado. Al retirarlo, permites que el aire circule y el agua drene.'

**Motorola edge 50 ultra (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los altavoces: sistema estéreo con Dolby Atmos. El altavoz inferior emite por la ranura acústica junto al puerto USB-C y la bandeja SIM. El altavoz superior emite por el bisel frontal y una abertura en el marco superior.'
- TIP: 'Cuidado de materiales especiales (madera y cuero vegano): el Edge 50 Ultra cuenta con acabados en madera real (Nordic Wood) y cuero vegano. Aunque tiene certificación IP68 (1,5 m por 30 min), seca de inmediato el panel trasero con un paño seco para evitar manchas o deterioro del grano.'
- TIP: 'Precaución con la carga TurboPower de 125W: si el teléfono avisa de humedad en el puerto USB-C, no conectes el cargador de 125W para evitar dañar los pines. Utiliza la carga inalámbrica de 50W mientras se seca al aire.'
- TIP: 'Diagnóstico Motorola: abre la app integrada "Ayuda del dispositivo" > Diagnóstico del dispositivo > Prueba de hardware > Altavoz, o marca *#*#2486#*#* en el teléfono para acceder a las pruebas de ingeniería de Motorola CQATest.'
- FAQ: q: '¿Dónde están los altavoces Dolby Atmos en el Motorola Edge 50 Ultra?', a: 'El Motorola Edge 50 Ultra cuenta con altavoces estéreo afinados por Dolby Atmos. El altavoz principal se sitúa en la parte inferior junto al puerto USB-C y la ranura SIM. El altavoz superior emite a través de una estrecha ranura sobre la pantalla pOLED y un orificio acústico adicional en el marco superior.'
- FAQ: q: '¿Cómo probar los altavoces del Motorola Edge 50 Ultra con CQATest o Ayuda del dispositivo?', a: 'Abre la aplicación "Ayuda del dispositivo", ve a "Prueba de hardware" y selecciona "Altavoz" y "Receptor". Para un test más avanzado, introduce *#*#2486#*#* (*#*#AUTON#*#*) en el marcador para ingresar al menú de ingeniería Motorola CQATest y verificar las vías de audio.'
- FAQ: q: '¿Cómo cuidar la trasera de madera o cuero vegano si el teléfono se moja?', a: 'Aunque el chasis interno cuenta con protección impermeable IP68, los paneles exteriores de madera natural o cuero sintético son porosos. Sécalos dando toques suaves con un paño de microfibra limpio, evita usar secadores con calor y déjalos secar a temperatura ambiente.'
- FAQ: q: '¿Qué hacer si la carga TurboPower está desactivada por humedad?', a: 'El sistema bloquea la carga de alto voltaje para prevenir cortocircuitos. Deja reposar el teléfono en posición vertical en un lugar ventilado durante 2 o 3 horas. Si necesitas cargarlo urgentemente, puedes usar cualquier base de carga inalámbrica Qi o Motorola de 50W.'

**Redmi Note 13 (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los altavoces: el altavoz inferior está tras los orificios perforados a la derecha del puerto USB-C. El auricular/altavoz superior emite por la ranura sobre la pantalla y un orificio en el marco superior. Dispone además de conector de auriculares jack 3.5 mm en el borde superior.'
- TIP: 'Diagnóstico de hardware Xiaomi: marca *#*#6484#*#* para abrir el menú CIT (Control and Identification Test). Selecciona la prueba 10 (Receiver) y la 11 (Speaker) para comprobar el altavoz y el auricular por separado.'
- TIP: 'Función Limpiar altavoz de MIUI/HyperOS: puedes combinar nuestro tono web de 165 Hz con la opción del sistema en Ajustes > Ajustes adicionales > Limpiar altavoz (en versiones compatibles).'
- FAQ: q: '¿Dónde están situados los altavoces en el Redmi Note 13?', a: 'El Redmi Note 13 dispone de sonido estéreo dual: el altavoz inferior principal está en el borde inferior a la derecha del puerto USB-C. El altavoz superior emite sonido a través de la ranura del auricular sobre la pantalla frontal y mediante una abertura acústica en el marco superior, junto al conector de audio de 3.5 mm y el emisor de infrarrojos.'
- FAQ: q: '¿Cómo acceder al menú de diagnóstico CIT de Xiaomi para probar los altavoces?', a: 'Abre el marcador telefónico y escribe *#*#6484#*#*. En el menú de ingeniería CIT, busca "Speaker" (habitualmente el número 11) para probar el altavoz inferior y "Receiver" (número 10) para el auricular. También puedes acceder pulsando 5 veces seguidas en "Versión del kernel" dentro de Ajustes > Información del teléfono.'
- FAQ: q: '¿En qué se diferencia el sonido de 165 Hz de la función "Limpiar altavoz" de Xiaomi?', a: 'La herramienta integrada de HyperOS/MIUI emite un barrido sonoro de 30 segundos. Nuestro expulsor web a 165 Hz genera una onda cuadrada continua dirigida a la frecuencia de resonancia física del diafragma, maximizando la expulsión de gotas resistentes. Se pueden usar ambas herramientas de forma complementaria.'

**moto g84 (es)** (`src/i18n/deviceTranslations.ts`)

- TIP: 'Ubica los altavoces: sonido estéreo con Dolby Atmos. El altavoz principal se halla tras los orificios del borde inferior junto al USB-C. El auricular estéreo superior emite por la ranura horizontal sobre la pantalla pOLED de 6,5 pulgadas.'
- TIP: 'Aviso de protección IP54: el Moto G84 cuenta con un diseño repelente al agua con nanorevestimiento interno contra salpicaduras o lluvia ligera, pero NO es sumergible. Sécalo de inmediato si entra en contacto con líquidos.'
- TIP: 'Verificación Dolby Atmos: tras expulsar el agua, abre Ajustes > Sonido y vibración > Dolby Atmos y cambia entre perfiles ("Audio inteligente", "Música", "Voz") para comprobar la separación espacial y el rango de frecuencias.'
- TIP: 'Diagnóstico Motorola: abre la aplicación "Ayuda del dispositivo" > Diagnóstico > Prueba de hardware > Altavoz, o marca *#*#2486#*#* en el teclado para acceder al menú de ingeniería Motorola CQATest.'
- FAQ: q: '¿Dónde están los altavoces estéreo en el Moto G84?', a: 'El Moto G84 equipa altavoces estéreo compatibles con Dolby Atmos. El altavoz inferior está ubicado a la derecha del puerto USB-C detrás de perforaciones circulares. El altavoz secundario/auricular se encuentra en la ranura horizontal entre la pantalla frontal y el marco superior.'
- FAQ: q: '¿Es el Moto G84 resistente al agua o sumergible?', a: 'Es resistente a salpicaduras con certificación IP54 y revestimiento hidrófobo. Protege contra lloviznas y salpicaduras cotidianas, pero no soporta inmersiones en lavabos, piscinas o agua profunda. Usar la frecuencia de 165 Hz al instante es clave para evacuar el agua antes de que sobrepase las barreras acústicas.'
- FAQ: q: '¿Cómo comprobar la claridad de los altavoces con las herramientas de Motorola?', a: 'Abre la aplicación "Ayuda del dispositivo" que viene preinstalada en el móvil, entra en "Diagnóstico del dispositivo" y pulsa "Prueba de hardware" > "Altavoz". También puedes teclear *#*#2486#*#* para iniciar el menú CQATest o utilizar nuestro test de canales estéreo en el navegador.'

### Verification

- `npm run build`: exit 0, 1,326 pages, sitemap check passed (47 URLs, none noindexed).
- `npm test`: all AdSense compliance tests passed, 0 failures.
- Searched the built HTML of all 17 allowlisted pages (case-insensitive):

| String | Hits |
|---|---|
| `titanium` | 0 |
| `1.5m` | 0 |
| `*#` | 0 |
| `Gorilla Armor` | 0 |
| `1.5 m` | 11, all "1.5 metres" in the sourced round-1 section |

The 11 `1.5 m` hits are on 5 pages: S25 (1), S24 Ultra (1), S22 Ultra (3), Z Fold6 (3), Motorola edge 50 ultra (3).
Each is the round-1 "Water rating" text or its FAQ (counted twice where the FAQ is also in JSON-LD), quoting Samsung's
spec sheets / newsroom and Motorola's product page, which are listed as sources on those pages. None are on the Pixel
pages. I left them because they are sourced and the task scoped depth removal to Pixel 7 / 8 Pro. If you want zero
hits anyway, delete those sentences from `src/data/deviceSpecifics.ts`.
