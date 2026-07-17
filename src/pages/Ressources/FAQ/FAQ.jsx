import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { content, categories, faqs, quickCards } from './faq.content';
import './FAQ.css';

const HERO_IMAGE = '/service-banner.png';

const ICONS = {
  appointment: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="3" />
      <path d="M7 3v4" />
      <path d="M17 3v4" />
      <path d="M4 10h16" />
      <path d="m8.5 15 2 2 5-5" />
    </>
  ),
  services: (
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
  pharmacy: (
    <>
      <rect x="3.7" y="8.8" width="16.6" height="8.4" rx="4.2" transform="rotate(-32 12 13)" />
      <path d="m9.4 16 5.2-6" />
    </>
  ),
  payment: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 12h5" />
      <path d="M9.5 15.5h6.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.2 15.2 5.3 5.3" />
    </>
  ),
  phone: (
    <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1-1.1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.1Z" />
  ),
  chat: (
    <>
      <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v5A3.5 3.5 0 0 1 16.5 14H10l-5 4v-4.4A3.5 3.5 0 0 1 4 11V5.5z" />
      <path d="M8 7.5h8" />
      <path d="M8 10.5h5" />
    </>
  ),
};

function Icon({ name }) {
  const inner = ICONS[name] ?? ICONS.document;

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {inner}
    </svg>
  );
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function FAQ() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.id ?? null);

  const localizedFaqs = useMemo(
    () => faqs.map((item) => ({ ...item, ...item[lang] })),
    [lang]
  );

  const filteredFaqs = useMemo(() => {
    const cleanQuery = normalize(query.trim());

    return localizedFaqs.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const searchText = normalize(`${item.question} ${item.answer} ${item.keywords?.join(' ') ?? ''}`);
      return matchesCategory && (!cleanQuery || searchText.includes(cleanQuery));
    });
  }, [activeCategory, localizedFaqs, query]);

  function toggleQuestion(id) {
    setOpenQuestion((current) => (current === id ? null : id));
  }

  return (
    <PageShell>
      <section className="faq-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="faq-hero-scrim" aria-hidden="true" />
        <div className="container faq-hero-inner">
          <nav className="faq-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{c.breadcrumbHome}</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{c.breadcrumbCurrent}</span>
          </nav>

          <span className="faq-eyebrow">{c.eyebrow}</span>
          <h1>{c.title}</h1>
          <p className="faq-tagline">{c.tagline}</p>
          <p className="faq-intro">{c.intro}</p>

          <div className="faq-live-badge">
            <span className="faq-live-dot" aria-hidden="true" />
            {c.liveBadge}
          </div>
        </div>
      </section>

      <section className="section container faq-control-section">
        <div className="faq-section-head">
          <span className="faq-eyebrow">{c.searchEyebrow}</span>
          <h2>{c.searchTitle}</h2>
          <p>{c.searchSubtitle}</p>
        </div>

        <div className="faq-search-panel">
          <label className="faq-search" htmlFor="faq-search">
            <span className="faq-search-icon">
              <Icon name="search" />
            </span>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={c.searchPlaceholder}
            />
          </label>

          <div className="faq-category-filter" aria-label={c.filterLabel}>
            <button
              type="button"
              className={`faq-category-pill ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
            >
              {c.allQuestions}
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`faq-category-pill ${activeCategory === category.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category[lang]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-answer-band">
        <div className="container faq-answer-layout">
          <aside className="faq-topic-rail" aria-label={c.topicsLabel}>
            {categories.map((category, index) => (
              <button
                type="button"
                key={category.id}
                className={`faq-topic-card ${activeCategory === category.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="faq-topic-icon">
                  <Icon name={category.icon} />
                </span>
                <span>{category[lang]}</span>
              </button>
            ))}
          </aside>

          <div className="faq-accordion-panel">
            <div className="faq-result-meta" aria-live="polite">
              <span>{c.resultsLabel}</span>
              <strong>{filteredFaqs.length}</strong>
            </div>

            {filteredFaqs.length > 0 ? (
              <div className="faq-list">
                {filteredFaqs.map((item, index) => {
                  const isOpen = openQuestion === item.id;

                  return (
                    <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.id} style={{ animationDelay: `${index * 55}ms` }}>
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleQuestion(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`${item.id}-answer`}
                      >
                        <span className="faq-question-icon">
                          <Icon name={item.icon} />
                        </span>
                        <span>{item.question}</span>
                        <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <div className="faq-answer" id={`${item.id}-answer`}>
                        <p>{item.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="faq-empty">
                <span className="faq-empty-icon">
                  <Icon name="search" />
                </span>
                <h3>{c.emptyTitle}</h3>
                <p>{c.emptyBody}</p>
                <button
                  type="button"
                  className="faq-reset"
                  onClick={() => {
                    setActiveCategory('all');
                    setQuery('');
                  }}
                >
                  {c.emptyAction}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="faq-section-head">
          <span className="faq-eyebrow">{c.quickEyebrow}</span>
          <h2>{c.quickTitle}</h2>
          <p>{c.quickSubtitle}</p>
        </div>

        <div className="faq-quick-grid">
          {quickCards.map((card, index) => (
            <article className="faq-quick-card" key={card.id} style={{ animationDelay: `${index * 80}ms` }}>
              <span className="faq-quick-icon">
                <Icon name={card.icon} />
              </span>
              <h3>{card[lang].title}</h3>
              <p>{card[lang].body}</p>
              {card.href ? (
                <a href={card.href}>{card[lang].action}</a>
              ) : (
                <Link to="/contact/rendez-vous">{card[lang].action}</Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="faq-cta">
        <div className="container faq-cta-inner">
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
