export async function onRequestGet({ env }) {
  if (!env.DB) return Response.json({ items: [], configured: false });

  const { results } = await env.DB.prepare(
    'SELECT * FROM events WHERE published = 1 ORDER BY COALESCE(event_date, created_at) DESC, sort_order ASC'
  ).all();
  return Response.json({ items: results ?? [], configured: true }, { headers: { 'Cache-Control': 'public, max-age=60' } });
}
