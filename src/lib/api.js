const API_BASE = (import.meta.env.VITE_CONTENT_API_URL || '/api').replace(/\/$/, '');

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'same-origin',
    ...options,
    headers: {
      ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    let message = `Content API request failed (${response.status}).`;
    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {
      // Some Cloudflare errors return HTML rather than JSON.
    }
    throw new Error(message);
  }

  return response.status === 204 ? null : response.json();
}

export function getPublicEvents() {
  return request('/events');
}

export function getPublicAnnouncements() {
  return request('/announcements');
}

export function getPublicTeam() {
  return request('/team');
}

export function getPublicGallery() {
  return request('/gallery');
}

export function getPublicContacts() {
  return request('/contacts');
}

export function getAdminResource(resource) {
  return request(`/admin/${resource}`);
}

export function createAdminResource(resource, payload) {
  return request(`/admin/${resource}`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export function updateAdminResource(resource, id, payload) {
  return request(`/admin/${resource}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });
}

export function deleteAdminResource(resource, id) {
  return request(`/admin/${resource}/${id}`, { method: 'DELETE' });
}

export function createUploadUrl(file) {
  return request('/admin/uploads', {
    method: 'POST',
    body: JSON.stringify({ name: file.name, type: file.type, size: file.size }),
  });
}

export function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  return request('/admin/uploads', { method: 'POST', body: formData });
}

export async function uploadVideo(file) {
  const upload = await request('/admin/video-upload', {
    method: 'POST',
    body: JSON.stringify({ size: file.size, type: file.type }),
  });
  const body = new FormData();
  body.append('file', file);
  const response = await fetch(upload.uploadURL, { method: 'POST', body });
  if (!response.ok) throw new Error(`Video upload failed (${response.status})`);
  return { video_id: upload.uid };
}

export { API_BASE };
