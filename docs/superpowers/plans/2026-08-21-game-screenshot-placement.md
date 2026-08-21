# Game Screenshot Placement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Place the supplied gameplay screenshots on the homepage and the four core Anime Origins guides.

**Architecture:** Convert the source PNG screenshots to optimized WebP assets, reference them through Astro's content image loader, and reuse existing responsive cover/gallery components. Add one small article-cover rendering path because article images currently appear only in metadata and list cards.

**Tech Stack:** Astro 5, MDX content collections, Astro Image, Sharp, Vitest

---

### Task 1: Lock the screenshot mapping

**Files:**
- Create: `tests/content-images.test.ts`

- [ ] Assert the four core pages have covers, the tier page has at least three gallery items, and article covers render visibly.
- [ ] Run the focused test and confirm it fails before implementation.

### Task 2: Optimize and place assets

**Files:**
- Create: `src/assets/anime-origins/*.webp`

- [ ] Convert selected source PNGs to WebP at a maximum width of 1600 px.
- [ ] Verify dimensions, file sizes, and image readability.

### Task 3: Wire the homepage and guides

**Files:**
- Modify: `src/components/home/HomePage.astro`
- Modify: `src/components/article/ArticlePage.astro`
- Modify: four core MDX files

- [ ] Add the responsive homepage image without changing SEO copy.
- [ ] Render article covers below the article header.
- [ ] Set cover and gallery frontmatter with accurate captions and alt text.

### Task 4: Verify and record

- [ ] Run tests, typecheck, content lint, build, link check, and sitemap check.
- [ ] Inspect desktop and mobile screenshots for cropping, loading, and overlap.
- [ ] Write the image mapping and asset-source note to Obsidian.
- [ ] Commit locally; wait for user confirmation before pushing.
