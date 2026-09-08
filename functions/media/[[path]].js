export async function onRequestGet({ params, env }) {
  if (!env.BUCKET) return new Response('Media storage is not configured.', { status: 503 });
  const key = Array.isArray(params.path) ? params.path.join('/') : params.path;
  const object = await env.BUCKET.get(key);
  if (!object) return new Response('Not found', { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  return new Response(object.body, { headers });
}
