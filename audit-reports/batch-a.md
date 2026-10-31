# Batch A Audit & Verification Report

**Branch:** `batch-a`  
**Date:** October 30, 2026  
**Auditor / Author:** Dev  
**Scope:** AdSense cleanup, analytics dependency review, WCAG AA color contrast remediation, new `/how-it-works` technical page, About page editorial policy addition, Contact page functional verification, and sitemap synchronization.

---

## 1. Summary of Changes

| Task | Status | Summary |
|------|--------|---------|
| 1. AdSense Cleanup | Verified | Kept verification script in `<head>`; confirmed 0 `<ins class="adsbygoogle">` slots and 0 `adsbygoogle.push` calls site-wide. |
| 2. Analytics Review | Stopped & Reported | Found that GA4 tracking and custom tool events directly depend on GTM (`GTM-5BKNT4C2`); per instructions, GTM was retained and dependency documented. |
| 3. Accessibility / Contrast | Completed | Fixed all 11 light-mode contrast failures on homepage and contact page by tuning CSS variables (`#0891b2` → `#0c6980`); 0 violations in dark/light. |
| 4. New Page `/how-it-works` | Created | Added `/how-it-works` (EN only) with exact Web Audio frequencies, acoustic physics explanation, hardware limits, official comparisons, safety, sources, and Article schema. |
| 5. About Page Update | Completed | Added "Editorial Policy" section to `subpagesContent.en.about`; all other content preserved. |
| 6. Contact Page Check | Verified & Fixed | Confirmed valid `mailto:support@fixthespeaker.com` link; fixed button text contrast in light mode. |
| 7. Sitemap & Build | Verified | Production build passed with 0 errors; sitemap URL count increased from 47 to 48 (+1). |

---

## 2. Detailed Findings by Task

### Task 1: AdSense Cleanup
- **Requirement:** Keep the AdSense `<script async src="...adsbygoogle.js?client=ca-pub-...">` in `<head>` exactly as is (needed for site review). Remove every `<ins class="adsbygoogle">` ad slot and any `(adsbygoogle = window.adsbygoogle || []).push({})` calls site-wide, so no empty ad boxes render.
- **Verification:**
  - Audited `src/layouts/Layout.astro`: the verification tag is retained conditionally for indexable publisher pages:
    ```html
    <script
      is:inline
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1685098412554701"
      crossorigin="anonymous"
    ></script>
    ```
  - Executed a global repository search for `<ins`, `class="adsbygoogle"`, and `adsbygoogle.push`.
  - **Finding:** Zero ad slot elements and zero push calls exist in `src/`. No empty ad placeholders or broken units render anywhere on the site.

### Task 2: Analytics (GTM vs. gtag.js Dependency Report)
- **Requirement:** The site loads both Google Tag Manager (`gtm.js`) and `gtag.js`. Keep the GA4 `gtag.js` snippet. Remove the GTM snippet (head script + noscript iframe) unless something in the repo depends on GTM — if it does, stop and report instead of removing.
- **Finding & Action:** **Stopped removal and reporting dependency.**
  1. **No Standalone `gtag.js` Tag:** The repository does not contain a standalone `<script src="https://www.googletagmanager.com/gtag/js?id=G-...">` loader tag in `<head>`. A previous commit (`e29051a`) removed the direct `gtag.js` loader to ensure Consent Mode v2 compliance in EEA/UK regions, delegating GA4 (`G-924DECLM9L`) loading exclusively to the consent-gated GTM container (`GTM-5BKNT4C2`).
  2. **Active Code Dependencies on GTM `dataLayer`:**
     - `src/components/SpeakerToolPage.astro` and `src/components/SpeakerTool.astro` fire critical custom events via `trackToolEvent`:
       - `tool_start`
       - `tool_complete` (with duration metrics)
       - `share_click`
     - These functions push `{ event: eventName, ...params }` onto `window.dataLayer`, which GTM container triggers listen for.
     - `src/components/pages/DevicePage.astro` includes scroll depth calculation designed for GTM/GA4 trigger dispatch.
  3. **Impact of Removal:** Removing GTM would completely dismantle GA4 measurement and disable all tool usage analytics across the entire site. Per the instruction ("unless something in the repo depends on GTM — if it does, stop and report instead of removing"), GTM was safely preserved.
  4. Confirmed 0 `<noscript>` GTM iframes exist in the repository.

### Task 3: Accessibility & Contrast Remediation
- **Tooling:** Axe Core (`4.10.2`) / Playwright mobile viewport (390x844) local preview audit.
- **Failures Identified (Baseline):**
  - Dark mode: 0 violations.
  - Light mode: 11 `color-contrast` violations on the homepage against `#ffffff`, `#f8fafd`, `#f3f9fb`, and `#dcecf4` backgrounds, all caused by `--color-primary: #0891b2` (contrast ratio 3.04:1 to 3.68:1 vs. 4.5:1 required by WCAG AA).
  - Light mode Contact page: 1 violation on the mailto button (`text-[#041019]` on `#0c6980` had 3.06:1 contrast).
- **Remediation Applied:**
  1. In `src/layouts/Layout.astro` under `html:not(.dark)`:
     - Updated `--color-primary: #0891b2;` → `--color-primary: #0c6980;` (deep ocean cyan).
     - Updated `--color-primary-bright: #06b6d4;` → `--color-primary-bright: #0891b2;`.
     - Result: Contrast ratio improved to **5.18:1 – 6.27:1**, fully satisfying WCAG AA 4.5:1 minimums while maintaining the cyan visual identity.
  2. In `src/components/pages/ContactPage.astro`:
     - Updated `.btn-primary` button text from hardcoded `text-[#041019]` to `text-on-primary`, allowing it to evaluate to `#ffffff` in light mode (contrast > 6:1) and `#041019` in dark mode (contrast > 7:1).
- **Verification:**
  - Audited `/`, `/how-it-works`, `/about`, `/contact`, `/guides/does-rice-fix-a-wet-phone`, and `/fix-iphone-speaker`.
  - **Result: 0 color-contrast violations across all audited pages in both Dark Mode and Light Mode.**

### Task 4: New Page `/how-it-works`
- **File:** `src/pages/how-it-works.astro` (English only).
- **Key Sections & Content:**
  1. **Exact Web Audio Frequencies Stated:**
     - **Water Eject mode:** 165 Hz square-wave core, 82.5 Hz sub-bass (1 octave lower), 330 Hz harmonic punch (1 octave higher), pulsed at 3.2 Hz via an LFO, shaped through a 200 Hz low-shelf filter (+8 dB bass boost).
     - **Dust Cleaner mode:** Dual-band sawtooth sweeps (2.5 kHz – 6 kHz mid-band and 8 kHz – 14.5 kHz high-band) with a 3.5 kHz presence boost.
     - **Stereo Diagnostic mode:** Calibrated left, right, and center channel verification tones.
  2. **Acoustic Physics & Surface Tension:** Explains how 165 Hz low frequencies generate large speaker cone excursion to produce rapid air bursts that overcome water surface tension across grille mesh openings.
  3. **Hardware Scope & Limits:** Explicitly clarifies that the tool only displaces air and surface moisture/dust. It cannot fix internal short circuits, corroded logic boards, or physically torn speaker cones. Provides unambiguous guidance on when to stop and consult an authorized service technician.
  4. **Official Manufacturer Comparisons:**
     - Apple Watch Water Lock: Series 2+ acoustic ejection feature explained and linked to Apple Support.
     - Samsung "Moisture detected" guidance: USB-C port protection, natural 1–2 hour evaporation, and speaker grille drying explained and linked to Samsung Support.
     - IEC 60529 Standard: Explains IP67 vs. IP68 ratings (fresh water lab conditions, wear over time, warranty exclusions) with links to IEC and Apple.
  5. **Safety Guidelines:** High volume for displacement, avoiding holding against ear, 60-second cycle duration, downward orientation, and strict warnings against heat, compressed air, and rice (linking `/guides/does-rice-fix-a-wet-phone`).
  6. **Sources Section:** Complete bottom section citing all official resources.
  7. **Metadata & Structured Data:** `ContentLayout` with `localized={false}`, OpenGraph article tags, and JSON-LD `Article` schema with author name "Dev".
  8. **Footer & Sitemap:** Linked in the footer navigation (`<nav aria-label="Footer Pages">`) and added to sitemap generation.

### Task 5: About Page Editorial Policy
- **File:** `src/i18n/subpages.ts` (`subpagesContent.en.about`).
- **Section Added:**
  - **Title:** "Editorial Policy"
  - **Copy:** Discloses that content is researched from official manufacturer documentation and standards (Apple Support, Samsung Support, Google Pixel Help, IEC standards); every factual claim is sourced; pages and guides are regularly reviewed and updated; corrections can be submitted via the contact page.
- **Preservation:** All other existing sections, headings, titles, and text on `/about` remain unchanged.

### Task 6: Contact Page Verification
- **File:** `src/components/pages/ContactPage.astro`.
- **Finding:**
  - The contact page uses a direct `mailto:support@fixthespeaker.com?subject=Fix%20The%20Speaker` action with an accessible button target (min 44px height).
  - No broken `<form>` or non-existent backend endpoints exist.
  - The email address `support@fixthespeaker.com` is consistent with the About and Privacy policies.
  - Fixed button text contrast for light mode compliance as detailed in Task 3.

---

## 3. Sources Used on `/how-it-works`

1. **Apple Support:** *How to use Water Lock and eject water from your Apple Watch*  
   URL: `https://support.apple.com/en-us/108351`
2. **Apple Support:** *If you see a liquid-detection alert on your iPhone*  
   URL: `https://support.apple.com/en-us/102643`
3. **Apple Support:** *About splash, water, and dust resistance of iPhone 7 and later*  
   URL: `https://support.apple.com/en-us/108039`
4. **Samsung Support (UK):** *What to do if there is moisture in your water-resistant Samsung phone or tablet*  
   URL: `https://www.samsung.com/uk/support/mobile-devices/what-to-do-if-your-water-resistant-phone-or-tablet-detects-moisture-in-the-charging-port/`
5. **Samsung Support (Africa):** *There is noise in the speaker sound of the device*  
   URL: `https://www.samsung.com/africa_en/support/mobile-devices/there-is-noise-in-the-speaker-sound-of-the-device/`
6. **International Electrotechnical Commission (IEC):** *Understanding IP ratings (IEC 60529 standard overview)*  
   URL: `https://www.iec.ch/ip-ratings`
7. **Fix The Speaker Guide:** *Does Rice Fix a Wet Phone?*  
   URL: `/guides/does-rice-fix-a-wet-phone`

---

## 4. Sitemap URL Count Verification

- **Previous Count:** 47 URLs (`public/sitemap.xml`)
- **New Count:** 48 URLs (`public/sitemap.xml`)
- **Net Change:** +1 URL (`https://fixthespeaker.com/how-it-works`)
- **Automated Validation:** `scripts/check-sitemap.mjs` confirmed all 48 URLs exist in `dist/` and none carry a `noindex` tag.

---

## 5. Files Changed

| File Path | Nature of Change |
|-----------|------------------|
| `src/layouts/Layout.astro` | Added `/how-it-works` to footer nav; adjusted light-mode `--color-primary` and `--color-primary-bright` for contrast. |
| `src/pages/how-it-works.astro` | Created new English-only page with full technical, safety, comparative, and source content. |
| `src/components/pages/ContactPage.astro` | Adjusted mailto button text class to `text-on-primary` for WCAG AA light-mode contrast. |
| `src/i18n/subpages.ts` | Added "Editorial Policy" section to English About page content. |
| `scripts/generate-sitemap.mjs` | Added `{ slug: 'how-it-works', priority: '0.6', changefreq: 'monthly' }` to static pages. |
| `public/sitemap.xml` | Regenerated with 48 URLs (+1 URL for `/how-it-works`). |
| `audit-reports/batch-a.md` | Created comprehensive audit and verification report. |

---

## 6. Build & Test Verification

```
> fix-the-speaker@1.0.0 build
> astro build
[sitemap-noindex-check] Sitemap check passed: 48 URLs, none noindexed.
1327 page(s) built in 1.97s
Complete!

> fix-the-speaker@1.0.0 test
> node scripts/test-compliance.mjs
All AdSense compliance tests passed with 0 errors.
```

---

## 7. Follow-up: Content & Source Factual Verification

A rigorous review was conducted on all factual statements across `/how-it-works` and the new About page "Editorial Policy" section. Below is the inventory of every sentence removed or modified, along with the source-based rationale:

### A. Removal of Theoretical Physics / Surface Tension / Excursion
- **Previous Text:**
  - *"When a smartphone is exposed to moisture, water drops often do not penetrate into the phone body; instead, they become trapped across the exterior speaker grille. Surface tension causes tiny water droplets to cling tightly to the mesh pores, blocking the free passage of sound and causing calls, ringtones, and music to sound muffled or distorted."*
  - *"Low-frequency sound waves (such as 165 Hz) require larger physical cone excursion than high treble tones. As the speaker diaphragm pumps back and forth at full volume, it pushes and pulls air through the acoustic chamber. This rapid change in air pressure can overcome the surface tension holding the droplets, dislodging them from the grille so they can drop away."*
- **Replacement (3 plain sentences):**
  - *"The tool plays a low tone at high volume, which makes the speaker move air through the grille. Manufacturers use the same idea (such as Apple Watch Water Lock — see Apple Support 108351). Beyond moving air at the exterior grille, playing sound does not dry internal components or repair damaged hardware."*
- **Rationale:** Eliminated all speculative acoustic physics, fluid surface tension, and cone excursion mechanics in favor of direct, plain-language description linking to Apple Support 108351.
- **Short Answer Update:** Replaced *"Fix The Speaker plays low-frequency sound waves that vibrate the phone's speaker diaphragm. These physical vibrations produce small, rapid air pulses that can help push trapped water droplets and loose dust particles out..."* with *"The tool plays a low tone at high volume, which makes the speaker move air through the grille to help dislodge trapped water droplets or dust."*

### B. Apple Watch Water Lock "Series 2+" Claim
- **Previous Sentence:** *"Starting with Apple Watch Series 2, Apple introduced an official feature called Water Lock."*
- **Action:** Deleted "Starting with Apple Watch Series 2".
- **Current Text:** *"On Apple Watch, Apple includes Water Lock, which prevents accidental screen taps while in water and plays a series of tones when turned off to clear water from the speaker grille (Apple Support 108351)."*
- **Rationale:** The linked Apple Support article (108351/108352) explains Water Lock functionality but does not state "Starting with Apple Watch Series 2".
- **Digital Crown Gesture Correction:** Removed *"turn the Digital Crown to unlock the screen"* and *"sequence of low-frequency acoustic tones"*, aligning directly with Apple Support's wording (*"press and hold the Digital Crown until the display says Unlocked"* and *"plays a series of tones to clear water"*).

### C. Samsung "1–2 Hour Evaporation" & Shaking Scope
- **Previous Sentences:**
  - *"Samsung explains that water in the charging port typically evaporates naturally within 1 to 2 hours in a well-ventilated space."*
  - *"Samsung recommends gently shaking the phone with the speaker and port pointing downward, wiping the device with a clean, soft cloth, and allowing it to air-dry."*
- **Action:** Deleted the 1–2 hour evaporation sentence entirely. Corrected speaker guidance sentence.
- **Current Text:** *"Samsung notes that moisture inside the speaker grill can cause crackling or muffled sound, and advises patting the device dry with a clean, soft cloth and allowing it to dry before testing the audio again (Samsung Support)."*
- **Rationale:**
  1. The 1–2 hour evaporation figure comes from Samsung's USB charging port article, not speaker grilles, and the article does not specify "in a well-ventilated space". Evaporation rates depend on environment and should not be stated as a speaker timeline.
  2. Samsung's speaker sound support page does not advise shaking the device (shaking is only advised for the USB charging port). Patting dry and allowing complete drying is what the speaker source actually specifies.

### D. IP67 / IP68 Depth and Time Numbers
- **Previous Text:**
  - *"7 (IP67): Protection against the effects of temporary immersion in fresh water up to a depth of 1 meter for up to 30 minutes under static test conditions."*
  - *"8 (IP68): Protection against continuous immersion in fresh water deeper than 1 meter under conditions specified by the manufacturer (for instance, Apple tests recent flagship iPhones up to 6 meters for 30 minutes, while Samsung tests Galaxy flagships up to 1.5 meters for 30 minutes)."*
  - *"It is important to understand that IP tests are conducted in still fresh water in controlled laboratory environments. They do not certify protection against high-pressure water jets, sea water, hot shower steam, or chlorinated pools."*
- **Action:** Deleted all depth/duration numbers and unverified comparative claims.
- **Current Text (Water resistance limits):** *"As documented by Apple (Apple Support 108039), water resistance is not a permanent condition and can decrease over time as a result of normal wear. Liquid damage is not covered under standard manufacturer warranties."*
- **Sources Update:** Removed unreferenced IEC link (`https://www.iec.ch/ip-ratings`, which returns 403).
- **Rationale:** The linked source did not corroborate the specific comparison numbers (especially Samsung 1.5m), whereas Apple Support 108039 explicitly substantiates the warranty and wear limitations.

### E. "60-Second Cycle" Duration Claim
- **Previous Sentence:** *"Duration: Run the 60-second cycle once or twice. If moisture remains, wait a few minutes before running it again."*
- **Action:** Deleted *"Run the 60-second cycle once or twice."*
- **Current Text:** *"Duration: If moisture remains after playing a tone, allow the phone to rest in a dry area with airflow. Running tones continuously for hours will not dry the device faster and will drain the battery."*
- **Rationale:** No manufacturer source prescribes running a "60-second cycle". Fix The Speaker's tool timer is 60 seconds, but presenting it as an official recommendation was not supported by external sources.

### F. Best Practices Technical Claims (Volume, Heat, Compressed Air)
- **Previous Volume Sentence:** *"Set your device media volume to 100% so the speaker cone has maximum displacement to push air."*
  - **Changed to:** *"Set your device media volume to 100% so the speaker moves air through the grille."*
  - **Rationale:** Replaced "cone displacement" physics terminology with plain air movement phrasing.
- **Previous Heat & Air Claims:** *"External heat damages the lithium-ion battery and softens the waterproof glue seals..."* and *"High-pressure air can rupture delicate speaker membranes and microphone diaphragms."*
  - **Changed to:** Plain statements citing manufacturer rules: *"Apple and Samsung both advise against using external heat sources such as hair dryers, heat guns, or ovens."* and *"Apple and Samsung both warn against using compressed air or high-pressure air guns on device openings."*
  - **Rationale:** Directly matches the explicit prohibitions in Apple Support 102643 and Samsung support without attributing unverified internal failure mechanisms.

### G. About Page "Editorial Policy" Section
- **Previous Sentence:** *"Our content is thoroughly researched from official manufacturer documentation and international standards (including Apple Support, Samsung Support, Google Pixel Help, and IEC standards). Every factual claim is sourced from official guidance."*
- **Changed to:** *"Our content is researched from official manufacturer documentation (including Apple Support, Samsung Support, and Google Pixel Help). Factual claims are sourced from official guidance."*
- **Rationale:** Removed "and international standards / IEC standards" to reflect that site advice relies on manufacturer support documentation (Apple, Samsung, Google Pixel).


