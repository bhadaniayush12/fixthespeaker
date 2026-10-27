// English-only long-form guides. Each entry needs a matching page in src/pages/guides/<slug>.astro
// and is added to the sitemap by scripts/generate-sitemap.mjs.
export interface Guide {
  slug: string;
  title: string;
  description: string;
  published: string; // ISO date
  updated: string; // ISO date
}

export const guides: Guide[] = [
  {
    slug: 'why-is-my-phone-speaker-crackling',
    title: 'Why Is My Phone Speaker Crackling? What to Check First',
    description: 'Check crackling phone audio in a sensible order: playback and apps, blocked openings, then manufacturer support for persistent distortion.',
    published: '2026-10-27',
    updated: '2026-10-27',
  },
  {
    slug: 'iphone-call-volume-low-earpiece',
    title: 'iPhone Call Volume Low in the Earpiece: What to Check',
    description: 'Check iPhone call volume, audio routing, supported noise cancellation settings and receiver cleaning before contacting Apple.',
    published: '2026-10-27',
    updated: '2026-10-27',
  },
  {
    slug: 'android-speaker-not-working-after-update',
    title: 'Android Speaker Not Working After an Update: What to Check',
    description: 'Restore missing or quiet Android audio with manufacturer guidance on restart, sound settings, Do Not Disturb, safe mode and support.',
    published: '2026-10-27',
    updated: '2026-10-27',
  },

  {
    slug: 'iphone-speaker-muffled-after-water',
    title: 'iPhone Speaker Muffled After Water: How to Fix It',
    description:
      'Learn how to clear trapped water from your iPhone speaker using safe drying steps and sound ejection, plus when hardware repair is required.',
    published: '2026-10-23',
    updated: '2026-10-23',
  },
  {
    slug: 'airpods-water-damage-what-to-do',
    title: 'AirPods Fell in Water: Safe Steps and What to Do',
    description:
      'Dropped your AirPods or AirPods Pro in water? Follow Apple-safe drying and cleaning steps, avoid costly mistakes, and test audio safely.',
    published: '2026-10-23',
    updated: '2026-10-23',
  },
  {
    slug: 'phone-fell-in-water-first-10-minutes',
    title: 'Phone Fell in Water: What to Do in the First 10 Mins',
    description:
      'Crucial first 10 minutes when your phone falls in water: immediate actions, drying methods that work, and common mistakes that cause damage.',
    published: '2026-10-23',
    updated: '2026-10-23',
  },
  {
    slug: 'apple-watch-water-lock-explained',
    title: 'Apple Watch Water Lock Explained: How It Works',
    description:
      'Understand Apple Watch Water Lock: what it locks, how the speaker tone ejects water, water resistance limits, and when you need it.',
    published: '2026-10-23',
    updated: '2026-10-23',
  },
  {
    slug: 'does-water-eject-sound-really-work',
    title: 'Does Water Eject Sound Work? How It Clears Speakers',
    description:
      'Explore how low-frequency acoustic vibrations push water out of phone speakers, what science says, and where audio clearing reaches its limits.',
    published: '2026-10-23',
    updated: '2026-10-23',
  },
  {
    slug: 'samsung-moisture-detected-warning',
    title: 'Samsung "Moisture Detected" Warning: What to Do',
    description:
      'Why your Galaxy phone blocks charging with a water drop icon, how long the port takes to dry, what not to do, and what to check when the warning will not go away.',
    published: '2026-10-15',
    updated: '2026-10-15',
  },
  {
    slug: 'how-to-clean-phone-speaker-dust',
    title: 'How to Clean Dust and Lint from a Phone Speaker',
    description:
      'A safe, step-by-step way to clear dust and pocket lint from iPhone and Android speaker grilles, what tools to avoid, and when cleaning will not fix the sound.',
    published: '2026-10-15',
    updated: '2026-10-15',
  },
  {
    slug: 'how-to-clean-airpods-speaker-mesh',
    title: 'How to Clean AirPods Speaker Mesh Safely',
    description:
      'How to clear dust and earwax from AirPods and AirPods Pro speaker mesh using a dry brush or Apple\'s own cleaning method, plus what never to use.',
    published: '2026-10-15',
    updated: '2026-10-15',
  },
  {
    slug: 'does-rice-fix-a-wet-phone',
    title: 'Does Putting a Wet Phone in Rice Actually Work?',
    description:
      'Why the bag-of-rice trick is weaker than open air, what Apple now says about it, and the steps that actually help a wet phone dry out safely.',
    published: '2026-10-13',
    updated: '2026-10-13',
  },
  {
    slug: 'muffled-phone-speaker-water-dust-or-damage',
    title: "Muffled Phone Speaker? How to Tell If It's Water, Dust, or Damage",
    description:
      'Simple checks to find out why your phone speaker sounds muffled, whether it is water, lint, a setting or real damage, and the right fix for each.',
    published: '2026-10-13',
    updated: '2026-10-13',
  },
];
