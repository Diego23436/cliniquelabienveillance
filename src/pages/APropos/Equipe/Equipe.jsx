import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content, departments } from './equipe.content';
import './Equipe.css';

const HERO_IMAGE = '/public/team-hero.png';

export default function Equipe() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeDept, setActiveDept] = useState('all');
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredMembers = useMemo(() => {
    if (activeDept === 'all') return c.members;
    return c.members.filter((m) => m.dept === activeDept);
  }, [activeDept, c.members]);

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
              <div className="member-photo-wrap">
                <img
                  className="member-photo"
                  src={`https://i.pravatar.cc/300?img=${m.avatarId}`}
                  alt={m.name}
                  loading="lazy"
                  width="96"
                  height="96"
                />
              </div>
              <h3>{m.name}</h3>
              <span className="member-role">{m.role}</span>
              <p className="member-bio">{m.bio}</p>

              <div className="member-social">
                <a
                  href={`tel:${m.phoneTel}`}
                  className="social-icon social-phone"
                  aria-label={`${m.phoneDisplay}`}
                  title={m.phoneDisplay}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1-1.1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${m.whatsapp}`}
                  className="social-icon social-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4s-.6-1.5-.8-2c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.4 3.8 3.4.5.2.9.3 1.3.4.5.2 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-icon social-facebook"
                  aria-label="Facebook"
                  title="Facebook"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.2c0-1 .3-1.6 1.7-1.6h1.6V3.7C16.5 3.6 15.4 3.5 14.2 3.5c-2.4 0-4 1.5-4 4.2v2.6H7.5v3.3h2.7V22h3.3z" />
                  </svg>
                </a>
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
          <Link to="/contact/rendez-vous" className="btn btn-primary">{c.ctaButton}</Link>
        </div>
      </section>
    </PageShell>
  );
}
