import { requireAccess } from './_auth.js';

export async function onRequestPost({ request, env }) {
  if (env.ADMIN_API_ENABLED !== 'true') return Response.json({ error: 'Admin API is disabled.' }, { status: 503 });
  if (!env.STREAM) return Response.json({ error: 'Cloudflare Stream is not configured.' }, { status: 503 });
  const authError = await requireAccess(request, env);
  if (authError) return authError;
  const input = await request.json();
  if (!input.type?.startsWith('video/')) return Response.json({ error: 'A video file is required.' }, { status: 415 });
  if (input.size > 200 * 1024 * 1024) return Response.json({ error: 'Videos must be smaller than 200 MB.' }, { status: 413 });
  const upload = await env.STREAM.createDirectUpload({ maxDurationSeconds: 3600 });
  return Response.json({ uploadURL: upload.uploadURL, uid: upload.uid });
}
