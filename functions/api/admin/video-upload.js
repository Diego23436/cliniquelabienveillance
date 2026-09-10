import { requireAccess } from './_auth.js';

export async function onRequestPost({ request, env }) {
  if (env.ADMIN_API_ENABLED !== 'true') return Response.json({ error: 'Admin API is disabled.' }, { status: 503 });
  if (!env.CF_ACCOUNT_ID || !env.CF_STREAM_API_TOKEN) return Response.json({ error: 'Cloudflare Stream is not configured.' }, { status: 503 });
  const authError = await requireAccess(request, env);
  if (authError) return authError;
  const input = await request.json();
  if (!input.type?.startsWith('video/')) return Response.json({ error: 'A video file is required.' }, { status: 415 });
  if (input.size > 200 * 1024 * 1024) return Response.json({ error: 'Videos must be smaller than 200 MB.' }, { status: 413 });
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/stream/direct_upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.CF_STREAM_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ maxDurationSeconds: 600 }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) return Response.json({ error: 'Stream could not create an upload URL.' }, { status: 502 });
  return Response.json({ uploadURL: result.result.uploadURL, uid: result.result.uid });
}
