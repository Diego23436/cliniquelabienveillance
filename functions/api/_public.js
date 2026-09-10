export async function publishedRows(env, table) {
  if (!env.DB) return [];
  const { results } = await env.DB.prepare(`SELECT * FROM ${table} WHERE published = 1 ORDER BY sort_order ASC, created_at DESC`).all();
  return results ?? [];
}
