import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../components/PageShell/PageShell';
import { useLanguage } from '../../i18n/LanguageContext';
import { content, filters, mediaItems, highlights } from './galerie.content';
import './Galerie.css';

const HERO_IMAGE = '/team-hero.png';

const ICONS = {
  photo: (
    <>
      <rect x="4" y="6" width="16" height="13" rx="2.5" />
      <circle cx="9" cy="11" r="2" />
      <path d="m12 16 2.4-2.4a1.6 1.6 0 0 1 2.2 0L20 17" />
    </>
  ),
  video: (
    <>
      <rect x="4" y="6" width="11" height="12" rx="2.5" />
      <path d="m15 10 5-3v10l-5-3" />
    </>
  ),
  clinic: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
    </>
  ),
  service: (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2.5" />
      <circle cx="20" cy="10" r="1.7" />
    </>
  ),
  lab: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-8.5V3" />
      <path d="M8 15h8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.8c0 4.5-3 8.3-7 9.2-4-.9-7-4.7-7-9.2V6l7-3z" />
      <path d="m8.8 12.2 2.1 2.1 4.5-5" />
    </>
  ),
  play: <path d="M8 5.5v13l10-6.5-10-6.5z" />,
  close: (
    <>
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </>
  ),
};

function Icon({ name }) {
  const inner = ICONS[name] ?? ICONS.photo;

  return (
    <svg
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

function isVideoFile(src = '') {
  return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src);
}

function MediaVisual({ item, className, loading = 'lazy', preview = false, variant = 'tile' }) {
  if (item.type === 'video' && isVideoFile(item.src)) {
    return (
      <video
        className={className}
        src={item.src}
        poster={item.poster ?? '/home-banner.png'}
        autoPlay={variant !== 'lightbox'}
        muted={variant !== 'lightbox'}
        loop={variant !== 'lightbox'}
        playsInline
        controls={variant === 'lightbox'}
        preload={preview || variant !== 'lightbox' ? 'auto' : 'metadata'}
      />
    );
  }

  return <img className={className} src={item.src} alt={item.alt} loading={loading} />;
}

export default function Galerie() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeItemId, setActiveItemId] = useState(null);

  const localizedMedia = useMemo(
    () => mediaItems.map((item) => ({ ...item, ...item[lang] })),
    [lang]
  );

  const featuredItem = localizedMedia.find((item) => item.featured);

  const filteredMedia = useMemo(() => {
    if (activeFilter === 'all') return localizedMedia.filter((item) => !item.featured);
    return localizedMedia.filter((item) => item.type === activeFilter || item.category === activeFilter);
  }, [activeFilter, localizedMedia]);

  const activeItem = activeItemId
    ? localizedMedia.find((item) => item.id === activeItemId)
    : null;

  useEffect(() => {
    if (!activeItem) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') setActiveItemId(null);
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  return (
    <PageShell>
      <section className="gal-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="gal-hero-scrim" aria-hidden="true" />
        <div className="container gal-hero-inner">
          <nav className="gal-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <span className="gal-eyebrow">{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className="gal-tagline">{c.tagline}</p>
          <p className="gal-intro">{c.intro}</p>

          <div className="gal-live-badge">
            <span className="gal-live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="gal-section-head">
          <span className="gal-eyebrow">{c.featuredEyebrow}</span>
          <h2>{c.featuredTitle}</h2>
          <p>{c.featuredSubtitle}</p>
        </div>

        {featuredItem && (
          <article className="gal-featured">
            <button
              type="button"
              className="gal-featured-media"
              onClick={() => setActiveItemId(featuredItem.id)}
              aria-label={`${c.openLabel} ${featuredItem.title}`}
            >
              <MediaVisual item={featuredItem} className="gal-featured-image" variant="tile" />
              <span className="gal-media-type">
                <Icon name={featuredItem.type} />
                {featuredItem.typeLabel}
              </span>
              {featuredItem.type === 'video' && (
                <span className="gal-play">
                  <Icon name="play" />
                </span>
              )}
            </button>
            <div className="gal-featured-body">
              <div className="gal-media-meta">
                <span>{c.categoryLabels[featuredItem.category]}</span>
                <span>{featuredItem.typeLabel}</span>
                {featuredItem.duration && <span>{featuredItem.duration}</span>}
              </div>
              <h3>{featuredItem.title}</h3>
              <p>{featuredItem.description}</p>
              <button
                type="button"
                className="gal-open-link"
                onClick={() => setActiveItemId(featuredItem.id)}
              >
                {c.openMedia}
                <svg width="15" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path
                    d="M1 6h13M9 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </article>
        )}
      </section>

      <section className="gal-library">
        <div className="container">
          <div className="gal-section-head">
            <span className="gal-eyebrow gal-eyebrow-on-tint">{c.libraryEyebrow}</span>
            <h2>{c.libraryTitle}</h2>
            <p>{c.librarySubtitle}</p>
          </div>

          <div className="gal-filter" aria-label={c.filterLabel}>
            {filters.map((filter) => (
              <button
                type="button"
                key={filter.id}
                className={`gal-filter-pill ${activeFilter === filter.id ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
              >
                {filter[lang]}
              </button>
            ))}
          </div>

          <div className="gal-grid" key={activeFilter}>
            {filteredMedia.map((item, index) => (
              <article
                className={`gal-card gal-card-${item.size}`}
                key={item.id}
                style={{ animationDelay: `${index * 65}ms` }}
              >
                <button
                  type="button"
                  className="gal-card-media"
                  onClick={() => setActiveItemId(item.id)}
                  aria-label={`${c.openLabel} ${item.title}`}
                >
                  <MediaVisual item={item} className="gal-card-image" variant="tile" />
                  <span className="gal-media-type">
                    <Icon name={item.type} />
                    {item.typeLabel}
                  </span>
                  {item.type === 'video' && (
                    <span className="gal-play">
                      <Icon name="play" />
                    </span>
                  )}
                </button>
                <div className="gal-card-body">
                  <span className="gal-card-category">{c.categoryLabels[item.category]}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="gal-section-head">
          <span className="gal-eyebrow">{c.highlightsEyebrow}</span>
          <h2>{c.highlightsTitle}</h2>
          <p>{c.highlightsSubtitle}</p>
        </div>

        <div className="gal-highlight-grid">
          {highlights.map((item, index) => (
            <article className="gal-highlight-card" key={item.id} style={{ animationDelay: `${index * 85}ms` }}>
              <span className="gal-highlight-icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item[lang].title}</h3>
              <p>{item[lang].body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gal-cta">
        <div className="container gal-cta-inner">
          <div>
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaBody}</p>
          </div>
          <Link to="/contact/rendez-vous" className="btn btn-primary">
            {c.ctaButton}
          </Link>
        </div>
      </section>

      {activeItem && (
        <div className="gal-lightbox" onClick={() => setActiveItemId(null)}>
          <article
            className="gal-lightbox-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gal-lightbox-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gal-lightbox-close"
              onClick={() => setActiveItemId(null)}
              aria-label={c.closeLabel}
            >
              <Icon name="close" />
            </button>
            <div className="gal-lightbox-media">
              <MediaVisual item={activeItem} className="gal-lightbox-image" variant="lightbox" preview={false} />
              {activeItem.type === 'video' && isVideoFile(activeItem.src) && (
                <span className="gal-lightbox-play">
                  <Icon name="play" />
                </span>
              )}
            </div>
            <div className="gal-lightbox-body">
              <div className="gal-media-meta">
                <span>{c.categoryLabels[activeItem.category]}</span>
                <span>{activeItem.typeLabel}</span>
                {activeItem.duration && <span>{activeItem.duration}</span>}
              </div>
              <h2 id="gal-lightbox-title">{activeItem.title}</h2>
              <p>{activeItem.description}</p>
              {activeItem.type === 'video' && isVideoFile(activeItem.src) && (
                <p className="gal-video-note">{c.videoNote}</p>
              )}
            </div>
          </article>
        </div>
      )}
    </PageShell>
  );
}
