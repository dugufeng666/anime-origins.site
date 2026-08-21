import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const readProjectFile = (path: string) =>
  readFileSync(fileURLToPath(new URL(`../${path}`, import.meta.url)), 'utf8');

describe('Anime Origins gameplay images', () => {
  it.each([
    'src/content/wiki/en/codes/anime-origins-codes.mdx',
    'src/content/wiki/en/units/anime-origins-tier-list.mdx',
    'src/content/wiki/en/guides/anime-origins-traits.mdx',
    'src/content/wiki/en/guides/anime-origins-beginner-guide.mdx',
  ])('%s has an optimized gameplay cover', (path) => {
    const source = readProjectFile(path);
    expect(source).toMatch(/^image:\s*['"]?.*\.webp['"]?$/m);
  });

  it('gives the tier list at least three supporting unit screenshots', () => {
    const source = readProjectFile(
      'src/content/wiki/en/units/anime-origins-tier-list.mdx',
    );
    const galleryImages = source.match(/^\s+- image:\s*['"]?.*\.webp['"]?$/gm) ?? [];
    expect(galleryImages.length).toBeGreaterThanOrEqual(3);
  });

  it('renders article covers visibly instead of metadata-only', () => {
    const source = readProjectFile('src/components/article/ArticlePage.astro');
    expect(source).toContain("import ArticleCover from '~/components/article/ArticleCover.astro'");
    expect(source).toContain('<ArticleCover');
  });

  it('renders the supplied lobby screenshot in the homepage hero', () => {
    const source = readProjectFile('src/components/home/HomePage.astro');
    expect(source).toContain('anime-origins-lobby.webp');
    expect(source).toContain('alt="Anime Origins lobby with Challenges, Evolve, and Leaderboards areas"');
  });
});
