import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content, categories, symptoms, diagnostics, process as careProcess } from './pathologies.content';
import './Pathologies.css';

const HERO_IMAGE = '/pathology-banner.png';

const CATEGORY_IMAGE_EXTENSIONS = {
  infectious: 'jpeg',
  neurological: 'webp',
  respiratory: 'png',
};

function getCategoryImage(cat) {
  const extension = CATEGORY_IMAGE_EXTENSIONS[cat.id] ?? 'png';
  return `/pathologies/${cat.id}.${extension}`;
}

// ---------------------------------------------------------------------------
// Icon set — small hand-drawn line icons (24x24, stroke = currentColor) so the
// page has no extra dependency. Reused across categories / symptoms /
// diagnostics / care-process wherever the concept overlaps.
// ---------------------------------------------------------------------------
const ICONS = {
  heart: (
    <path d="M12 19.5c-.3 0-.6-.1-.8-.3C7.8 16.6 3 12.7 3 8.8 3 6.1 5.1 4 7.7 4c1.6 0 3.1.8 4 2.1.9-1.3 2.4-2.1 4-2.1C18.3 4 20.4 6.1 20.4 8.8c0 3.9-4.8 7.8-8.2 10.4-.2.2-.5.3-.8.3z" />
  ),
  lungs: (
    <>
      <path d="M12 3v6" />
      <path d="M12 9c-1 0-1.8.8-2 1.8l-1 5.4c-.4 2.1-2.3 3.7-4.4 3.5-1.8-.2-2.9-2-2.5-3.8l1.6-7C3.9 7.4 5.4 6 7.2 6c1 0 1.9.4 2.6 1.1" />
      <path d="M12 9c1 0 1.8.8 2 1.8l1 5.4c.4 2.1 2.3 3.7 4.4 3.5 1.8-.2 2.9-2 2.5-3.8l-1.6-7C19.9 7.4 18.4 6 16.6 6c-1 0-1.9.4-2.6 1.1" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4.5C7.3 4.5 6 5.8 6 7.5c0 .3 0 .6.1.9C4.9 8.9 4 10 4 11.5c0 1 .4 1.9 1.1 2.5-.1.3-.1.7-.1 1 0 1.9 1.4 3.4 3.2 3.6.4 1.1 1.5 1.9 2.8 1.9 1.1 0 2-.6 2.5-1.5" />
      <path d="M15 4.5c1.7 0 3 1.3 3 3 0 .3 0 .6-.1.9 1.2.5 2.1 1.6 2.1 3.1 0 1-.4 1.9-1.1 2.5.1.3.1.7.1 1 0 1.9-1.4 3.4-3.2 3.6-.4 1.1-1.5 1.9-2.8 1.9-1.1 0-2-.6-2.5-1.5" />
      <path d="M11 6.3c.5-.5 1.2-.8 2-.8s1.5.3 2 .8M12 8v11" />
    </>
  ),
  droplet: <path d="M12 3s6 7.1 6 11.3c0 3.4-2.7 6.2-6 6.2s-6-2.8-6-6.2C6 10.1 12 3 12 3z" />,
  bone: (
    <>
      <line x1="6.2" y1="6.2" x2="17.8" y2="17.8" strokeWidth="3" />
      <circle cx="5" cy="5" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="19" r="2.6" fill="currentColor" stroke="none" />
    </>
  ),
  baby: (
    <>
      <circle cx="12" cy="8" r="4" />
      <circle cx="12" cy="8.3" r="0.7" fill="currentColor" stroke="none" />
      <path d="M8 12c-2 1-3 3-3 5.5 0 1.4 1.1 2.5 2.5 2.5h9c1.4 0 2.5-1.1 2.5-2.5 0-2.5-1-4.5-3-5.5" />
    </>
  ),
  female: (
    <>
      <circle cx="12" cy="9" r="5" />
      <line x1="12" y1="14" x2="12" y2="21" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </>
  ),
  male: (
    <>
      <circle cx="10" cy="14" r="5" />
      <line x1="14" y1="10" x2="20" y2="4" />
      <polyline points="14,4 20,4 20,10" />
    </>
  ),
  virus: (
    <>
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <g strokeLinecap="round">
        <line x1="12" y1="3.3" x2="12" y2="6.1" />
        <line x1="12" y1="17.9" x2="12" y2="20.7" />
        <line x1="3.3" y1="12" x2="6.1" y2="12" />
        <line x1="17.9" y1="12" x2="20.7" y2="12" />
        <line x1="5.8" y1="5.8" x2="7.7" y2="7.7" />
        <line x1="16.3" y1="16.3" x2="18.2" y2="18.2" />
        <line x1="18.2" y1="5.8" x2="16.3" y2="7.7" />
        <line x1="7.7" y1="16.3" x2="5.8" y2="18.2" />
      </g>
    </>
  ),
  stomach: (
    <path d="M8.5 3.2c-1.1 1.9-3 3.1-3 6.3 0 3.9 2.4 6.4 4.9 7.4.9 2.9 4.3 3.9 6.2 2 1.6-1.6 1.4-3.9-.3-5.1 2-1 2.9-2.9 2.9-5.5 0-3.4-2.4-5.8-5.8-5.8-1.9 0-3.3.9-4.9.7z" />
  ),
  wind: <path d="M4 8h9.5a2.5 2.5 0 1 0-2.3-3.5M4 12.5h13a2.8 2.8 0 1 1-2.6 3.9M4 17h7.5a2 2 0 1 1-1.8 2.8" />,
  headache: (
    <>
      <path d="M9 17.8V20h6v-2.2c2.4-1.2 4-3.7 4-6.6C19 7.3 15.9 4 12 4S5 7.3 5 11.2c0 2.9 1.6 5.4 4 6.6z" />
      <polyline points="11,8.3 9,12.3 11.7,12.3 9.8,16.3" strokeWidth="1.4" />
    </>
  ),
  trendingDown: (
    <>
      <polyline points="3,7 10,14 14,10 21,17" />
      <polyline points="15,17 21,17 21,11" />
    </>
  ),
  batteryLow: (
    <>
      <rect x="2" y="8" width="16" height="8" rx="1.6" />
      <line x1="20" y1="10.3" x2="20" y2="13.7" strokeWidth="1.8" />
      <rect x="4.5" y="10.5" width="2.4" height="3" fill="currentColor" stroke="none" />
    </>
  ),
  rash: (
    <>
      <circle cx="12" cy="12" r="8.3" opacity="0.35" />
      <circle cx="9" cy="9.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="8.6" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="10.4" cy="15.1" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="16.6" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  flask: (
    <>
      <path d="M9 2v6.7L4.4 17.2c-.8 1.4.2 3 1.8 3h11.6c1.6 0 2.6-1.6 1.8-3L15 8.7V2" />
      <line x1="8" y1="2" x2="16" y2="2" />
      <line x1="7.2" y1="14" x2="16.8" y2="14" strokeWidth="1.3" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <circle cx="12" cy="12" r="3.1" />
    </>
  ),
  radioWaves: (
    <>
      <circle cx="5" cy="19" r="1.3" fill="currentColor" stroke="none" />
      <path d="M8 16a5 5 0 0 1 0 7" />
      <path d="M11 13a9 9 0 0 1 0 13" />
      <path d="M14 10a13 13 0 0 1 0 19" />
    </>
  ),
  pulseLine: <polyline points="2,12 6,12 8,6 11,18 13,9 15,12 22,12" />,
  ctScan: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="4" x2="12" y2="9" strokeLinecap="round" />
    </>
  ),
  mri: (
    <>
      <rect x="3" y="9" width="18" height="6" rx="3" />
      <line x1="7" y1="9" x2="7" y2="15" strokeWidth="1.3" />
      <line x1="12" y1="4" x2="12" y2="9" strokeLinecap="round" />
      <line x1="12" y1="15" x2="12" y2="20" strokeLinecap="round" />
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
  stethoscope: (
    <>
      <path d="M6.5 3v5.3a3.9 3.9 0 0 0 7.8 0V3" />
      <line x1="6.5" y1="8.3" x2="6.5" y2="12" strokeLinecap="round" />
      <path d="M10.4 12v3.6A4.6 4.6 0 0 0 15 20.2a4.6 4.6 0 0 0 4.6-4.6V13.4" />
      <circle cx="19.6" cy="13" r="1.9" />
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

export default function Pathologies() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <PageShell>
      {/* ===== Hero ===== */}
      <section className="path-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="path-hero-scrim" aria-hidden="true" />
        <div className="container path-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <h1>{c.title}</h1>
          <p className="path-tagline">{c.tagline}</p>
          <p className="path-intro">{c.intro}</p>

          <div className="live-badge">
            <span className="live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      {/* ===== Browse by Category ===== */}
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
                  src={getCategoryImage(cat)}
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

      {/* ===== Common Symptoms ===== */}
      <section className="symptoms-band">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-on-tint">{c.symptomsEyebrow}</span>
            <h2 className="section-title">{c.symptomsTitle}</h2>
            <p className="section-subtitle">{c.symptomsSubtitle}</p>
          </div>

          <div className="symptom-grid">
            {symptoms.map((s) => (
              <div className="symptom-tile" key={s.id}>
                <span className="symptom-icon">
                  <Icon name={s.icon} />
                </span>
                <span className="symptom-label">{s[lang]}</span>
              </div>
            ))}
          </div>

          <p className="symptoms-note">{c.symptomsNote}</p>
        </div>
      </section>

      {/* ===== Diagnostic Services ===== */}
      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">{c.diagnosticsEyebrow}</span>
          <h2 className="section-title">{c.diagnosticsTitle}</h2>
          <p className="section-subtitle">{c.diagnosticsSubtitle}</p>
        </div>

        <div className="diagnostic-grid">
          {diagnostics.map((d) => (
            <div className="diagnostic-item" key={d.id}>
              <span className="diagnostic-icon">
                <Icon name={d.icon} />
              </span>
              <span className="diagnostic-label">{d[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Treatment Approach ===== */}
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
      <section className="path-cta">
        <div className="container path-cta-inner">
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