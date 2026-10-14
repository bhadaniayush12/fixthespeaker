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
