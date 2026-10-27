# Guides batch 2

Branch: `content/guides-batch-2`, based on GitHub main `7499e32`.

Each guide uses the existing ContentLayout and Article, BreadcrumbList and FAQPage schema. Each includes one original SVG checklist, inline official citations, a final source list, two existing guide links and a kept brand hub link. The guide catalog adds all three to /guides and sitemap generation.

Word counts below include article headings, prose, figure captions, related links and FAQ answers. They exclude the page header, citation labels, source bibliography and More guides link. The full main-text count includes those elements (SVG internals excluded by the repository text extractor).

## Why Is My Phone Speaker Crackling? What to Check First

- URL: /guides/why-is-my-phone-speaker-crackling
- Article words: **919**
- Full main-text words: **1131**
- FAQ questions: 4

Sources:

- [Apple: No sound or distorted speaker sound](https://support.apple.com/en-gb/118432)
- [Google: Fix unclear or low volume sound on Pixel](https://support.google.com/pixelphone/answer/9706190?hl=en)
- [Samsung: Microphone or speaker issues on Galaxy](https://www.samsung.com/ae/support/mobile-devices/what-to-do-if-your-microphone-or-speaker-is-not-working-properly/)
- [Apple: If an app does not work as expected](https://support.apple.com/en-ca/119876)
- [Samsung: Speaker does not work properly](https://www.samsung.com/us/support/troubleshoot/TSG10001510/)
- [Apple: Cleaning your iPhone](https://support.apple.com/en-am/108765)

## iPhone Call Volume Low in the Earpiece: What to Check

- URL: /guides/iphone-call-volume-low-earpiece
- Article words: **1002**
- Full main-text words: **1188**
- FAQ questions: 5

Sources:

- [Apple: While on a call on iPhone](https://support.apple.com/guide/iphone/while-on-a-call-iph3c9951d7/ios)
- [Apple: Adjust audio settings on iPhone](https://support.apple.com/en-euro/guide/iphone/-iphb80ab7516/ios)
- [Apple: No sound or distorted speaker sound](https://support.apple.com/en-gb/118432)
- [Apple: Cleaning your iPhone](https://support.apple.com/en-am/108765)

## Android Speaker Not Working After an Update: What to Check

- URL: /guides/android-speaker-not-working-after-update
- Article words: **951**
- Full main-text words: **1185**
- FAQ questions: 4

Sources:

- [Samsung: Troubleshoot no sound issues](https://www.samsung.com/us/support/troubleshoot/TSG10013264/)
- [Google: Get help with your Pixel phone](https://support.google.com/pixelphone/answer/7109524?hl=en)
- [Google: Fix unclear or low volume sound on Pixel](https://support.google.com/pixelphone/answer/9706190?hl=en)
- [Samsung: Troubleshoot volume controls](https://www.samsung.com/us/support/troubleshoot/TSG10005176/)
- [Google: Change volume, sound and vibrate settings](https://support.google.com/pixelphone/answer/2819577?hl=en-AS)
- [Google: Check phone settings to avoid missed calls](https://support.google.com/pixelphone/answer/12206413?hl=en)
- [Samsung: Microphone or speaker issues on Galaxy](https://www.samsung.com/ae/support/mobile-devices/what-to-do-if-your-microphone-or-speaker-is-not-working-properly/)
- [Google: Find problem apps using safe mode](https://support.google.com/pixelphone/answer/2852139?hl=en)
- [Samsung: Speaker does not work properly](https://www.samsung.com/us/support/troubleshoot/TSG10001510/)

## Verification

- `npm run build`: passed; 41 pages built.
- `npm test`: passed with zero errors, including reader-facing banned terms, internal links and exact sitemap membership (39 indexable URLs).
- `git diff --check`: passed.
- All three SVGs parsed successfully and were rendered to PNG for visual inspection; labels and arrows fit without clipping.
- All three new pages have Article, BreadcrumbList and FAQPage schema matching their visible FAQs.
- Every guide in the catalog is checked as built. The page-count check now uses catalog length, and the similarity assertion includes guides alongside device pages.
- Similarity uses the existing five-word shingle containment algorithm with the unchanged 70% failure threshold.
- Maximum across the 33 published device and guide pages: **47.96%**, the existing `eject-water-samsung-galaxy-s25` / `eject-water-samsung-galaxy-s24-ultra` pair.
- Maximum among all 13 guides, also the maximum involving a new guide: **6.78%**, `guides/why-is-my-phone-speaker-crackling` / `guides/android-speaker-not-working-after-update`.
- No merge or deployment performed.
