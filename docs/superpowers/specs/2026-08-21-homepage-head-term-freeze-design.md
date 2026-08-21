# Homepage Head-Term Freeze Design

## Decision

The homepage targets the game entity `Anime Origins`, not the lower-demand modifier `Anime Origins Wiki`.

- `/` and `/ja` use `Anime Origins` as the exact H1.
- The homepage meta title starts with `Anime Origins` and describes the four primary intents: codes, tier list, traits, and beginner guide.
- `/guides/anime-origins-wiki` remains the dedicated page for `Anime Origins Wiki`.
- The fan-site brand, legal disclaimer, article URLs, canonical URLs, sitemap, and navigation structure remain unchanged.

## Copy

- H1: `Anime Origins`
- Meta title: `Anime Origins - Codes, Tier List, Traits & Beginner Guide`
- Meta description: `Anime Origins guides for Roblox players, including active codes, unit tier lists, trait reroll advice, beginner progression, units, updates, and Discord links.`
- Badge: `Roblox Tower Defense Guide`
- Hero description: `Find active codes, current unit rankings, trait reroll advice, beginner progression tips, and the latest Anime Origins updates.`

## SEO Freeze

After this change is deployed, do not change the homepage H1, meta title, URL, canonical, or primary navigation without evidence from GSC. Content freshness, code status, factual corrections, and supporting-page updates remain allowed.

## Verification

- A regression test locks the homepage keyword mapping and copy limits.
- The production build must render exactly one homepage H1 with `Anime Origins`.
- The built homepage title must not receive the global `Anime Origins Wiki` suffix.
- Existing article paths and sitemap URLs must remain valid.
