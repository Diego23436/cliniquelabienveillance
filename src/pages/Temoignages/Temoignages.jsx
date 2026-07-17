import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell/PageShell';
import { useLanguage } from '../../i18n/LanguageContext';
import { content, categories, testimonials, trustPoints, feedbackSteps } from './temoignages.content';
import './Temoignages.css';

const HERO_IMAGE = '/team-hero.png';

const ICONS = {
  consultation: (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2.5" />
      <circle cx="20" cy="10" r="1.7" />
    </>
  ),
  emergency: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </>
  ),
  lab: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-8.5V3" />
      <path d="M8 15h8" />
    </>
  ),
  maternity: (
    <>
      <circle cx="11" cy="6" r="2.5" />
      <path d="M8 20v-2.7c-1.3-.4-2.2-1.6-2.2-3 0-1.8 1.5-3.3 3.3-3.3h.9c2.1 0 3.8 1.7 3.8 3.8 0 .35-.05.68-.14 1" />
      <circle cx="12.3" cy="13.4" r="3" />
    </>
  ),
  pharmacy: (
    <>
      <rect x="3.7" y="8.8" width="16.6" height="8.4" rx="4.2" transform="rotate(-32 12 13)" />
      <path d="m9.4 16 5.2-6" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M3.5 20v-1.4A4.6 4.6 0 0 1 8.1 14h.6a4.6 4.6 0 0 1 3.3 1.4" />
      <path d="M12 15.4a4.6 4.6 0 0 1 3.3-1.4h.6a4.6 4.6 0 0 1 4.6 4.6V20" />
    </>
  ),
  quote: (
    <>
      <path d="M8 9H5.6C5.9 6.8 7 5.4 9 4.5" />
      <path d="M8 9v6H4V9" />
      <path d="M18 9h-2.4c.3-2.2 1.4-3.6 3.4-4.5" />
      <path d="M18 9v6h-4V9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.8c0 4.5-3 8.3-7 9.2-4-.9-7-4.7-7-9.2V6l7-3z" />
      <path d="m8.8 12.2 2.1 2.1 4.5-5" />
    </>
  ),
  heart: (
    <path d="M12 19.5c-.3 0-.6-.1-.8-.3C7.8 16.6 3 12.7 3 8.8 3 6.1 5.1 4 7.7 4c1.6 0 3.1.8 4 2.1.9-1.3 2.4-2.1 4-2.1C18.3 4 20.4 6.1 20.4 8.8c0 3.9-4.8 7.8-8.2 10.4-.2.2-.5.3-.8.3z" />
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2.4" width="6" height="3" rx="1" fill="currentColor" stroke="none" />
      <path d="M8 10.3h8" />
      <path d="M8 13.6h8" />
      <path d="M8 16.9h5" />
    </>
  ),
};

function Icon({ name }) {
  const inner = ICONS[name] ?? ICONS.quote;

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {inner}
    </svg>
  );
}

function Stars({ label }) {
  return (
    <span className="tm-stars" aria-label={label}>
      <span aria-hidden="true">★★★★★</span>
    </span>
  );
}

export default function Temoignages() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeCategory, setActiveCategory] = useState('all');

  const localizedTestimonials = useMemo(
    () => testimonials.map((item) => ({ ...item, ...item[lang] })),
    [lang]
  );

  const featured = localizedTestimonials.find((item) => item.featured);

  const filteredTestimonials = useMemo(() => {
    if (activeCategory === 'all') return localizedTestimonials.filter((item) => !item.featured);
    return localizedTestimonials.filter((item) => item.category === activeCategory);
  }, [activeCategory, localizedTestimonials]);

  return (
    <PageShell>
      <section className="tm-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="tm-hero-scrim" aria-hidden="true" />
        <div className="container tm-hero-inner">
          <nav className="tm-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <span className="tm-eyebrow">{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className="tm-tagline">{c.tagline}</p>
          <p className="tm-intro">{c.intro}</p>

          <div className="tm-live-badge">
            <span className="tm-live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="tm-section-head">
          <span className="tm-eyebrow">{c.featuredEyebrow}</span>
          <h2>{c.featuredTitle}</h2>
          <p>{c.featuredSubtitle}</p>
        </div>

        {featured && (
          <article className="tm-featured-story">
            <div className="tm-featured-mark">
              <Icon name={featured.icon} />
            </div>
            <div className="tm-featured-body">
              <div className="tm-story-meta">
                <span>{c.categoryLabels[featured.category]}</span>
                <span>{featured.context}</span>
              </div>
              <Stars label={c.ratingLabel} />
              <blockquote>{featured.quote}</blockquote>
              <p>{featured.detail}</p>
              <cite>{featured.author}</cite>
            </div>
          </article>
        )}
      </section>

      <section className="tm-story-band">
        <div className="container">
          <div className="tm-section-head">
            <span className="tm-eyebrow tm-eyebrow-on-tint">{c.libraryEyebrow}</span>
            <h2>{c.libraryTitle}</h2>
            <p>{c.librarySubtitle}</p>
          </div>

          <div className="tm-filter" aria-label={c.filterLabel}>
            <button
              type="button"
              className={`tm-filter-pill ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
            >
              {c.allStories}
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`tm-filter-pill ${activeCategory === category.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category[lang]}
              </button>
            ))}
          </div>

          <div className="tm-story-grid" key={activeCategory}>
            {filteredTestimonials.map((story, index) => (
              <article className="tm-story-card" key={story.id} style={{ animationDelay: `${index * 70}ms` }}>
                <div className="tm-story-top">
                  <span className="tm-story-icon">
                    <Icon name={story.icon} />
                  </span>
                  <span className="tm-story-service">{c.categoryLabels[story.category]}</span>
                </div>
                <Stars label={c.ratingLabel} />
                <blockquote>{story.quote}</blockquote>
                <p>{story.detail}</p>
                <div className="tm-story-footer">
                  <cite>{story.author}</cite>
                  <span>{story.context}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="tm-section-head">
          <span className="tm-eyebrow">{c.trustEyebrow}</span>
          <h2>{c.trustTitle}</h2>
          <p>{c.trustSubtitle}</p>
        </div>

        <div className="tm-trust-grid">
          {trustPoints.map((point, index) => (
            <article className="tm-trust-card" key={point.id} style={{ animationDelay: `${index * 80}ms` }}>
              <span className="tm-trust-icon">
                <Icon name={point.icon} />
              </span>
              <h3>{point[lang].title}</h3>
              <p>{point[lang].body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tm-process-band">
        <div className="container">
          <div className="tm-section-head">
            <span className="tm-eyebrow tm-eyebrow-on-tint">{c.processEyebrow}</span>
            <h2>{c.processTitle}</h2>
            <p>{c.processSubtitle}</p>
          </div>

          <div className="tm-process-grid">
            {feedbackSteps.map((step, index) => (
              <article className="tm-process-step" key={step.id} style={{ animationDelay: `${index * 90}ms` }}>
                <span className="tm-process-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step[lang].title}</h3>
                <p>{step[lang].body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tm-cta">
        <div className="container tm-cta-inner">
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
