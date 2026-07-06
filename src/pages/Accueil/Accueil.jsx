import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell/PageShell';
import { useLanguage } from '../../i18n/LanguageContext';
import { content } from './accueil.content';
import './Accueil.css';

export default function Accueil() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <PageShell>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="eyebrow">{c.heroEyebrow}</span>
            <h1>{c.heroTitle}</h1>
            <p className="hero-body">{c.heroBody}</p>
            <div className="hero-actions">
              <Link to="/contact/rendez-vous" className="btn btn-primary">{c.ctaBook}</Link>
              <Link to="/services" className="btn btn-ghost">{c.ctaServices}</Link>
            </div>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <svg viewBox="0 0 200 240" className="hero-caduceus">
              <line x1="100" y1="10" x2="100" y2="230" stroke="var(--color-blue)" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 60 C 60 80, 60 110, 100 130 C 140 150, 140 180, 100 200" fill="none" stroke="var(--color-green)" strokeWidth="4" strokeLinecap="round" />
              <path d="M100 60 C 140 80, 140 110, 100 130 C 60 150, 60 180, 100 200" fill="none" stroke="var(--color-blue)" strokeWidth="4" strokeLinecap="round" />
              <circle cx="100" cy="30" r="9" fill="var(--color-green)" />
            </svg>
          </div>
        </div>

        {/* Signature wave divider echoing the caduceus curve */}
        <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,32 C 240,80 480,0 720,32 C 960,64 1200,16 1440,40 L1440,80 L0,80 Z" fill="var(--color-off-white)" />
        </svg>
      </section>

      <div className="strip">
        <div className="container strip-inner">
          {c.strip.map((item) => (
            <div className="strip-item" key={item.label}>
              <span className="strip-label">{item.label}</span>
              <span className="strip-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section container">
        <div className="intro">
          <span className="eyebrow">{c.introEyebrow}</span>
          <h2>{c.introTitle}</h2>
          <p>{c.introBody}</p>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">{c.servicesTitle}</h2>
        <div className="services-grid">
          {c.services.map((s) => (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <Link to="/services" className="btn btn-outline-blue">{c.seeAll}</Link>
        </div>
      </section>

      <section className="stats-band">
        <div className="container">
          <h2>{c.statsTitle}</h2>
          <div className="stats-grid">
            {c.stats.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <blockquote className="testimonial">
          <p>{c.testimonialQuote}</p>
          <cite>{c.testimonialAuthor}</cite>
        </blockquote>
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
    </PageShell>
  );
}
