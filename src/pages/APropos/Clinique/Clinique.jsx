import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content } from './clinique.content';
import './Clinique.css';

const HERO_IMAGE = '/team-hero.png';

export default function Clinique() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <PageShell>
      <section
        className="clinic-hero"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
        }}
      >
        <div className="clinic-hero-scrim" aria-hidden="true" />
        <div className="container clinic-hero-inner">
          <span className="eyebrow">{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className="clinic-intro">{c.intro}</p>
        </div>
      </section>

      <section className="section container clinic-mission">
        <div className="mission-card">
          <h2>{c.missionTitle}</h2>
          <p>{c.missionBody}</p>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">{c.valuesTitle}</h2>
        <div className="values-grid">
          {c.values.map((v, i) => (
            <div className="value-card" key={v.title}>
              <span className="value-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="history-band">
        <div className="container history-inner">
          <div className="history-text">
            <h2>{c.historyTitle}</h2>
            <p>{c.historyBody}</p>
          </div>
          <div className="history-graphic" aria-hidden="true">
            <img src="/logo.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">{c.locationsTitle}</h2>
        <div className="locations-grid">
          {c.locations.map((loc) => (
            <div className="location-card" key={loc.name}>
              <h3>{loc.name}</h3>
              <p className="location-line">
                <strong>{loc.address}</strong>
              </p>
              <p className="location-line">{loc.hours}</p>
              <p className="location-line">{loc.phone}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-teaser">
        <div className="container team-teaser-inner">
          <p>{c.teamTeaser}</p>
          <div className="team-teaser-actions">
            <Link to="/a-propos/equipe" className="btn btn-primary">
              {c.teamCta}
            </Link>
            <Link to="/services" className="btn btn-outline-blue">
              {c.servicesCta}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
