import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content, categories, articles, guides } from './blog.content';
import './Blog.css';

const HERO_IMAGE = '/service-banner.png';

const ICONS = {
  prevention: (
    <>
      <path d="M12 3l7 3v5.8c0 4.5-3 8.3-7 9.2-4-.9-7-4.7-7-9.2V6l7-3z" />
      <path d="m8.8 12.2 2.1 2.1 4.5-5" />
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
  emergency: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
    </>
  ),
  lab: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-8.5V3" />
      <path d="M8 15h8" />
    </>
  ),
  pharmacy: (
    <>
      <rect x="3.7" y="8.8" width="16.6" height="8.4" rx="4.2" transform="rotate(-32 12 13)" />
      <path d="m9.4 16 5.2-6" />
    </>
  ),
  maternal: (
    <>
      <circle cx="11" cy="6" r="2.5" />
      <path d="M8 20v-2.7c-1.3-.4-2.2-1.6-2.2-3 0-1.8 1.5-3.3 3.3-3.3h.9c2.1 0 3.8 1.7 3.8 3.8 0 .35-.05.68-.14 1" />
      <circle cx="12.3" cy="13.4" r="3" />
    </>
  ),
  read: (
    <>
      <path d="M5 4.5h10.5A3.5 3.5 0 0 1 19 8v11.5H8.5A3.5 3.5 0 0 1 5 16V4.5z" />
      <path d="M8.5 8.5h7" />
      <path d="M8.5 12h5" />
    </>
  ),
};

function Icon({ name }) {
  const inner = ICONS[name] ?? ICONS.read;

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {inner}
    </svg>
  );
}

export default function Blog() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);

  const localizedArticles = useMemo(
    () => articles.map((article) => ({ ...article, ...article[lang] })),
    [lang]
  );

  const featuredArticle = localizedArticles.find((article) => article.featured);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return localizedArticles.filter((article) => !article.featured);
    return localizedArticles.filter((article) => article.category === activeCategory);
  }, [activeCategory, localizedArticles]);

  const openedArticle = activeArticle
    ? localizedArticles.find((article) => article.id === activeArticle)
    : null;

  useEffect(() => {
    if (!openedArticle) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') setActiveArticle(null);
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [openedArticle]);

  return (
    <PageShell>
      <section className="blog-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="blog-hero-scrim" aria-hidden="true" />
        <div className="container blog-hero-inner">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <span className="eyebrow">{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className="blog-tagline">{c.tagline}</p>
          <p className="blog-intro">{c.intro}</p>

          <div className="live-badge">
            <span className="live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head blog-section-head">
          <span className="eyebrow">{c.featuredEyebrow}</span>
          <h2 className="section-title">{c.featuredTitle}</h2>
          <p className="section-subtitle">{c.featuredSubtitle}</p>
        </div>

        {featuredArticle && (
          <article className="featured-article" style={{ animationDelay: '80ms' }}>
            <div className="featured-article-icon">
              <Icon name={featuredArticle.icon} />
            </div>
            <div className="featured-article-body">
              <div className="article-meta">
                <span>{c.categoryLabels[featuredArticle.category]}</span>
                <span>{featuredArticle.date}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>
              <button type="button" className="article-link" onClick={() => setActiveArticle(featuredArticle.id)}>
                {c.readArticle}
                <svg width="15" height="11" viewBox="0 0 16 12" fill="none" aria-hidden="true">
                  <path d="M1 6h13M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </article>
        )}
      </section>

      <section className="blog-library">
        <div className="container">
          <div className="section-head blog-section-head">
            <span className="eyebrow eyebrow-on-tint">{c.libraryEyebrow}</span>
            <h2 className="section-title">{c.libraryTitle}</h2>
            <p className="section-subtitle">{c.librarySubtitle}</p>
          </div>

          <div className="category-filter" aria-label={c.filterLabel}>
            <button
              type="button"
              className={`category-pill ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
            >
              {c.allArticles}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`category-pill ${activeCategory === category.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category[lang]}
              </button>
            ))}
          </div>

          <div className="article-grid" key={activeCategory}>
            {filteredArticles.map((article, index) => (
              <article className="article-card" key={article.id} style={{ animationDelay: `${index * 70}ms` }}>
                <div className="article-card-top">
                  <span className="article-icon">
                    <Icon name={article.icon} />
                  </span>
                  <span className="article-category">{c.categoryLabels[article.category]}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="article-card-footer">
                  <span>{article.readTime}</span>
                  <button type="button" onClick={() => setActiveArticle(article.id)}>
                    {c.readMore}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head blog-section-head">
          <span className="eyebrow">{c.guidesEyebrow}</span>
          <h2 className="section-title">{c.guidesTitle}</h2>
          <p className="section-subtitle">{c.guidesSubtitle}</p>
        </div>

        <div className="guide-grid">
          {guides.map((guide, index) => (
            <div className="guide-step" key={guide.id} style={{ animationDelay: `${index * 90}ms` }}>
              <span className="guide-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{guide[lang].title}</h3>
              <p>{guide[lang].body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="blog-cta">
        <div className="container blog-cta-inner">
          <div>
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaBody}</p>
          </div>
          <Link to="/contact/rendez-vous" className="btn btn-primary">{c.ctaButton}</Link>
        </div>
      </section>

      {openedArticle && (
        <div className="article-modal-overlay" onClick={() => setActiveArticle(null)}>
          <article
            className="article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="article-modal-close" onClick={() => setActiveArticle(null)} aria-label={c.closeLabel}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5 5 19" />
              </svg>
            </button>
            <span className="article-modal-icon">
              <Icon name={openedArticle.icon} />
            </span>
            <div className="article-meta">
              <span>{c.categoryLabels[openedArticle.category]}</span>
              <span>{openedArticle.date}</span>
              <span>{openedArticle.readTime}</span>
            </div>
            <h2 id="article-modal-title">{openedArticle.title}</h2>
            <p>{openedArticle.detail}</p>
            <ul className="article-takeaways">
              {openedArticle.takeaways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      )}
    </PageShell>
  );
}
