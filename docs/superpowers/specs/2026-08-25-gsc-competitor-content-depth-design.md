# GSC + Competitor Content Depth Design

## Goal

Use the 2026-08-25 GSC snapshot and current competitor page structures to deepen the
pages already receiving Anime Origins search exposure, without changing the homepage
head term, existing article URLs, canonical rules, or the site's fan-made identity.

## Evidence

The GSC export covers the 24-hour window from 2026-08-24 18:00 through 2026-08-25
17:00 (UTC+8). The strongest visible query signals are:

- `anime origins`: 4 impressions, 1 click, position 6.75.
- `anime origins tier list`: 6 impressions, position 11.5.
- `anime origins tier list wiki`: 2 impressions, position 5.
- `anime origins wiki`: 2 impressions, position 6.
- `anime origins meta`: 1 impression, position 3.
- `anime origins codigos`: 1 impression, position 6.

The page export shows impressions on the English homepage, French and Portuguese
homepages, and `/units`. Query and page exports are separate GSC dimensions, so they
must not be joined as if each query maps to one page.

Competitor patterns worth borrowing:

- `animeoriginsroblox.wiki`: a clear release-meta hub, active-code status, decision
  routing, unit fields, and specialized guides.
- `anime-origins-wiki.wiki`: evidence-bounded copy, visible update checks, and a
  player-decision information architecture.
- `animeorigins.org/en/`: progression-stage routing, source-status labeling, and
  concise quick answers linked to deeper pages.

We will borrow the information architecture and answer density, not unverified
numbers, official-looking labels, or competitor wording.

## Scope

### 1. English Tier List page

Keep the existing URL `/units/anime-origins-tier-list` and change only the content
surface:

- Use `Anime Origins Tier List Wiki` as the page title/H1 to match the observed
  `tier list wiki` query while preserving the inner-page Wiki intent.
- Add a concise quick-answer section before the ranking table.
- Expand the table with stable, explainable fields: tier, units, role/use case,
  early-game or endgame fit, and trait fit where the current content supports it.
- Add a transparent ranking method section covering damage, coverage, economy,
  flexibility, and mode fit; mark the list as a launch snapshot.
- Add starter-team and “what to do after a pull” guidance using only the current
  roster claims.
- Add stronger links to Units, Traits, Beginner Guide, and Wiki pages.

### 2. English Codes page

Keep `/codes/anime-origins-codes` and its current code data model:

- Preserve the current five code entries and their source labels; do not copy
  competitor-only codes without independent evidence.
- Add a visible status/freshness explanation, redemption troubleshooting, and a
  short “where new codes appear” section.
- Cover both singular `code` and plural `codes` intent naturally.
- Keep active codes above the explanatory content and retain the expired-code
  structure for future updates.

### 3. Portuguese Codes page

Create a real localized article at `/pt/codes/anime-origins-codes` because Brazil
produced 14 impressions in the same GSC window and the visible query
`anime origins codigos` ranked at position 6.

- Translate the current code table and redemption flow into Portuguese.
- Use the same source/status boundaries as the English page.
- Change the Portuguese homepage Codes card to the localized article.
- Do not create Portuguese copies of every English article from this signal alone.

### 4. Wiki hub support copy

Keep `/guides/anime-origins-wiki` as the Wiki intent page and sharpen its routing:

- Add a compact “choose your next decision” map for codes, tier list, units,
  traits, beginner progression, and Roblox access.
- Keep `anime origins wiki` and `anime origin wiki` natural in the opening copy.
- Link the new Portuguese Codes page only from Portuguese surfaces; English URLs
  remain unchanged.

## Non-goals

- Do not change the homepage H1, meta title, canonical, URL, or primary target
  `Anime Origins`.
- Do not add Shop, Modes, Gem Farming, Best Teams, or calculator pages in this
  change; those remain later candidates until their own GSC or source evidence is
  stronger.
- Do not copy competitor claims about active players, summon rates, pity, rewards,
  “verified” status, or official affiliation unless independently confirmed.
- Do not bulk-generate localized article fallbacks or near-duplicate pages.

## Content truth policy

Every dynamic or competitive statement must be one of:

1. Current code/source-backed fact.
2. Current launch snapshot / editorial ranking, clearly labeled.
3. Community-reported or preview information, clearly labeled.
4. Unknown / not announced.

The pages must show freshness through `lastModified` and source wording, not through
invented precision.

## Verification

Before implementation is considered complete:

- Focused content tests cover the new title and Portuguese article presence.
- `pnpm test`, `pnpm typecheck`, `pnpm build`, `pnpm check-content`, and
  `pnpm check-links` pass.
- The built URLs exist for English and Portuguese pages.
- The homepage SEO freeze remains intact.
- The final page copy is checked for stale editor-facing phrases such as “This page
  should...” and “Notes for launch”.

