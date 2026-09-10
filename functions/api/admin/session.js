import { requireAccess } from './_auth.js';

export async function onRequestGet({ request, env }) {
  if (env.ADMIN_API_ENABLED !== 'true') return Response.json({ error: 'Admin API is disabled.' }, { status: 503 });
  const authError = await requireAccess(request, env);
  if (authError) return authError;
  return Response.json({ authenticated: true });
}
