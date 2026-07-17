import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell/PageShell';
import { useLanguage } from '../../i18n/LanguageContext';
import { content } from './accueil.content';
import './Accueil.css';

const HERO_IMAGE = '/home-banner.png';

export default function Accueil() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <PageShell>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
      >
        <div className="hero-scrim" aria-hidden="true" />
        <div className="container hero-inner">
          <span className="eyebrow">{c.heroEyebrow}</span>
          <h1>{c.heroTitle}</h1>
          <p className="hero-body">{c.heroBody}</p>
          <div className="hero-actions">
            <Link to="/contact/rendez-vous" className="btn btn-primary">
              {c.ctaBook}
            </Link>
            <Link to="/services" className="btn btn-ghost">
              {c.ctaServices}
            </Link>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="container strip-inner">
          {c.strip.map((item) => (
            <div className="strip-item" key={item.id}>
              <span className="strip-label">{item.title}</span>
              <span className="strip-subtitle">{item.subtitle}</span>
              <div className="strip-phones">
                {item.phones.map((phone) => (
                  <a key={phone.tel} className="strip-phone" href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                ))}
              </div>
              <span className="strip-note">{item.note}</span>
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
          <Link to="/services" className="btn btn-outline-blue">
            {c.seeAll}
          </Link>
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
          <Link to="/contact/rendez-vous" className="btn btn-primary">
            {c.ctaBannerButton}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
