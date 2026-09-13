import { requireAccess } from './_auth.js';

export async function onRequestPost({ request, env }) {
  if (env.ADMIN_API_ENABLED !== 'true') return Response.json({ error: "L’API d’administration est désactivée." }, { status: 503 });
  if (!env.BUCKET) return Response.json({ error: 'R2 n’est pas configuré.' }, { status: 503 });
  const authError = await requireAccess(request, env);
  if (authError) return authError;

  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) return Response.json({ error: 'Un fichier est requis.' }, { status: 400 });
  if (!file.type.startsWith('image/')) return Response.json({ error: 'Seules les images sont acceptées par ce point de téléversement.' }, { status: 415 });
  if (file.size > 10 * 1024 * 1024) return Response.json({ error: 'L’image doit faire moins de 10 Mo.' }, { status: 413 });

  const extension = file.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin';
  const key = `uploads/${crypto.randomUUID()}.${extension}`;
  await env.BUCKET.put(key, file.stream(), { httpMetadata: { contentType: file.type, cacheControl: 'public, max-age=31536000, immutable' } });
  return Response.json({ key, url: `/media/${key}` }, { status: 201 });
}
