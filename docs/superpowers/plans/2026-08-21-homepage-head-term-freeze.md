# Homepage Head-Term Freeze Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make `Anime Origins` the exact homepage target while preserving the existing fan-wiki brand, URLs, and site structure.

**Architecture:** Keep the change in locale content data and use the layout's existing title-suffix override on the homepage. Add one regression test that locks the homepage keyword mapping and validates copy lengths.

**Tech Stack:** Astro 5, locale JSON, Vitest, Cloudflare Pages

---

### Task 1: Lock the homepage keyword mapping

**Files:**
- Create: `tests/home-seo.test.ts`

- [ ] Add tests requiring an exact `Anime Origins` H1, a non-Wiki homepage title, valid title/description lengths, and homepage title-suffix suppression.
- [ ] Run `pnpm test tests/home-seo.test.ts` and confirm it fails against the old `Anime Origins Wiki` homepage.

### Task 2: Apply the approved homepage copy

**Files:**
- Modify: `src/locales/en.json`
- Modify: `src/locales/ja.json`
- Modify: `src/components/layout/LocaleLayout.astro`
- Modify: `src/components/home/HomePage.astro`

- [ ] Replace the homepage H1, title, description, badge, and hero description in both locale files.
- [ ] Forward the existing `titleSuffix` option through `LocaleLayout` and suppress it only on homepages.
- [ ] Run the focused test and confirm it passes.

### Task 3: Verify and freeze

**Files:**
- Modify: Obsidian Anime Origins SERP record

- [ ] Run `pnpm test`, `pnpm typecheck`, `pnpm build`, `pnpm check-content`, and `pnpm check-links`.
- [ ] Inspect built `/` and `/ja` HTML for one exact H1, the expected title, canonical, GA tag, and unchanged wiki inner-page URL.
- [ ] Record the keyword mapping and freeze rule in Obsidian.
- [ ] Review the final diff, then commit and push to `main`.
