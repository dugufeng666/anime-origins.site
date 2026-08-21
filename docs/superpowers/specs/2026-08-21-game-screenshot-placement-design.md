# Game Screenshot Placement Design

## Goal

Use the supplied Anime Origins gameplay screenshots to make the homepage and four core guides visually useful without changing frozen SEO elements.

## Mapping

- Homepage: lobby screenshot with Challenges, Evolve, and Leaderboards visible.
- Beginner Guide: level-one Stat Reroll NPC screenshot.
- Traits: Trait Reroll interface as the cover, plus the reroll NPC context screenshot in the gallery.
- Codes: Codes redemption interface.
- Tier List: Choto unit result as the cover; Naroto (Kid), Itsumaru, and Semanu result screens in the gallery.
- The duplicate promotional image is not used.

## Rendering

- Store optimized WebP files in `src/assets/anime-origins/` so Astro can emit responsive image variants.
- Add a real homepage hero image alongside the existing H1 and CTA content.
- Render each article cover visibly under the article header; the same asset also supplies OG/Twitter metadata and list-card thumbnails.
- Use the existing gallery component for supporting screenshots and provide descriptive alt text and captions.

## SEO Freeze

Do not change homepage H1, title, URL, canonical, sitemap paths, navigation, or article slugs. Screenshots support the existing content; they do not replace crawlable answers.

## Verification

- Tests lock the image mapping and visible article-cover rendering.
- Build output contains responsive images, meaningful alt text, and unchanged homepage SEO fields.
- Desktop and mobile screenshots confirm legible cropping and no overlap.
