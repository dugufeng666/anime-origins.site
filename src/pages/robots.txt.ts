import type { APIRoute } from 'astro';
import { siteUrl } from '~/config/site';
import { landingLinkEnabled } from '~/config/project';

const disallowLanding = landingLinkEnabled
  ? ''
  : `
Disallow: /landing
Disallow: /zh/landing
`.trim();

const robotsTxt = `
User-agent: *
Allow: /
${disallowLanding ? `\n${disallowLanding}` : ''}

Sitemap: ${siteUrl}/sitemap.xml
Sitemap: ${siteUrl}/sitemap-index.xml
`.trim();

export const GET: APIRoute = () =>
  new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
