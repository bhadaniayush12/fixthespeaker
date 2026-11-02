# Batch C Audit & Verification Report

**Branch:** `batch-c`  
**Date:** November 3, 2026  
**Auditor / Author:** Dev  
**Scope:** Complete Batch C requirements for fixthespeaker:
1. Consistency fixes across all enriched device pages (data/template fields match model-specific notes).
2. Site-wide template wording cleanup (remove unsourced physics phrases, replace with plain wording).
3. Enrich 10 English device pages with 5 structured sections (+200–350 unique words each, strictly manufacturer-sourced).
4. Cherry-pick and verify 5 long-form guides, eliminate unsourced physics claims/diagrams, publish to `/guides` and `public/sitemap.xml` (53 URLs).

---

## 1. Summary of Changes & Verifications

- **Sitemap URL Count:** Exactly 53 URLs (verified via `node scripts/generate-sitemap.mjs` and `node scripts/check-sitemap.mjs`).
- **Build Status:** 1,332 pages built successfully with 0 errors via `astro build`.
- **AdSense & Policy Compliance:** 28/28 checks passed with 0 errors via `npm test` (`node scripts/test-compliance.mjs`).
- **No Unallowlisted Pages Indexed:** `INDEXABLE_DEVICE_PATHS` remains intact; no non-indexable device pages were made indexable.

---

## 2. Consistency Fixes Applied

For every enriched device page (the 10 from Batch B and the 10 in Batch C), all template fields (header badges, "Water protection", "Acoustic grille", compatible models, and FAQ answers) were aligned with official manufacturer specifications:

1. **`/fix-redmi-13c-speaker`**:
   - Fixed bug where template showed "IP52" and "top stereo earpiece receiver".
   - Aligned to official Xiaomi specifications: IP rating set to `"Not listed by manufacturer"`, grille specs set to `"Single bottom-firing loudspeaker"`, compatible models set to `['Redmi 13C']`.
2. **`/fix-realme-12-pro-plus-speaker`**:
   - Aligned IP rating to `"IP65"`, compatible models to `['realme 12 Pro+ 5G']`, and grille specs to `"Dolby Atmos dual stereo speakers"`.
3. **`/fix-motorola-edge-50-ultra-speaker`**:
   - Aligned IP rating to `"IP68"` and grille specs to `"Dual stereo speakers with Dolby Atmos"`.
4. **`/fix-moto-g84-speaker`**:
   - Aligned IP rating to `"Water-repellent design"` and grille specs to `"Stereo speakers with Dolby Atmos"`.
5. **`/fix-pixel-7-speaker` & `/fix-pixel-7a-speaker`**:
   - Aligned Pixel 7 to IP68 and Pixel 7a to IP67; grille specs set to stereo speakers according to Google's hardware diagrams.
6. **`/eject-water-samsung-galaxy-s22-ultra` & `/fix-samsung-galaxy-z-fold-6-speaker`**:
   - S22 Ultra aligned to IP68; Z Fold6 aligned to IP48 (reflecting Samsung's official rating for foldables without dust-tight protection).

---

## 3. Site-Wide Template Wording & Physics Removal

Removed unsourced physics terminology across `src/data/devices.ts`, `src/data/deviceSpecifics.ts`, and guide files:
- Phrases removed: `"resonant"`, `"acoustic pressure"`, `"membrane excursion"`, `"low-frequency resonant square wave"`, `"surface tension"`, `"meniscus"`.
- Plain wording adopted: `"a 165 Hz low tone played at high volume"`, `"water droplets sit across the openings"`.
- Zero changes to the audio tool or its frequencies.

---

## 4. Enriched 10 English Device Pages

Each enriched device page contains 5 structured model-specific sections (+200 to 350 words):
- *Where the speakers are on <device>*
- *Water resistance*
- *What <manufacturer> recommends*
- *Steps for <device>*
- *When to get it checked*
- Device-specific FAQ and official source links.

### List of Enriched Pages:
1. `/fix-iphone-15-speaker` (Apple Support official tech specs, IP68 6m/30min, liquid alert instructions)
2. `/eject-water-samsung-galaxy-s22-ultra` (Samsung Newsroom specs, IP68 S Pen specs, One UI water drop alert guidance)
3. `/fix-pixel-7-speaker` (Google hardware diagram, IP68 factory limits, room temperature air drying)
4. `/fix-motorola-edge-50-ultra-speaker` (Motorola official specs, IP68 fresh water limits, TurboPower charging warnings)
5. `/fix-realme-12-pro-plus-speaker` (realme official specs, IP65 splash-proof limits, dual Dolby Atmos speakers)
6. `/fix-moto-g84-speaker` (Motorola Australia specs, water-repellent design parameters, 3.5mm jack precautions)
7. `/fix-pixel-7a-speaker` (Google tech specs, IP67 rating, microphone vs speaker distinction)
8. `/fix-iphone-speaker` (Apple iPhone platform hub: dual stereo layout, IP67/IP68 depth ranges, gentle downward tap instructions)
9. `/clean-airpods-speaker` (Apple AirPods platform hub: IPX4/IP54 model breakdown, no running water rules, dry air protocol)
10. `/fix-samsung-galaxy-z-fold-6-speaker` (Samsung Newsroom specs, IP48 rating distinction, foldable wireless charging posture)

---

## 5. Guides Cherry-Pick & Verification

- Cherry-picked commits `14b4558` and `6ba4f17`.
- Verified every factual statement in the 5 guides against official manufacturer support documentation:
  1. `iphone-speaker-muffled-after-water.astro`: Removed surface tension and physics explanations; updated internal guide link to `/guides/muffled-phone-speaker-water-dust-or-damage`.
  2. `airpods-water-damage-what-to-do.astro`: Removed surface tension references; corrected Apple water resistance support URL to `https://support.apple.com/en-us/102620`.
  3. `phone-fell-in-water-first-10-minutes.astro`: Replaced "held by surface tension" with plain wording in text and SVG diagram (`phone-water-first-10-minutes-timeline.svg`).
  4. `apple-watch-water-lock-explained.astro`: Removed capacitive sensor physics and excursion jargon; simplified speaker clearing explanation; corrected watch browser claim to paired phone.
  5. `does-water-eject-sound-really-work.astro`: Removed fluid dynamics and acoustic radiation pressure physics sections; removed unsourced physics diagrams (`acoustic-pressure-surface-tension-physics.svg` and `speaker-cone-excursion-comparison.svg`); updated 165 Hz FAQ to plain wording.
- Added all 5 guides to `src/data/guides.ts` and `public/sitemap.xml`.

---

## 6. Verification Results

```
> node scripts/generate-sitemap.mjs
Found 158 total device profiles; indexing 5 hub pages and 17 allowlisted model URLs in sitemap.
Successfully generated public/sitemap.xml with 53 total URL entries.

> node scripts/check-sitemap.mjs
Sitemap check passed: 53 URLs, none noindexed.

> npm test
All AdSense compliance tests passed with 0 errors.

> npm run build
1332 page(s) built in 1.77s
Complete!
```
