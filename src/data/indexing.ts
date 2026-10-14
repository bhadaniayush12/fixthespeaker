// Subpages whose translated (non-English) versions are indexable and may show ads.
// '' is the locale home page. Other translated pages stay live but are noindexed (and ad-free)
// until they have full translations; see docs/adsense audit, October 2026.
export const INDEXED_TRANSLATED_SUBPAGES: readonly string[] = ['', 'privacy'];

export const isTranslatedSubpageIndexed = (subpage: string): boolean =>
  INDEXED_TRANSLATED_SUBPAGES.includes(subpage.replace(/^\/+|\/+$/g, ''));
