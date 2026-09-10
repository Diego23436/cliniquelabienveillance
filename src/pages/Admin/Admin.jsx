import React, { useEffect, useMemo, useState } from 'react';
import { createAdminResource, deleteAdminResource, getAdminResource, updateAdminResource, uploadFile, uploadVideo } from '../../lib/api';
import './Admin.css';

const RESOURCES = {
  events: {
    label: 'Events',
    appears: 'Homepage announcements carousel and the events content feed.',
    fields: [
      ['title_fr', 'Title (FR)', 'text', true], ['title_en', 'Title (EN)', 'text', true],
      ['description_fr', 'Description (FR)', 'textarea', true], ['description_en', 'Description (EN)', 'textarea', true],
      ['event_date', 'Date', 'date', false], ['image_url', 'Image URL', 'url', false], ['published', 'Published', 'checkbox', false],
    ],
  },
  announcements: {
    label: 'Announcements',
    appears: 'Homepage announcements carousel and future campaign areas.',
    fields: [
      ['title_fr', 'Title (FR)', 'text', true], ['title_en', 'Title (EN)', 'text', true],
      ['description_fr', 'Description (FR)', 'textarea', true], ['description_en', 'Description (EN)', 'textarea', true],
      ['image_url', 'Image URL', 'url', false], ['published', 'Published', 'checkbox', false],
    ],
  },
  team: {
    label: 'Team members',
    appears: 'About Us > Our Team.',
    fields: [
      ['name', 'Name', 'text', true], ['role_fr', 'Role (FR)', 'text', true], ['role_en', 'Role (EN)', 'text', true],
      ['bio_fr', 'Bio (FR)', 'textarea', false], ['bio_en', 'Bio (EN)', 'textarea', false],
      ['department', 'Department', 'text', false], ['phone', 'Phone', 'tel', false], ['photo_url', 'Photo URL', 'url', false], ['published', 'Published', 'checkbox', false],
    ],
  },
  gallery: {
    label: 'Gallery',
    appears: 'Testimonials & Gallery > Photo / Video Gallery.',
    fields: [
      ['title_fr', 'Title (FR)', 'text', true], ['title_en', 'Title (EN)', 'text', true], ['type', 'Type (image/video)', 'text', true], ['category', 'Website category', 'text', true],
      ['image_url', 'Image URL', 'url', false], ['video_id', 'Stream video ID', 'text', false], ['poster_url', 'Poster URL', 'url', false], ['published', 'Published', 'checkbox', false],
    ],
  },
  contacts: {
    label: 'Contacts',
    appears: 'Footer and contact information areas.',
    fields: [
      ['label_fr', 'Label (FR)', 'text', true], ['label_en', 'Label (EN)', 'text', true], ['value', 'Display value', 'text', true],
      ['href', 'Link (tel:, mailto:, or https:)', 'text', true], ['placement', 'Website placement', 'text', true], ['published', 'Published', 'checkbox', false],
    ],
  },
};

function emptyRecord(resource) {
  return Object.fromEntries(RESOURCES[resource].fields.map(([name, , type]) => [name, type === 'checkbox' ? true : '']));
}

export default function Admin() {
  const [resource, setResource] = useState('events');
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState(() => emptyRecord('events'));
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [access, setAccess] = useState('checking');

  const config = useMemo(() => RESOURCES[resource], [resource]);

  async function loadRecords() {
    setLoading(true);
    try {
      const data = await getAdminResource(resource);
      setRecords(data.items ?? []);
      setStatus('');
    } catch {
    setStatus('The admin API is not connected yet. Configure Pages Functions and Access, then reload.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let mounted = true;
    fetch('/api/admin/session', { credentials: 'include' })
      .then((response) => {
        if (!response.ok) throw new Error('Admin access is not available.');
        return response.json();
      })
      .then(() => mounted && setAccess('allowed'))
      .catch(() => mounted && setAccess('denied'));
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (access !== 'allowed') return undefined;
    setEditingId(null);
    setForm(emptyRecord(resource));
    loadRecords();
    return undefined;
  }, [access, resource]);

  function updateField(event) {
    const { name, type, value, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleUpload(event, field) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 200 * 1024 * 1024) { setStatus('Files must be smaller than 200 MB.'); return; }
    setStatus('Uploading…');
    try {
      const result = resource !== 'team' && file.type.startsWith('video/')
        ? await uploadVideo(file)
        : await uploadFile(file);
      setForm((current) => ({ ...current, ...(result.url ? { [field]: result.url } : result) }));
      setStatus('Upload complete. Save the record to publish it.');
    } catch {
      setStatus('Upload failed. Check the R2 binding and try again.');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('Saving…');
    try {
      if (editingId) await updateAdminResource(resource, editingId, form);
      else await createAdminResource(resource, form);
      setForm(emptyRecord(resource));
      setEditingId(null);
      await loadRecords();
      setStatus('Saved successfully.');
    } catch {
      setStatus('Save failed. Check the API connection and required fields.');
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this item?')) return;
    try { await deleteAdminResource(resource, id); await loadRecords(); setStatus('Deleted.'); }
    catch { setStatus('Delete failed.'); }
  }

  if (access === 'checking') {
    return <main className="admin-page"><div className="admin-locked"><h1>Checking administrator access…</h1><p>Contacting the protected admin service.</p></div></main>;
  }

  if (access !== 'allowed') {
    return (
      <main className="admin-page">
        <div className="admin-locked">
          <span className="admin-lock-icon" aria-hidden="true">Access</span>
          <span className="admin-eyebrow">Clinique La Bienveillance</span>
          <h1>Administrator area locked</h1>
          <p>This area is unavailable until the Cloudflare Access login and protected admin API are configured.</p>
          <a href="/" className="admin-public-link">Return to public site</a>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <header className="admin-header">
          <div><span className="admin-eyebrow">Clinique La Bienveillance</span><h1>Content manager</h1></div>
          <a href="/" className="admin-public-link">View public site</a>
        </header>
        <nav className="admin-tabs" aria-label="Content sections">
          {Object.entries(RESOURCES).map(([key, value]) => (
            <button type="button" key={key} className={key === resource ? 'is-active' : ''} onClick={() => setResource(key)}>{value.label}</button>
          ))}
        </nav>
        <div className="admin-grid">
          <section className="admin-panel">
            <div className="admin-panel-heading"><div><h2>{editingId ? `Edit ${config.label.slice(0, -1)}` : `Add ${config.label.slice(0, -1)}`}</h2><p>{config.appears}</p><p>Published content appears on the public site after saving.</p></div></div>
            <form onSubmit={handleSubmit} className="admin-form">
              {config.fields.map(([name, label, type, required]) => (
                <label className={type === 'textarea' ? 'admin-field admin-field-wide' : 'admin-field'} key={name}>
                  {type === 'checkbox' ? <><input name={name} type="checkbox" checked={form[name]} onChange={updateField} /> <span>{label}</span></> : <><span>{label}</span>{type === 'textarea' ? <textarea name={name} value={form[name]} onChange={updateField} required={required} rows="4" /> : <input name={name} type={type} value={form[name]} onChange={updateField} required={required} />}</>}
                </label>
              ))}
              {resource !== 'contacts' && <label className="admin-field admin-field-wide"><span>Upload media (optional)</span><input type="file" accept={resource === 'team' ? 'image/*' : 'image/*,video/*'} onChange={(event) => handleUpload(event, resource === 'team' ? 'photo_url' : 'image_url')} /></label>}
              <div className="admin-form-actions"><button type="submit" className="admin-save">{editingId ? 'Update' : 'Save'}</button>{editingId && <button type="button" className="admin-cancel" onClick={() => { setEditingId(null); setForm(emptyRecord(resource)); }}>Cancel</button>}</div>
              {status && <p className="admin-status" role="status">{status}</p>}
            </form>
          </section>
          <section className="admin-panel"><div className="admin-panel-heading"><div><h2>Existing {config.label.toLowerCase()}</h2><p>{config.appears}</p></div><p>{loading ? 'Loading…' : `${records.length} item${records.length === 1 ? '' : 's'}`}</p></div><div className="admin-records">{records.map((record) => <article className="admin-record" key={record.id}><div><strong>{record.title_fr || record.name || record.label_fr || 'Untitled'}</strong><small>{record.published ? 'Published' : 'Draft'}{record.placement ? ` · ${record.placement}` : ''}</small></div><div className="admin-record-actions"><button type="button" onClick={() => { setEditingId(record.id); setForm(record); }}>Edit</button><button type="button" onClick={() => handleDelete(record.id)}>Delete</button></div></article>)}{!loading && !records.length && <p className="admin-empty">No records yet.</p>}</div></section>
        </div>
      </div>
    </main>
  );
}
