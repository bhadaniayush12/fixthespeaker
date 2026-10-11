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
