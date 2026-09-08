import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { getPublicEvents } from '../../lib/api';
import { events as fallbackEvents } from './announcements.content';
import './Announcements.css';

function localizeEvent(event, lang) {
  const localizedLabel = event[lang]?.label ?? event.label;

  return {
    ...event,
    title: event[lang]?.title ?? event[`title_${lang}`] ?? event.title,
    description: event[lang]?.description ?? event[`description_${lang}`] ?? event.description,
    label: typeof localizedLabel === 'object'
      ? localizedLabel[lang]
      : localizedLabel ?? (lang === 'fr' ? 'Événement' : 'Event'),
    date: event.date ?? event.event_date ?? '',
  };
}

export default function Announcements() {
  const { lang } = useLanguage();
  const [remoteEvents, setRemoteEvents] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    let mounted = true;
    getPublicEvents()
      .then((data) => {
        if (mounted && Array.isArray(data?.items) && data.items.length) setRemoteEvents(data.items);
      })
      .catch(() => undefined);
    return () => { mounted = false; };
  }, []);

  const items = useMemo(
    () => (remoteEvents?.length ? remoteEvents : fallbackEvents).map((event) => localizeEvent(event, lang)),
    [lang, remoteEvents]
  );

  useEffect(() => {
    if (paused || items.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [items.length, paused]);

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0);
  }, [activeIndex, items.length]);

  function move(direction) {
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  }

  function handleTouchStart(event) {
    setTouchStart(event.touches[0].clientX);
  }

  function handleTouchEnd(event) {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
    setTouchStart(null);
  }

  if (!items.length) return null;
  const active = items[activeIndex];

  return (
    <section
      className="announcement-section"
      aria-labelledby="announcement-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container">
        <div className="announcement-heading">
          <span className="eyebrow">{lang === 'fr' ? 'Actualités de la clinique' : 'Clinic updates'}</span>
          <h2 id="announcement-title">{lang === 'fr' ? 'Un moment important pour notre communauté' : 'An important moment for our community'}</h2>
          <p>{lang === 'fr' ? 'Suivez les visites, campagnes et événements qui font vivre la Clinique La Bienveillance.' : 'Follow the visits, campaigns, and events shaping Clinique La Bienveillance.'}</p>
        </div>

        <article className="announcement-card" key={active.id}>
          <div className="announcement-media">
            <img src={active.image_url ?? active.image} alt={active.title} />
            <span className="announcement-badge">{active.label}</span>
          </div>
          <div className="announcement-content">
            <span className="announcement-kicker">{active.date}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <Link to="/ressources/faq" className="announcement-link">
              {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        {items.length > 1 && (
          <div className="announcement-controls" aria-label={lang === 'fr' ? 'Navigation des actualités' : 'Updates navigation'}>
            <button type="button" onClick={() => move(-1)} aria-label={lang === 'fr' ? 'Actualité précédente' : 'Previous update'}>←</button>
            <div className="announcement-dots">
              {items.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={index === activeIndex ? 'is-active' : ''}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${lang === 'fr' ? 'Afficher' : 'Show'} ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <button type="button" onClick={() => move(1)} aria-label={lang === 'fr' ? 'Actualité suivante' : 'Next update'}>→</button>
          </div>
        )}
      </div>
    </section>
  );
}
