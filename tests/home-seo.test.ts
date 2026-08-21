import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import en from '../src/locales/en.json';
import ja from '../src/locales/ja.json';

const homePageSource = readFileSync(
  fileURLToPath(new URL('../src/components/home/HomePage.astro', import.meta.url)),
  'utf8',
);

describe('homepage SEO target', () => {
  it.each([
    ['en', en],
    ['ja', ja],
  ])('locks %s homepage to the Anime Origins head term', (_locale, messages) => {
    expect(messages.home.hero.title).toBe('Anime Origins');
    expect(messages.home.meta.title).toBe(
      'Anime Origins - Codes, Tier List, Traits & Beginner Guide',
    );
    expect(messages.home.meta.title).not.toContain('Wiki');
    expect(messages.home.meta.title.length).toBeGreaterThanOrEqual(50);
    expect(messages.home.meta.title.length).toBeLessThanOrEqual(60);
    expect(messages.home.meta.description.length).toBeGreaterThanOrEqual(140);
    expect(messages.home.meta.description.length).toBeLessThanOrEqual(160);
  });

  it('suppresses the global wiki title suffix on homepages', () => {
    expect(homePageSource).toContain('titleSuffix=""');
  });
});
