import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content, categories, lifeStages, benefits, process as careProcess } from './prevention.content';
import './Prevention.css';

const HERO_IMAGE = '/public/prevention-banner.png';

// ---------------------------------------------------------------------------
// Icon set — small hand-drawn line icons (24x24, stroke = currentColor), same
// technique as the Pathologies page so the visual language stays consistent
// across the site with no extra dependency.
// ---------------------------------------------------------------------------
const ICONS = {
  heart: (
    <path d="M12 19.5c-.3 0-.6-.1-.8-.3C7.8 16.6 3 12.7 3 8.8 3 6.1 5.1 4 7.7 4c1.6 0 3.1.8 4 2.1.9-1.3 2.4-2.1 4-2.1C18.3 4 20.4 6.1 20.4 8.8c0 3.9-4.8 7.8-8.2 10.4-.2.2-.5.3-.8.3z" />
  ),
  droplet: <path d="M12 3s6 7.1 6 11.3c0 3.4-2.7 6.2-6 6.2s-6-2.8-6-6.2C6 10.1 12 3 12 3z" />,
  shieldCheck: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 8.3-7 9-4-.7-7-4.5-7-9V6l7-3z" />
      <polyline points="9,12.2 11.2,14.4 15.3,9.8" strokeWidth="1.6" />
    </>
  ),
  syringe: (
    <>
      <line x1="19" y1="5" x2="21.3" y2="7.3" strokeLinecap="round" />
      <line x1="17" y1="7" x2="7" y2="17" strokeWidth="2.1" strokeLinecap="round" />
      <line x1="4" y1="20" x2="7" y2="17" strokeLinecap="round" />
      <line x1="14.5" y1="9.5" x2="17.5" y2="6.5" strokeWidth="1.3" />
      <line x1="11.5" y1="9.5" x2="9.5" y2="11.5" strokeWidth="1.3" />
    </>
  ),
  baby: (
    <>
      <circle cx="12" cy="8" r="4" />
      <circle cx="12" cy="8.3" r="0.7" fill="currentColor" stroke="none" />
      <path d="M8 12c-2 1-3 3-3 5.5 0 1.4 1.1 2.5 2.5 2.5h9c1.4 0 2.5-1.1 2.5-2.5 0-2.5-1-4.5-3-5.5" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6.5 3v5.3a3.9 3.9 0 0 0 7.8 0V3" />
      <line x1="6.5" y1="8.3" x2="6.5" y2="12" strokeLinecap="round" />
      <path d="M10.4 12v3.6A4.6 4.6 0 0 0 15 20.2a4.6 4.6 0 0 0 4.6-4.6V13.4" />
      <circle cx="19.6" cy="13" r="1.9" />
    </>
  ),
  personGeneric: (
    <>
      <circle cx="12" cy="7" r="3.4" />
      <path d="M5.5 21c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
    </>
  ),
  pregnant: (
    <>
      <circle cx="11" cy="6" r="2.5" />
      <path d="M8 20v-2.7c-1.3-.4-2.2-1.6-2.2-3 0-1.8 1.5-3.3 3.3-3.3h.9c2.1 0 3.8 1.7 3.8 3.8 0 .35-.05.68-.14 1" />
      <circle cx="12.3" cy="13.4" r="3" />
    </>
  ),
  cane: (
    <>
      <circle cx="10" cy="6" r="3" />
      <path d="M6 21c0-3.4 1.8-6 4-6s4 2.6 4 6" />
      <line x1="17" y1="10" x2="15.5" y2="21" strokeLinecap="round" />
      <line x1="15.1" y1="10.4" x2="18.1" y2="10.4" strokeLinecap="round" />
    </>
  ),
  diagnosisSearch: (
    <>
      <circle cx="10.3" cy="10.3" r="6.3" />
      <line x1="15.2" y1="15.2" x2="20.8" y2="20.8" strokeWidth="1.8" strokeLinecap="round" />
      <polyline points="6.5,10.3 8.4,10.3 9.4,7.9 10.9,12.8 11.9,10.3 14.1,10.3" strokeWidth="1.2" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2.4" width="6" height="3" rx="1" fill="currentColor" stroke="none" />
      <line x1="8" y1="10.3" x2="16" y2="10.3" strokeLinecap="round" />
      <line x1="8" y1="13.6" x2="16" y2="13.6" strokeLinecap="round" />
      <line x1="8" y1="16.9" x2="13" y2="16.9" strokeLinecap="round" />
    </>
  ),
  calendarCheck: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" strokeLinecap="round" />
      <polyline points="8.5,15 11,17.5 15.5,13" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  trendingDown: (
    <>
      <polyline points="3,7 10,14 14,10 21,17" />
      <polyline points="15,17 21,17 21,11" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" strokeLinecap="round" />
      <line x1="16" y1="3" x2="16" y2="7" strokeLinecap="round" />
    </>
  ),
  flask: (
    <>
      <path d="M9 2v6.7L4.4 17.2c-.8 1.4.2 3 1.8 3h11.6c1.6 0 2.6-1.6 1.8-3L15 8.7V2" />
      <line x1="8" y1="2" x2="16" y2="2" />
      <line x1="7.2" y1="14" x2="16.8" y2="14" strokeWidth="1.3" />
    </>
  ),
};

function Icon({ name, className }) {
  const inner = ICONS[name];
  if (!inner) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {inner}
    </svg>
  );
}

function CheckDot() {
  return (
    <svg className="check-dot" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.16" />
      <path d="M4.5 8.3 6.7 10.5 11.5 5.3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Prevention() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <PageShell>
      {/* ===== Hero ===== */}
      <section className="prev-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="prev-hero-scrim" aria-hidden="true" />
        <div className="container prev-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <h1>{c.title}</h1>
          <p className="prev-tagline">{c.tagline}</p>
          <p className="prev-intro">{c.intro}</p>

          <div className="live-badge">
            <span className="live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      {/* ===== Screening Programs ===== */}
      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">{c.categoriesEyebrow}</span>
          <h2 className="section-title">{c.categoriesTitle}</h2>
          <p className="section-subtitle">{c.categoriesSubtitle}</p>
        </div>

        <div className="category-grid">
          {categories.map((cat, i) => (
            <article className="category-card" key={cat.id} style={{ animationDelay: `${(i % 10) * 55}ms` }}>
              <div className="category-media">
                <img
                  className="category-image"
                  src={`/public/prevention/${cat.id}.png`}
                  alt={cat[lang].title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="category-icon">
                  <Icon name={cat.icon} />
                </span>
              </div>
              <div className="category-body">
                <h3>{cat[lang].title}</h3>
                <ul className="disease-list">
                  {cat[lang].items.map((item) => (
                    <li key={item}>
                      <CheckDot />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== By Life Stage ===== */}
      <section className="stages-band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-on-tint">{c.stagesEyebrow}</span>
            <h2 className="section-title">{c.stagesTitle}</h2>
            <p className="section-subtitle">{c.stagesSubtitle}</p>
          </div>

          <div className="stage-grid">
            {lifeStages.map((s) => (
              <div className="stage-tile" key={s.id}>
                <span className="stage-icon">
                  <Icon name={s.icon} />
                </span>
                <h3>{s[lang].title}</h3>
                <p>{s[lang].body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">{c.benefitsEyebrow}</span>
          <h2 className="section-title">{c.benefitsTitle}</h2>
          <p className="section-subtitle">{c.benefitsSubtitle}</p>
        </div>

        <div className="benefit-grid">
          {benefits.map((b) => (
            <div className="benefit-item" key={b.id}>
              <span className="benefit-icon">
                <Icon name={b.icon} />
              </span>
              <span className="benefit-label">{b[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="process-band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{c.processEyebrow}</span>
            <h2 className="section-title">{c.processTitle}</h2>
            <p className="section-subtitle">{c.processSubtitle}</p>
          </div>

          <div className="process-track">
            {careProcess.map((step, i) => (
              <div className="process-step" key={step.id}>
                <div className="process-step-top">
                  <span className="process-icon">
                    <Icon name={step.icon} />
                  </span>
                  <span className="process-number">{i + 1}</span>
                </div>
                <h3>{step[lang].title}</h3>
                <p>{step[lang].body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="prev-cta">
        <div className="container prev-cta-inner">
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
