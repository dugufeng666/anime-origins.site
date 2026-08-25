import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import pt from '../src/locales/pt.json';

const tierListPath = fileURLToPath(
  new URL('../src/content/wiki/en/units/anime-origins-tier-list.mdx', import.meta.url),
);
const wikiHubPath = fileURLToPath(
  new URL('../src/content/wiki/en/guides/anime-origins-wiki.mdx', import.meta.url),
);
const ptCodesPath = fileURLToPath(
  new URL('../src/content/wiki/pt/codes/anime-origins-codes.mdx', import.meta.url),
);

describe('Anime Origins content depth', () => {
  it('turns the tier list into a wiki-style answer page', () => {
    const tierList = readFileSync(tierListPath, 'utf8');

    expect(tierList).toContain("title: 'Anime Origins Tier List Wiki'");
    expect(tierList).toContain('## Quick Answer');
    expect(tierList).toContain('## How this ranking is built');
    expect(tierList).toContain('## Starter teams');
  });

  it('adds a decision map to the wiki hub', () => {
    const wikiHub = readFileSync(wikiHubPath, 'utf8');

    expect(wikiHub).toContain('## Choose your next move');
    expect(wikiHub).toContain('codes');
    expect(wikiHub).toContain('tier list');
    expect(wikiHub).toContain('traits');
  });

  it('points the Portuguese homepage codes card at the localized article', () => {
    expect(pt.home.start.cards[1].href).toBe('/codes/anime-origins-codes');
  });

  it('adds a real Portuguese codes article', () => {
    const ptCodes = readFileSync(ptCodesPath, 'utf8');

    expect(ptCodes).toContain("title: 'Anime Origins Códigos'");
    expect(ptCodes).toContain('## O que esta página faz');
    expect(ptCodes).toContain('## Como resgatar');
    expect(ptCodes).toContain('## Onde encontrar novos códigos');
  });
});
