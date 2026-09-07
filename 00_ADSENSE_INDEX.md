# Google AdSense Knowledge Base

## Purpose

This repository folder is a policy/reference package for auditing a website for Google AdSense readiness.

The intended workflow is:

1. Read this index.
2. Read all guideline files in this folder before auditing or changing the website.
3. Compare the website against the source-derived requirements.
4. Fix only issues that create a meaningful compliance or approval risk.
5. Re-audit the complete site after changes.

## Source hierarchy

This knowledge base is based on the Google AdSense material supplied by the user in the source files/text for this project.

### Files

- `01_SITE_READINESS_AND_ELIGIBILITY.md`
  - Site readiness
  - Unique/original content
  - Navigation and UX
  - Eligibility
  - Site ownership / HTML access
  - Age requirement
  - Responsibility to keep policies current

- `02_GOOGLE_PUBLISHER_POLICIES.md`
  - Content policies
  - Behavioral policies
  - Privacy-related policies
  - Requirements and other standards

- `03_AD_PLACEMENT_POLICIES.md`
  - Accidental clicks
  - Misleading ad labels
  - Ad placement
  - Pop-ups / pop-unders
  - Refreshing
  - Content Google cannot evaluate
  - Other placement restrictions

- `04_ADSENSE_TERMS_OF_SERVICE.md`
  - Account and property requirements
  - Policy compliance
  - Invalid activity
  - Privacy policy obligations
  - Ownership and control
  - Suspension / termination
  - Other contractual terms

- `05_ADSENSE_AUDIT_PROMPT.md`
  - Master instruction for an AI coding/review agent.

## Important interpretation rules

### Rule 1 — Policy vs recommendation

The agent must distinguish between:

- **Explicit requirement / prohibition**: directly supported by the supplied Google source material.
- **Approval-risk observation**: an inference about something that may reduce approval readiness.
- **General improvement**: useful but not clearly required by the supplied material.

Do not present an inference as if Google explicitly required it.

### Rule 2 — Do not guarantee approval

A site audit can reduce identifiable policy and readiness risks. It cannot guarantee that Google will approve an AdSense application.

### Rule 3 — Preserve the existing site

The website is already launched and functional. Do not redesign, rewrite, remove features, or change unrelated behavior merely to make the code look different.

### Rule 4 — Verify before changing

For every proposed change, identify:

- What was found
- Which source/rule supports the finding
- Why it matters
- What will be changed
- Whether the change is required, risk-reducing, or optional

### Rule 5 — Re-audit after changes

After edits, inspect the affected area again and then run a full-site final audit.

## Source URLs included in the supplied material

- https://support.google.com/adsense/
- https://support.google.com/publisherpolicies/
- https://support.google.com/adsense/answer/7299563
- https://support.google.com/adsense/answer/9724
- https://support.google.com/adsense/answer/48182
- https://support.google.com/adsense/answer/1346295
- https://support.google.com/adsense/answer/91205
- https://adsense.google.com/adsense/terms

> **Snapshot note:** The material in this folder represents the source content supplied for this project. Google may update policies; the agent must not assume this snapshot is permanently current.
