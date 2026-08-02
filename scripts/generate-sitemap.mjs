import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.hackhub.wiki';
const LOCALES = ['en', 'ko', 'ja', 'de'];
const routing_defaultLocale = 'en';
const CONTENT_TYPES = ['developer', 'guides', 'missions', 'network-hacking', 'password-hacking', 'stealth-strategy', 'tools', 'tools-tier-list', 'updates'];
const NAV_PAGES = [
  { path: '/', priority: 1, changefreq: 'daily' },
  { path: '/developer', priority: 0.9, changefreq: 'weekly' },
  { path: '/guides', priority: 0.9, changefreq: 'weekly' },
  { path: '/missions', priority: 0.9, changefreq: 'weekly' },
  { path: '/network-hacking', priority: 0.9, changefreq: 'weekly' },
  { path: '/password-hacking', priority: 0.9, changefreq: 'weekly' },
  { path: '/stealth-strategy', priority: 0.8, changefreq: 'weekly' },
  { path: '/tools', priority: 0.9, changefreq: 'weekly' },
  { path: '/tools-tier-list', priority: 0.8, changefreq: 'weekly' },
  { path: '/updates', priority: 0.8, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/sitemap', priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.4, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.4, changefreq: 'yearly' },
];

function localizedPath(locale, p) {
  // With localePrefix: 'always', all locales get prefix
  // Exception: English root path "/" serves English homepage (via mirror-en-to-root.mjs)
  // All URLs must end with trailing slash (trailingSlash: true)
  if (locale === 'en') {
    if (p === '/') return '/';
    return `/en${p}/`;
  }
  return p === '/' ? `/${locale}/` : `/${locale}${p}/`;
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const manifestPath = path.join(process.cwd(), 'src', 'lib', 'content-manifest.json');
let contentPaths = [];
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  contentPaths = manifest.contentPaths || [];
}

const now = new Date().toISOString().split('T')[0];
const urls = [];

for (const page of NAV_PAGES) {
  for (const locale of LOCALES) {
    const lp = localizedPath(locale, page.path);
    const allAlternates = LOCALES.map((l) => {
      const alp = localizedPath(l, page.path);
      return `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${alp}" />`;
    }).join('\n');
    // Always add x-default pointing to default locale
    const defaultLp = localizedPath(routing_defaultLocale, page.path);
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${defaultLp}" />`;
    urls.push(`  <url>
    <loc>${SITE_URL}${lp}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${allAlternates}
${xDefault}
  </url>`);
  }
}

for (const item of contentPaths) {
  const contentPath = `/${item.contentType}/${item.slug}`;
  const lp = localizedPath(item.locale, contentPath);
  const allAlternates = LOCALES.map((l) => {
    const alp = localizedPath(l, contentPath);
    return `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${alp}" />`;
  }).join('\n');
  const defaultLp = localizedPath(routing_defaultLocale, contentPath);
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${defaultLp}" />`;
  urls.push(`  <url>
    <loc>${SITE_URL}${lp}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
${allAlternates}
${xDefault}
  </url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml);
console.log(`Sitemap generated: ${urls.length} URLs`);
