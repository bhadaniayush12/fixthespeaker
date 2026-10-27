# Guides Drafts — Summary and Quality Audit

This directory contains research and drafts for 10 problem-based guides created for **fixthespeaker.com**.

Each guide is drafted in GitHub Flavored Markdown with frontmatter (`title`, `description`, `slug`, `target_query`, `sources`), short paragraphs written for everyday smartphone users, direct opening answers, structured H2 sections (`Quick fix steps`, `Why it happens`, `When it's real damage`, `How we made this guide`, `Frequently asked questions`, `Image plan`), and strict adherence to official manufacturer sources (Apple, Samsung, Google).

---

## Guide Overview Table

| Slug | Target Query | Word Count | Working Sources | Status |
| :--- | :--- | :---: | :---: | :--- |
| `iphone-speaker-muffled-after-water` | `iphone speaker muffled after water` | 1,221 | 2 | OK |
| `samsung-speaker-crackling` | `samsung speaker crackling sound` | 1,194 | 1 | **DROP** |
| `airpods-water-damage-what-to-do` | `airpods fell in water` | 1,226 | 2 | OK |
| `phone-speaker-low-volume-fix` | `phone speaker volume low` | 1,226 | 1 | **DROP** |
| `earpiece-speaker-not-working-calls` | `can't hear caller earpiece` | 1,224 | 1 | **DROP** |
| `phone-fell-in-water-first-10-minutes` | `phone fell in water what to do` | 1,210 | 4 | OK |
| `apple-watch-water-lock-explained` | `apple watch water lock` | 1,240 | 2 | OK |
| `redmi-speaker-not-working` | `redmi speaker not working` | 1,240 | 1 | **DROP** |
| `phone-speaker-dust-vs-damage-test` | `is my speaker broken or just dirty` | 1,220 | 1 | **DROP** |
| `does-water-eject-sound-really-work` | `does water eject sound work` | 1,229 | 3 | OK |

---

## Source URL Verification Results

| URL | HTTP Status | Notes |
| :--- | :---: | :--- |
| `https://support.apple.com/en-us/102643` | 200 | Apple: liquid alert / tapping steps |
| `https://support.apple.com/en-us/108039` | 200 | Apple: iPhone water resistance (IP67/IP68) |
| `https://support.apple.com/en-us/102665` | 200 | **REMOVED** — resolves to "Update Safari", unrelated to speakers |
| `https://support.apple.com/en-us/109522` | 200 | Apple Watch Water Lock |
| `https://support.apple.com/en-us/108783` | 200 | Apple Watch water resistance |
| `https://support.apple.com/en-us/102672` | 200 | AirPods cleaning |
| `https://support.apple.com/en-us/109525` | 200 | AirPods water resistance |
| `https://support.google.com/pixelphone/answer/9706190` | 200 | Pixel sound settings |
| `https://support.google.com/pixelphone/answer/7533279` | 200 | Pixel water / IP rating |
| `https://support.google.com/pixelphone/answer/7167687` | 200 | Pixel speaker diagnostic |
| `https://support.google.com/android/answer/9083864` | 200 | Android volume settings |
| `https://www.samsung.com/us/support/troubleshooting/TSG01001254/` | 302 | **REMOVED** — redirects to Samsung generic support home, not audio article |
| `https://www.samsung.com/us/support/answer/ANS00077611/` | 200 | Samsung: water / drying guidance |
| `https://www.samsung.com/us/support/troubleshooting/TSG01001449/` | 000 | **REMOVED** — connection timeout |
| `https://www.samsung.com/us/troubleshooting/TSG01001449/` | 404 | **REMOVED** — 404 Not Found |
| `https://www.mi.com/global/support/` | 200 | **REMOVED** — generic Xiaomi support home, no specific article |

---

## DROP Guides Explanation

Guides marked DROP have fewer than 2 working official sources after URL verification:

- **`samsung-speaker-crackling`** — Both `TSG01001254` (redirect to generic homepage) and `TSG01001449` (timeout) removed; only `ANS00077611` remains (1 source).
- **`phone-speaker-low-volume-fix`** — `102665` (Safari update page) and `TSG01001449` (timeout/404) removed; only `pixelphone/9706190` remains (1 source).
- **`earpiece-speaker-not-working-calls`** — `102665` (Safari update page) and `TSG01001254` (generic redirect) removed; only `pixelphone/9706190` remains (1 source).
- **`redmi-speaker-not-working`** — `mi.com/global/support/` (generic Xiaomi homepage, not a specific article) removed; only `android/9083864` remains (1 source).
- **`phone-speaker-dust-vs-damage-test`** — `102665` (Safari update page) and `TSG01001449` (timeout) removed; only `pixelphone/7167687` remains (1 source).

---

## Sentences Deleted Per Guide

### iphone-speaker-muffled-after-water
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on an iPhone 13 after freshwater exposure: sound was muffled and tinny; ran three 30-second cycles of the 165Hz tone with the speaker tilted down onto a napkin; visible micro-droplets emerged and voice clarity noticeably recovered within two minutes.`
- **Bad source removed:** `https://support.apple.com/en-us/102665` from frontmatter (resolves to Safari update page).
- **Citation rephrased:** Removed `Apple notes that` prefix from warranty sentence to remove implicit attribution to the removed source.

### samsung-speaker-crackling
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on a Galaxy S22 with intermittent crackling during YouTube playback...`
- **Bad sources removed:** `TSG01001254` (redirects to Samsung generic home) and `TSG01001449` (timeout) from frontmatter.
- **Citation removed:** Inline link to `TSG01001254` removed from step 4; step reworded without link.
- **PRICE sentence deleted:** `If out of warranty, replacing a bottom speaker module at an authorized Samsung service center generally costs between $50 and $110 depending on the Galaxy model...` → replaced with direction to contact service center.

### airpods-water-damage-what-to-do
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested with an AirPod Pro earbud submerged in tap water for 5 seconds...`

### phone-speaker-low-volume-fix
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on a Pixel 7 with muffled, low media volume...`
- **Bad sources removed:** `102665` (Safari update page) and `TSG01001449` (404/timeout) from frontmatter.

### earpiece-speaker-not-working-calls
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on an iPhone 12 where incoming call voices were faint and muffled: magnification revealed dried facial oil and dust filling 70% of the top mesh slit...`
- **Bad sources removed:** `102665` (Safari update page) and `TSG01001254` (generic redirect) from frontmatter.

### phone-fell-in-water-first-10-minutes
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on a water-submerged test phone: turning off power within 15 seconds...`

### apple-watch-water-lock-explained
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on an Apple Watch Series 8 after swimming...`

### redmi-speaker-not-working
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on a Redmi Note 11 with faint speaker output...`
- **Bad source removed:** `https://www.mi.com/global/support/` from frontmatter (generic homepage, not a specific article).
- **PRICE sentence deleted:** `Because the loudspeaker in most Redmi phones is a small, modular part mounted on the lower sub-board, replacement parts are inexpensive, typically costing between $20 and $50 at authorized repair shops.`
- **Attribution label removed:** `Work through these Xiaomi-recommended troubleshooting steps in order` → `Work through these troubleshooting steps in order` (cannot attribute to a generic homepage).
- **Xiaomi Clear speaker menu path softened:** Added "On many models" qualifier since no specific mi.com article confirms the exact path.

### phone-speaker-dust-vs-damage-test
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested on a phone suspected of having a blown speaker...`
- **Bad sources removed:** `102665` (Safari update page) and `TSG01001449` (timeout) from frontmatter.
- **PRICE sentence deleted:** `Replacing a modular loudspeaker at an authorized repair facility generally costs between $40 and $100 for Android devices, and $70 to $120 for iPhones...`

### does-water-eject-sound-really-work
- **FAKE TEST RECORD deleted:** `[DEV: tested on my phone — result] Tested with water droplets placed directly onto a smartphone speaker grille...`
- **UNSOURCED FREQUENCY RANGE deleted:** `Higher frequencies (like 5,000Hz) vibrate rapidly but with microscopic cone movement. Low frequencies (130Hz to 175Hz)...` — frequency range 130Hz–175Hz not stated in any cited source; replaced with general description without specific figures.
- **Image plan updated:** Removed specific `5,000Hz` label from image plan description.

---

## Frontmatter and Content Compliance Summary

1. **Title Length:** Every title is 60 characters or fewer.
2. **Meta Description Length:** Every meta description is 155 characters or fewer.
3. **Word Counts:** All guides fall between 1,194 and 1,240 words after deletions. All are above 700 words.
4. **Direct Answers:** Each guide opens with a 2–3 sentence direct answer addressing the user's immediate problem.
5. **Manufacturer Citations:** All remaining technical guidance is aligned with official documentation from Apple Support, Samsung Support, Google Pixel Help, and Google Android Help. No invented test records remain.
6. **Internal Links:** Every guide links to its corresponding tool/hub page plus at least two other guides from this draft series.
7. **Testing Records:** All `[DEV: tested on my phone — result]` lines have been deleted. A `## How we made this guide` section has been added to each guide instead.
8. **Image Plans:** Each draft concludes with an `## Image plan` detailing two visual diagrams.
