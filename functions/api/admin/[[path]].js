import { requireAccess } from './_auth.js';

const RESOURCES = {
  events: ['events', ['title_fr', 'title_en', 'description_fr', 'description_en', 'event_date', 'image_url', 'video_id', 'published', 'sort_order']],
  announcements: ['announcements', ['title_fr', 'title_en', 'description_fr', 'description_en', 'image_url', 'video_id', 'published', 'sort_order']],
  team: ['team', ['name', 'role_fr', 'role_en', 'bio_fr', 'bio_en', 'department', 'phone', 'photo_url', 'published', 'sort_order']],
  gallery: ['gallery', ['title_fr', 'title_en', 'type', 'image_url', 'video_id', 'poster_url', 'published', 'sort_order']],
  contacts: ['contacts', ['label_fr', 'label_en', 'value', 'href', 'published', 'sort_order']],
};

function jsonError(message, status = 400) { return Response.json({ error: message }, { status }); }

function requireConfiguredAdmin(env) {
  if (!env.DB) return jsonError('D1 is not configured for this Pages environment.', 503);
  if (env.ADMIN_API_ENABLED !== 'true') return jsonError('Admin API is disabled until Cloudflare Access is configured.', 503);
  return null;
}

export async function onRequest(context) {
  const denied = requireConfiguredAdmin(context.env);
  if (denied) return denied;
  const authError = await requireAccess(context.request, context.env);
  if (authError) return authError;

  const path = (context.params.path ?? '').split('/').filter(Boolean);
  const resourceName = path[0];
  const id = path[1];
  const resource = RESOURCES[resourceName];
  if (!resource) return jsonError('Unknown content resource.', 404);

  const [table, fields] = resource;
  const db = context.env.DB;

  if (context.request.method === 'GET' && !id) {
    const { results } = await db.prepare(`SELECT * FROM ${table} ORDER BY sort_order ASC, created_at DESC`).all();
    return Response.json({ items: results ?? [] });
  }

  if (context.request.method === 'POST' && !id) {
    const input = await context.request.json();
    const now = new Date().toISOString();
    const record = Object.fromEntries(fields.map((field) => [field, input[field] ?? (field === 'published' ? true : field === 'sort_order' ? 0 : '')]));
    const recordId = crypto.randomUUID();
    const names = ['id', ...fields, 'created_at', 'updated_at'];
    const values = [recordId, ...fields.map((field) => record[field] === true ? 1 : record[field] === false ? 0 : record[field]), now, now];
    await db.prepare(`INSERT INTO ${table} (${names.join(', ')}) VALUES (${names.map(() => '?').join(', ')})`).bind(...values).run();
    return Response.json({ id: recordId }, { status: 201 });
  }

  if (!id) return jsonError('An item id is required.', 400);

  if (context.request.method === 'PUT') {
    const input = await context.request.json();
    const now = new Date().toISOString();
    const updates = fields.map((field) => `${field} = ?`).join(', ');
    const values = [...fields.map((field) => input[field] === true ? 1 : input[field] === false ? 0 : input[field] ?? ''), now, id];
    await db.prepare(`UPDATE ${table} SET ${updates}, updated_at = ? WHERE id = ?`).bind(...values).run();
    return Response.json({ ok: true });
  }

  if (context.request.method === 'DELETE') {
    await db.prepare(`DELETE FROM ${table} WHERE id = ?`).bind(id).run();
    return new Response(null, { status: 204 });
  }

  return jsonError('Method not allowed.', 405);
}
