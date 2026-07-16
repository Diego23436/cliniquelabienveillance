import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { loadEnv } from 'vite';

const ROUTES = [
  '/',
  '/a-propos/clinique',
  '/a-propos/equipe',
  '/services',
  '/services/pathologies',
  '/services/prevention',
  '/ressources/blog',
  '/ressources/faq',
  '/temoignages',
  '/galerie',
  '/contact/rendez-vous',
  '/contact/coordonnees',
];

const env = loadEnv('', process.cwd(), '');
const baseUrl = (env.VITE_SITE_URL || env.SITE_URL || process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://example.com').replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.map((route) => {
  const loc = `${baseUrl}${route}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urls}\n` +
  `</urlset>\n`;

const outDir = resolve(process.cwd(), 'public');
const outPath = resolve(outDir, 'sitemap.xml');

await mkdir(outDir, { recursive: true });
await writeFile(outPath, xml, 'utf8');

console.log(`Wrote sitemap to ${outPath}`);
console.log(`Base URL used: ${baseUrl}`);
