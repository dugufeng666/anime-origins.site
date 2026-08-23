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
    [
      'en',
      en,
      'Anime Origins - Codes, Tier List, Traits & Beginner Guide',
      50,
      60,
      140,
      160,
    ],
    [
      'ja',
      ja,
      'Anime Origins - コード、Tier List、Traits、初心者ガイド',
      40,
      50,
      90,
      120,
    ],
  ])(
    'locks %s homepage to the Anime Origins head term',
    (_locale, messages, expectedTitle, minTitleLength, maxTitleLength, minDescLength, maxDescLength) => {
    expect(messages.home.hero.title).toBe('Anime Origins');
    expect(messages.home.meta.title).toBe(expectedTitle);
    expect(messages.home.meta.title).not.toContain('Wiki');
    expect(messages.home.meta.title.length).toBeGreaterThanOrEqual(minTitleLength);
    expect(messages.home.meta.title.length).toBeLessThanOrEqual(maxTitleLength);
    expect(messages.home.meta.description.length).toBeGreaterThanOrEqual(minDescLength);
    expect(messages.home.meta.description.length).toBeLessThanOrEqual(maxDescLength);
  });

  it('suppresses the global wiki title suffix on homepages', () => {
    expect(homePageSource).toContain('titleSuffix=""');
  });
});
