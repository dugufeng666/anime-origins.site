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
const beginnerGuidePath = fileURLToPath(
  new URL('../src/content/wiki/en/guides/anime-origins-beginner-guide.mdx', import.meta.url),
);
const codesPath = fileURLToPath(
  new URL('../src/content/wiki/en/codes/anime-origins-codes.mdx', import.meta.url),
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
    expect(tierList).toContain('## Choose by mode');
    expect(tierList).toContain('## Role slots');
    expect(tierList).toContain('## Starter teams');
    expect(tierList).toContain('## Starter team templates');
  });

  it('adds a decision map to the wiki hub', () => {
    const wikiHub = readFileSync(wikiHubPath, 'utf8');

    expect(wikiHub).toContain('## Choose your next move');
    expect(wikiHub).toContain('codes');
    expect(wikiHub).toContain('tier list');
    expect(wikiHub).toContain('traits');
  });

  it('turns the beginner guide into an actionable progression page', () => {
    const beginnerGuide = readFileSync(beginnerGuidePath, 'utf8');

    expect(beginnerGuide).toContain('## 30-minute opening plan');
    expect(beginnerGuide).toContain('## What to spend first');
    expect(beginnerGuide).toContain('## Shop value');
    expect(beginnerGuide).toContain('## Common mistakes');
  });

  it('adds freshness and source boundaries to both codes pages', () => {
    const codes = readFileSync(codesPath, 'utf8');
    const ptCodes = readFileSync(ptCodesPath, 'utf8');

    expect(codes).toContain('## Status and freshness');
    expect(codes).toContain('Last checked: 2026-08-26');
    expect(codes).toContain('## Source boundary');
    expect(codes).toContain('listed as active');
    expect(ptCodes).toContain('## Status e atualização');
    expect(ptCodes).toContain('Última verificação: 2026-08-26');
    expect(ptCodes).toContain('## Limite da fonte');
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
