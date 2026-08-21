import type { APIRoute } from 'astro';
import { siteUrl } from '~/config/site';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;

export const GET: APIRoute = () =>
  new Response(sitemapXml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });

export const prerender = true;
