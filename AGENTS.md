## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## AdSense Compliance

**This project has a dedicated AdSense policy knowledge base at `docs/adsense/`.**

### When to activate

Activate the `adsense-compliance` skill for ANY task that involves:

- AdSense approval, application, or readiness assessment
- AdSense compliance audit or policy review
- Google Publisher Policy evaluation
- Ad placement review or audit
- AdSense Terms of Service questions
- Fixing issues flagged in a previous AdSense audit report
- Privacy policy accuracy in relation to AdSense data practices
- Thin content, doorway pages, or templated content issues in an AdSense context
- Misleading claims, fake data, or misrepresentation issues in an AdSense context

### Mandatory first step

Before making any AdSense-related decision or code change, read the knowledge base
in this order:

1. `docs/adsense/00_ADSENSE_INDEX.md` — index, reading order, and ground rules
2. `docs/adsense/01_SITE_READINESS_AND_ELIGIBILITY.md`
3. `docs/adsense/02_GOOGLE_PUBLISHER_POLICIES.md`
4. `docs/adsense/03_AD_PLACEMENT_POLICIES.md`
5. `docs/adsense/04_ADSENSE_TERMS_OF_SERVICE.md`
6. `docs/adsense/05_ADSENSE_AUDIT_PROMPT.md` — run the 12-phase audit using this file

**Do not rely on training-data assumptions about AdSense policy. The knowledge base
is the source of truth for this project.**

### Evidence discipline

Every finding must carry exactly one label — never omit or misuse them:

| Label | Meaning |
|-------|---------|
| EXPLICIT POLICY REQUIREMENT | Directly stated in docs/adsense/. Quote the source. |
| POLICY PROHIBITION | Directly prohibited in docs/adsense/. Quote the source. |
| APPROVAL-RISK INFERENCE | Pattern suggests risk; not an explicit rule. State the inference clearly. |
| GENERAL RECOMMENDATION | Good practice; not tied to an explicit policy rule. |

Never write "Google requires X" unless X is directly quoted from `docs/adsense/`.

### Website preservation (non-negotiable)

Fix The Speaker is a live, launched website. All of the following are PROHIBITED
unless explicitly justified by a direct policy quote:

- Rebuilding or redesigning the site
- Removing working features or pages
- Changing URLs
- Adding filler content, padding, fake testimonials, fake authors, or fake counts
- Making speculative SEO changes labelled as AdSense compliance
- Inventing legal requirements or privacy obligations
- Claiming AdSense approval is guaranteed

Prefer the **smallest effective fix** for every HIGH or MEDIUM risk item.

### Skill location

Full workflow details: `.agents/skills/adsense-compliance/SKILL.md`

