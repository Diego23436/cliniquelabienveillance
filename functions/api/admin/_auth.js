let certsPromise;

function decodePart(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  return JSON.parse(atob(normalized));
}

async function getKeys(issuer) {
  certsPromise ??= fetch(`${issuer}/cdn-cgi/access/certs`).then((response) => response.json());
  return certsPromise;
}

export async function requireAccess(request, env) {
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  const teamDomain = (env.CF_ACCESS_TEAM_DOMAIN || '').replace(/\/$/, '');
  const audience = env.CF_ACCESS_AUDIENCE;
  if (!token || !teamDomain || !audience) return new Response('Admin authentication is not configured.', { status: 503 });

  try {
    const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');
    const header = decodePart(encodedHeader);
    const payload = decodePart(encodedPayload);
    const issuer = teamDomain.startsWith('http') ? teamDomain : `https://${teamDomain}`;
    const keys = await getKeys(issuer);
    const jwk = keys.keys?.find((key) => key.kid === header.kid);
    if (!jwk || payload.iss !== issuer || !payload.aud?.includes(audience) || payload.exp <= Math.floor(Date.now() / 1000)) {
      return new Response('Invalid admin session.', { status: 401 });
    }

    const cryptoKey = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify(
      { name: 'RSASSA-PKCS1-v1_5' },
      cryptoKey,
      Uint8Array.from(atob(encodedSignature.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(encodedSignature.length / 4) * 4, '=')), (char) => char.charCodeAt(0)),
      new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`)
    );
    if (!valid) return new Response('Invalid admin session.', { status: 401 });
    if (env.CF_ACCESS_ALLOWED_EMAIL && payload.email?.toLowerCase() !== env.CF_ACCESS_ALLOWED_EMAIL.toLowerCase()) return new Response('Admin access denied.', { status: 403 });
    return null;
  } catch {
    return new Response('Invalid admin session.', { status: 401 });
  }
}
