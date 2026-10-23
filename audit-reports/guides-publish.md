# Publication Report: 5 Sourced Guides with Diagrams

**Date:** 2026-10-23  
**Branch:** `content/guides-drafts`  
**Commit Target:** `feat(guides): publish 5 sourced guides with diagrams`

---

## 1. Executive Summary

Five factual, manufacturer-sourced troubleshooting and hardware care guides have been published to Fix The Speaker under `/guides/*`. Each guide includes structured Schema.org markup (`Article`, `BreadcrumbList`, `FAQPage`), two custom SVG diagrams matching the site's dark/light design system, complete manufacturer attribution, and internal linking across matching tool pages and the sitemap.

The five drafts marked `DROP` in `audit-reports/guides-drafts/README.md` were **not published**.

---

## 2. Step 0: Drafts Fix Confirmation

The two uncommitted draft edits addressing Apple Watch source links and unsourced claims were committed prior to publishing:
- **Commit:** `73b1b71`
- **Message:** `content(drafts): fix Apple Watch sources and two unsourced claims`
- **Files:**
  - `audit-reports/guides-drafts/apple-watch-water-lock-explained.md`
  - `audit-reports/guides-drafts/does-water-eject-sound-really-work.md`

---

## 3. Step 1: Published Guides & Schemas

The 5 selected guides were published as real pages in `src/pages/guides/`:
1. `iphone-speaker-muffled-after-water.astro` (`/guides/iphone-speaker-muffled-after-water`)
2. `airpods-water-damage-what-to-do.astro` (`/guides/airpods-water-damage-what-to-do`)
3. `phone-fell-in-water-first-10-minutes.astro` (`/guides/phone-fell-in-water-first-10-minutes`)
4. `apple-watch-water-lock-explained.astro` (`/guides/apple-watch-water-lock-explained`)
5. `does-water-eject-sound-really-work.astro` (`/guides/does-water-eject-sound-really-work`)

### Content Discipline:
- Text copied **as-is** from approved drafts (no rewriting, no new claims, no invented numbers).
- Every working manufacturer source link preserved.
- The `## How we made this guide` section preserved on every published page.
- The `IMAGE PLAN` drafting block removed from all published pages.
- Structured data implemented via `@graph` containing `Article`, `BreadcrumbList`, and `FAQPage` matching all in-page FAQ content.

---

## 4. Step 2: SVG Diagrams

Ten clean, responsive SVG diagrams were created in `public/images/guides/` matching the site's design aesthetic (`#0b0f19` canvas, `#151d30` card surfaces, `#06b6d4` / `#22d3ee` primary cyan accents, and `#f4f6fb` ink text). No brand logos, copyrighted marks, or photos were used. Every diagram is paired with descriptive `alt` text and caption:

1. **iPhone Muffled Speaker Guide:**
   - `iphone-safe-drying-setup.svg`: Phone propped upright with speaker facing down on microfiber cloth in front of a cool desk fan (~12 in away); warning badge against heat and compressed air.
   - `iphone-acoustic-mesh-water-droplet.svg`: Cross-section of speaker cavity showing 165Hz diaphragm vibration propelling air through acoustic mesh to dislodge trapped surface water droplet.
2. **AirPods Water Damage Guide:**
   - `airpods-drying-orientation.svg`: Correct drying posture with earbuds face-down on microfiber cloth and charging case inverted with lid open under cool fan circulation.
   - `airpods-liquid-entry-points.svg`: Earbud anatomy diagram showing primary acoustic mesh, silicone ear tip detachment, stem charging contacts, and external microphone grille.
3. **Phone Fell in Water First 10 Minutes Guide:**
   - `phone-water-first-10-minutes-timeline.svg`: 4-stage action timeline (Min 0-1: Retrieve & Power Off; Min 1-3: Strip Case & SIM; Min 3-5: Tap port downward & Dry; Min 5-10: Position in front of cool fan).
   - `phone-protective-seals-diagram.svg`: Chassis cross-section illustrating perimeter display adhesive, silicone USB-C gasket, and hydrophobic speaker mesh.
4. **Apple Watch Water Lock Guide:**
   - `apple-watch-water-lock-sequence.svg`: 3-stage UI/hardware sequence (Control Center activation, water droplet lock indicator on watch face, and Digital Crown holding for acoustic ejection).
   - `apple-watch-speaker-port-diagram.svg`: Speaker port cutaway schematic showing open acoustic slot, internal hydrophobic barrier, speaker cone motion, and confirmation of no mechanical valves.
5. **Does Water Eject Sound Work Guide:**
   - `acoustic-pressure-surface-tension-physics.svg`: Fluid dynamics cutaway of a single mesh pore showing acoustic pressure waves overcoming the liquid meniscus surface tension barrier.
   - `speaker-cone-excursion-comparison.svg`: Technical displacement comparison showing minimal air movement at high frequencies versus deep piston excursion at 165Hz.

---

## 5. Step 3: Internal Linking & Sitemap Integration

1. **Guides Index (`/guides`):**
   - Added all 5 guides to `src/data/guides.ts`.
   - `src/pages/guides.astro` automatically lists all 10 guides sorted by publication date.
2. **Matching Tool Pages:**
   - `/fix-iphone-speaker`: Added "Related Guides" section linking to `iphone-speaker-muffled-after-water` and `phone-fell-in-water-first-10-minutes`.
   - `/clean-airpods-speaker`: Added "Related Guides" section linking to `airpods-water-damage-what-to-do` and `how-to-clean-airpods-speaker-mesh`.
   - `/fix-apple-watch-speaker`: Added "Related Guides" section linking to `apple-watch-water-lock-explained` and `does-water-eject-sound-really-work`.
   - **Home Page (`/`):** Added "Related Guides" section linking to `phone-fell-in-water-first-10-minutes`, `does-water-eject-sound-really-work`, `iphone-speaker-muffled-after-water`, and `muffled-phone-speaker-water-dust-or-damage`, with link to `/guides`.
3. **Sitemap (`public/sitemap.xml`):**
   - Regenerated with `node scripts/generate-sitemap.mjs`.
   - Contains all 52 indexable URLs (47 existing + 5 new guides).
   - Validated at build time via Astro's `sitemap-noindex-check`.

---

## 6. Step 4: Verification & Audit Data

### Test & Build Results:
- `npm run build`: **0 errors** (1331 pages built, sitemap validation passed for all 52 URLs).
- `npm test`: **All 28 compliance tests passed with 0 errors**.
- `public/ads.txt`: **Unchanged** (`git diff` clean).
- `public/robots.txt`: **Unchanged** (`git diff` clean).

### Per-URL Audit Metrics:

| Published URL | Robots Meta | Canonical | In Sitemap | Word Count | Images | Schema Types |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| `https://fixthespeaker.com/guides/iphone-speaker-muffled-after-water` | index, follow (default) | `https://fixthespeaker.com/guides/iphone-speaker-muffled-after-water` | Yes | 1,147 | 2 SVGs | Article, BreadcrumbList, FAQPage |
| `https://fixthespeaker.com/guides/airpods-water-damage-what-to-do` | index, follow (default) | `https://fixthespeaker.com/guides/airpods-water-damage-what-to-do` | Yes | 1,126 | 2 SVGs | Article, BreadcrumbList, FAQPage |
| `https://fixthespeaker.com/guides/phone-fell-in-water-first-10-minutes` | index, follow (default) | `https://fixthespeaker.com/guides/phone-fell-in-water-first-10-minutes` | Yes | 1,148 | 2 SVGs | Article, BreadcrumbList, FAQPage |
| `https://fixthespeaker.com/guides/apple-watch-water-lock-explained` | index, follow (default) | `https://fixthespeaker.com/guides/apple-watch-water-lock-explained` | Yes | 1,140 | 2 SVGs | Article, BreadcrumbList, FAQPage |
| `https://fixthespeaker.com/guides/does-water-eject-sound-really-work` | index, follow (default) | `https://fixthespeaker.com/guides/does-water-eject-sound-really-work` | Yes | 1,173 | 2 SVGs | Article, BreadcrumbList, FAQPage |

---

## 7. Dropped Guides Confirmation

The following 5 drafts remain in `audit-reports/guides-drafts/` marked `DROP` and were **not published**:
- `pixel-speaker-crackling-fix.md` (DROP)
- `redmi-speaker-not-working.md` (DROP)
- `earpiece-speaker-not-working-calls.md` (DROP)
- `phone-speaker-dust-vs-damage-test.md` (DROP)
- `submerged-phone-speaker-wont-dry.md` (DROP)
