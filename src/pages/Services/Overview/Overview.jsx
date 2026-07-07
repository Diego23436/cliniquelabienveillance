import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content } from './overview.content';
import './Overview.css';

const ICONS = {
  stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2.5" />
      <circle cx="20" cy="10" r="1.6" />
    </svg>
  ),
  pill: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="9" width="17" height="8" rx="4" transform="rotate(-35 12 13)" />
      <path d="M9.5 15.5 14.5 10.5" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  ),
  family: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="2.4" />
      <circle cx="16" cy="8" r="2.4" />
      <path d="M3.5 20v-2a4 4 0 0 1 4-4h1a4 4 0 0 1 3 1.4" />
      <path d="M12.5 15.4A4 4 0 0 1 15.5 14h1a4 4 0 0 1 4 4v2" />
    </svg>
  ),
};

const HERO_IMAGE = '/service-banner.png';

export default function Overview() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (activeService === null) return undefined;
    function onKeyDown(e) {
      if (e.key === 'Escape') setActiveService(null);
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeService]);

  const openService = activeService !== null ? c.services[activeService] : null;

  return (
    <PageShell>
      <section className="overview-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="overview-hero-scrim" aria-hidden="true" />
        <div className="container overview-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>
          <span className="eyebrow">{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className="overview-intro">{c.intro}</p>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">{c.servicesTitle}</h2>
        <div className="ov-services-grid">
          {c.services.map((s, i) => (
            <div className="ov-service-card" key={s.title} style={{ animationDelay: `${i * 90}ms` }}>
              <div className="ov-service-icon">{ICONS[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <button
                type="button"
                className="ov-know-more"
                onClick={() => setActiveService(i)}
              >
                {c.knowMore}
                <svg width="14" height="10" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="process-band">
        <div className="container">
          <h2 className="section-title">{c.processTitle}</h2>
          <div className="process-track">
            {c.process.map((step, i) => (
              <div className="process-step" key={step.title} style={{ animationDelay: `${i * 110}ms` }}>
                <span className="process-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">{c.exploreTitle}</h2>
        <div className="explore-grid">
          <Link to="/services/pathologies" className="explore-tile explore-tile-blue">
            <h3>{c.exploreConditionsTitle}</h3>
            <p>{c.exploreConditionsBody}</p>
            <span className="explore-cta">
              {c.exploreCta}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link to="/services/prevention" className="explore-tile explore-tile-green">
            <h3>{c.explorePreventionTitle}</h3>
            <p>{c.explorePreventionBody}</p>
            <span className="explore-cta">
              {c.exploreCta}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <div>
            <h2>{c.ctaBannerTitle}</h2>
            <p>{c.ctaBannerBody}</p>
          </div>
          <Link to="/contact/rendez-vous" className="btn btn-primary">{c.ctaBannerButton}</Link>
        </div>
      </section>

      {openService && (
        <div
          className="ov-modal-overlay"
          onClick={() => setActiveService(null)}
        >
          <div
            className="ov-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ov-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="ov-modal-close"
              onClick={() => setActiveService(null)}
              aria-label={c.closeLabel}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
            <div className="ov-modal-icon">{ICONS[openService.icon]}</div>
            <h3 id="ov-modal-title">{openService.title}</h3>
            <p>{openService.detail}</p>
          </div>
        </div>
      )}
    </PageShell>
  );
}
