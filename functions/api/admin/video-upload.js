import { requireAccess } from './_auth.js';

export async function onRequestPost({ request, env }) {
  if (env.ADMIN_API_ENABLED !== 'true') return Response.json({ error: "L’API d’administration est désactivée." }, { status: 503 });
  if (!env.CF_ACCOUNT_ID || !env.CF_STREAM_API_TOKEN) return Response.json({ error: 'Cloudflare Stream n’est pas configuré.' }, { status: 503 });
  const authError = await requireAccess(request, env);
  if (authError) return authError;
  const input = await request.json();
  if (!input.type?.startsWith('video/')) return Response.json({ error: 'Un fichier vidéo est requis.' }, { status: 415 });
  if (input.size > 200 * 1024 * 1024) return Response.json({ error: 'Les vidéos doivent faire moins de 200 Mo.' }, { status: 413 });
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/stream/direct_upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.CF_STREAM_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ maxDurationSeconds: 600 }),
  });
  const result = await response.json();
  if (!response.ok || !result.success) return Response.json({ error: 'Stream n’a pas pu créer une URL de téléversement.' }, { status: 502 });
  return Response.json({ uploadURL: result.result.uploadURL, uid: result.result.uid });
}
