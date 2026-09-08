import { requireAccess } from './_auth.js';

export async function onRequestPost({ request, env }) {
  if (env.ADMIN_API_ENABLED !== 'true') return Response.json({ error: 'Admin API is disabled.' }, { status: 503 });
  if (!env.BUCKET) return Response.json({ error: 'R2 is not configured.' }, { status: 503 });
  const authError = await requireAccess(request, env);
  if (authError) return authError;

  const form = await request.formData();
  const file = form.get('file');
  if (!(file instanceof File)) return Response.json({ error: 'A file is required.' }, { status: 400 });
  if (!file.type.startsWith('image/')) return Response.json({ error: 'Only images are supported by this upload endpoint.' }, { status: 415 });
  if (file.size > 10 * 1024 * 1024) return Response.json({ error: 'Image must be smaller than 10 MB.' }, { status: 413 });

  const extension = file.name.split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin';
  const key = `uploads/${crypto.randomUUID()}.${extension}`;
  await env.BUCKET.put(key, file.stream(), { httpMetadata: { contentType: file.type, cacheControl: 'public, max-age=31536000, immutable' } });
  return Response.json({ key, url: `/media/${key}` }, { status: 201 });
}
