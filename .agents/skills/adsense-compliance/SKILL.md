---
name: adsense-compliance
description: >
  AdSense approval readiness and policy compliance workflow for Fix The Speaker.
  Use when the task involves any of: AdSense approval, AdSense readiness audit,
  AdSense policy compliance, Google Publisher Policy review, ad placement audit,
  AdSense Terms of Service, AdSense re-audit, or fixing issues flagged in a
  previous AdSense audit report. Automatically triggers reading of docs/adsense/
  before any analysis or code change.
---

# AdSense Compliance Skill — Fix The Speaker

## ⚠️ READ THIS ENTIRE FILE BEFORE PROCEEDING

This skill governs every task that touches AdSense approval, readiness, compliance,
or policy auditing on the Fix The Speaker website. Failure to follow this workflow
is a protocol violation.

---

## 1. Source of Truth

**`docs/adsense/` is the project-supplied AdSense policy reference.**

Before making any decision, recommendation, or code change related to AdSense:

1. Read `docs/adsense/00_ADSENSE_INDEX.md` — index and evidence discipline rules.
2. Read `docs/adsense/01_SITE_READINESS_AND_ELIGIBILITY.md` — readiness requirements.
3. Read `docs/adsense/02_GOOGLE_PUBLISHER_POLICIES.md` — prohibited and restricted content.
4. Read `docs/adsense/03_AD_PLACEMENT_POLICIES.md` — ad placement constraints.
5. Read `docs/adsense/04_ADSENSE_TERMS_OF_SERVICE.md` — publisher obligations.
6. Read `docs/adsense/05_ADSENSE_AUDIT_PROMPT.md` — master 12-phase audit workflow.

**Do not rely on training-data assumptions about AdSense policy.**
**Do not start editing files before the reading phase is complete.**

---

## 2. Evidence Discipline (MANDATORY)

Every AdSense finding must carry exactly one of these labels. Never omit the label.
Never upgrade an inference to an explicit requirement.

| Label | When to use |
|-------|------------|
| **EXPLICIT POLICY REQUIREMENT** | The `docs/adsense/` file directly states this is required. Always quote the source sentence. |
| **POLICY PROHIBITION** | The `docs/adsense/` file directly prohibits this. Always quote the source sentence. |
| **APPROVAL-RISK INFERENCE** | The policy does not state this explicitly, but the pattern plausibly creates approval risk. State the inference clearly and do not present it as a rule. |
| **GENERAL RECOMMENDATION** | A good practice not tied to any explicit policy rule. |

> **Critical anti-hallucination rule:**
> Never write "Google requires X" unless X is directly quoted from `docs/adsense/`.
> Instead write: "The supplied policy explicitly states X" or "This is an approval-risk
> inference — the supplied material does not establish it as a hard requirement."

---

## 3. Audit Workflow

When performing an AdSense audit, follow the 12-phase workflow in
`docs/adsense/05_ADSENSE_AUDIT_PROMPT.md` exactly.

The phases are:

1. Read the policy knowledge base (`docs/adsense/`).
2. Inspect the full repository/website.
3. Evaluate site readiness (content quality, navigation, ownership).
4. Evaluate content policy risk (prohibited/restricted categories).
5. Evaluate behavioral and inventory-value risks.
6. Evaluate privacy risks.
7. Evaluate spam, malware, and unwanted-software risk.
8. Evaluate ad placement risks (only if ads/placeholders exist).
9. Classify every finding as HIGH / MEDIUM / LOW risk.
10. Apply the change policy before touching any code.
11. Apply fixes (smallest effective change only).
12. Re-audit after fixes and produce final report.

---

## 4. Website Preservation Rules (NON-NEGOTIABLE)

Fix The Speaker is a **live, launched website**. These rules apply to every task:

- **Do NOT** rebuild or redesign the website without explicit user approval.
- **Do NOT** remove working features or pages.
- **Do NOT** change URLs unless the URL is itself a documented policy problem.
- **Do NOT** add filler content, padding, fake testimonials, fake authors, or
  fake subscriber counts.
- **Do NOT** make speculative SEO changes and label them as AdSense compliance.
- **Do NOT** invent legal requirements or privacy obligations.
- **Do NOT** claim AdSense approval will be granted or guaranteed.
- **Preserve** existing design, branding, UX, architecture, and functionality.
- **Prefer** the smallest effective fix for every HIGH or MEDIUM risk item.
- **State the source-supported reason** before making any change.

---

## 5. Risk Classification

Apply risk levels as defined in `docs/adsense/05_ADSENSE_AUDIT_PROMPT.md`:

- **HIGH RISK** — Source explicitly prohibits the behavior. Should normally be fixed.
- **MEDIUM RISK** — Not explicitly prohibited but creates a plausible approval risk.
  Improve only when the change is safe and relevant.
- **LOW RISK** — Optimization or UX suggestion. Do not make disruptive changes for
  LOW-risk items.

---

## 6. Final Report Format

After completing an audit, produce a report using the exact format defined in
Phase 12 / "Required final report format" in `docs/adsense/05_ADSENSE_AUDIT_PROMPT.md`.

The final statement must always include:

> This audit identifies and reduces risks observable from the website and the
> supplied AdSense policy reference. It does not guarantee Google AdSense approval.

---

## 7. Scope Limitation

This knowledge base is a point-in-time snapshot. It does not cover:

- Real-time Google policy changes made after the snapshot date.
- Account-level Google decisions.
- Traffic-quality signals only Google can observe.
- Facts about site ownership not present in the repository.

Acknowledge these limitations in every audit report under "Remaining unknowns."

---

## 8. Triggering Conditions

This skill MUST be activated (i.e., `docs/adsense/` MUST be read first) whenever
the task involves any of the following phrases or topics:

- AdSense approval / AdSense application / AdSense readiness
- AdSense compliance / AdSense audit / AdSense policy
- Google Publisher Policy review
- Ad placement audit / ad placement compliance
- AdSense Terms of Service review
- Fixing issues from a previous AdSense audit report
- Privacy policy accuracy in relation to AdSense
- Thin content, doorway pages, or templated content in an AdSense context
- Misleading claims, fake data, or misrepresentation in an AdSense context

---
