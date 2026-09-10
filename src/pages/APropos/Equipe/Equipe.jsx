import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content, departments } from './equipe.content';
import { getPublicTeam } from '../../../lib/api';
import './Equipe.css';

const HERO_IMAGE = '/team-hero.png';

function MemberPhoto({ member }) {
  const [failed, setFailed] = useState(false);
  const initials = member.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="member-photo-wrap">
      {failed ? (
        <div className="member-photo-placeholder" aria-hidden="true">
          <span>{initials}</span>
          <small>Photo</small>
        </div>
      ) : null}
      {member.photo && !failed ? (
        <img
          className="member-photo"
          src={member.photo}
          alt={member.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : null}
    </div>
  );
}

export default function Equipe() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeDept, setActiveDept] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [remoteMembers, setRemoteMembers] = useState(null);

  React.useEffect(() => {
    let mounted = true;
    getPublicTeam()
      .then((data) => {
        if (!mounted || !data?.configured || !Array.isArray(data.items)) return;
        setRemoteMembers(data.items);
      })
      .catch(() => undefined);
    return () => { mounted = false; };
  }, []);

  const members = useMemo(() => {
    if (!remoteMembers?.length) return c.members;
    return remoteMembers.map((member) => ({
      name: member.name,
      dept: member.department || 'medecine',
      photo: member.photo_url || '',
      role: member[`role_${lang}`] || member.role_fr || '',
      bio: member[`bio_${lang}`] || member.bio_fr || '',
      whatsappLink: member.phone ? `https://wa.me/${String(member.phone).replace(/[^0-9]/g, '')}` : null,
    }));
  }, [c.members, lang, remoteMembers]);

  const filteredMembers = useMemo(() => {
    if (activeDept === 'all') return members;
    return members.filter((m) => m.dept === activeDept);
  }, [activeDept, members]);

  function selectDept(id) {
    setActiveDept(id);
    setFilterOpen(false);
  }

  return (
    <PageShell>
      <section className="team-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="team-hero-scrim" aria-hidden="true" />
        <div className="container team-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <h1>{c.title}</h1>
          <p className="team-tagline">{c.tagline}</p>
          <p className="team-intro">{c.intro}</p>

          <div className="live-badge">
            <span className="live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      <section className="section container team-filter-section">
        <div className="dept-filter-wrap">
          <button
            type="button"
            className="dept-filter-toggle"
            onClick={() => setFilterOpen((v) => !v)}
            aria-expanded={filterOpen}
          >
            {c.filterToggle}
            <svg width="12" height="8" viewBox="0 0 10 6" aria-hidden="true" className={filterOpen ? 'is-flipped' : ''}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </button>

          <div className={`dept-filter ${filterOpen ? 'is-open' : ''}`} role="tablist" aria-label={c.filterAll}>
            <button
              type="button"
              role="tab"
              aria-selected={activeDept === 'all'}
              className={`dept-pill ${activeDept === 'all' ? 'is-active' : ''}`}
              onClick={() => selectDept('all')}
            >
              {c.filterAll}
            </button>
            {departments.map((d) => (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={activeDept === d.id}
                className={`dept-pill ${activeDept === d.id ? 'is-active' : ''}`}
                onClick={() => selectDept(d.id)}
              >
                {d[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="team-grid" key={activeDept}>
          {filteredMembers.map((m, i) => (
            <div
              className="member-card"
              key={m.name}
              style={{ animationDelay: `${(i % 9) * 65}ms` }}
            >
              <MemberPhoto member={m} />
              <h3>{m.name}</h3>
              <span className="member-role">{m.role}</span>
              <p className="member-bio">{m.bio}</p>

              <div className="member-social">
                {m.whatsappLink ? <a href={m.whatsappLink} className="member-whatsapp-link" target="_blank" rel="noreferrer">WhatsApp</a> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="commitment-band">
        <div className="container">
          <h2 className="section-title">{c.commitmentTitle}</h2>
          <div className="commitment-grid">
            {c.commitments.map((item) => (
              <div className="commitment-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="container team-cta-inner">
          <div>
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaBody}</p>
          </div>
          <Link to="/contact/rendez-vous" className="btn btn-primary">
            {c.ctaButton}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
