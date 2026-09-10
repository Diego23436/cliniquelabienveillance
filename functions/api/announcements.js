import { publishedRows } from './_public.js';

export async function onRequestGet({ env }) {
  return Response.json({ items: await publishedRows(env, 'announcements'), configured: Boolean(env.DB) }, { headers: { 'Cache-Control': 'public, max-age=60' } });
}
