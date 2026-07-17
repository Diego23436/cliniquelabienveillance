import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../../../components/PageShell/PageShell';
import { useLanguage } from '../../../i18n/LanguageContext';
import { contactMethods, content, locations, preferredPeriods, services, steps } from './rendezvous.content';
import './RendezVous.css';

const HERO_IMAGE = '/service-banner.png';

const ICONS = {
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="3" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
      <path d="m8.5 15.5 2.2 2.2 4.8-5.4" />
    </>
  ),
  phone: (
    <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1-1.1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.1Z" />
  ),
  emergency: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2.1" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11.2A7 7 0 0 0 5 9.8C5 15.3 12 21 12 21z" />
      <circle cx="12" cy="9.8" r="2.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.8c0 4.5-3 8.3-7 9.2-4-.9-7-4.7-7-9.2V6l7-3z" />
      <path d="m8.8 12.2 2.1 2.1 4.5-5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5.5 21c0-3.8 2.9-6.5 6.5-6.5s6.5 2.7 6.5 6.5" />
    </>
  ),
  service: (
    <>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2.5" />
      <circle cx="20" cy="10" r="1.7" />
    </>
  ),
  note: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 12h5" />
      <path d="M9.5 15.5h6.5" />
    </>
  ),
  route: (
    <>
      <path d="M6 18.5C3.8 17 3 15.4 3 14c0-2 1.8-3.3 4.8-3.3h8.4c3 0 4.8-1.3 4.8-3.3 0-1.4-.8-3-3-4.4" />
      <circle cx="6" cy="18.5" r="2" />
      <circle cx="18" cy="3.5" r="2" />
    </>
  ),
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
};

function Icon({ name }) {
  const inner = ICONS[name] ?? ICONS.calendar;

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {inner}
    </svg>
  );
}

const initialForm = {
  name: '',
  phone: '',
  service: 'consultation',
  date: '',
  period: 'morning',
  message: '',
  consent: false,
};

const WHATSAPP_CONTACT = '237677609056';

function buildWhatsAppMessage(lang, form, localizedServices, preferredPeriods) {
  const selectedService = localizedServices.find((service) => service.id === form.service);
  const selectedPeriod = preferredPeriods.find((period) => period.id === form.period);
  const serviceLabel = selectedService?.label ?? form.service;
  const periodLabel = selectedPeriod?.[lang] ?? form.period;

  const lines =
    lang === 'fr'
      ? [
          'Bonjour Clinique La Bienveillance,',
          '',
          `Nom: ${form.name}`,
          `Téléphone: ${form.phone}`,
          `Service: ${serviceLabel}`,
          `Date souhaitée: ${form.date || 'Non précisée'}`,
          `Moment préféré: ${periodLabel}`,
          `Message: ${form.message || 'Aucun message supplémentaire'}`,
        ]
      : [
          'Hello Clinique La Bienveillance,',
          '',
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Service: ${serviceLabel}`,
          `Preferred date: ${form.date || 'Not specified'}`,
          `Preferred time: ${periodLabel}`,
          `Message: ${form.message || 'No extra message'}`,
        ];

  return lines.join('\n');
}

export default function RendezVous() {
  const { lang } = useLanguage();
  const c = content[lang];
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const localizedServices = useMemo(
    () => services.map((service) => ({ ...service, label: service[lang] })),
    [lang]
  );

  useEffect(() => {
    if (window.location.hash !== '#coordonnees') return;
    const target = document.getElementById('coordonnees');
    if (!target) return;

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }, []);

  function updateField(event) {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    const message = buildWhatsAppMessage(lang, form, localizedServices, preferredPeriods);
    const url = `https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(message)}`;

    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
    }
  }

  return (
    <PageShell>
      <section className="rv-hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="rv-hero-scrim" aria-hidden="true" />
        <div className="container rv-hero-inner">
          <div className="rv-hero-copy">
            <nav className="rv-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">{c.breadcrumbHome}</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{c.breadcrumbCurrent}</span>
            </nav>

            <span className="rv-eyebrow">{c.eyebrow}</span>
            <h1>{c.title}</h1>
            <p className="rv-tagline">{c.tagline}</p>
            <p className="rv-intro">{c.intro}</p>

            <div className="rv-hero-actions">
              <a className="btn btn-primary" href="#rendezvous-form">{c.heroButton}</a>
              <a className="rv-ghost-link" href={`tel:${c.appointmentPhoneRaw}`}>
                <Icon name="phone" />
                {c.appointmentPhone}
              </a>
            </div>
          </div>

          <aside className="rv-hero-card" aria-label={c.heroCardLabel}>
            <span className="rv-hero-card-icon">
              <Icon name="clock" />
            </span>
            <h2>{c.heroCardTitle}</h2>
            <p>{c.heroCardBody}</p>
            <div className="rv-hero-card-lines">
              <span>{c.heroCardLineOne}</span>
              <span>{c.heroCardLineTwo}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section container rv-methods-section">
        <div className="rv-section-head">
          <span className="rv-eyebrow">{c.methodsEyebrow}</span>
          <h2>{c.methodsTitle}</h2>
          <p>{c.methodsSubtitle}</p>
        </div>

            <div className="rv-method-grid">
          {contactMethods.map((method, index) => (
            <article className="rv-method-card" key={method.id} style={{ animationDelay: `${index * 70}ms` }}>
              <span className="rv-method-icon">
                <Icon name={method.icon} />
              </span>
              <h3>{method[lang].title}</h3>
              <p>{method[lang].body}</p>
              <div className="rv-method-phones">
                {method.phones.map((phone) => (
                  <a key={phone.tel} href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rv-form-band" id="rendezvous-form">
        <div className="container rv-form-layout">
          <div className="rv-form-copy">
            <span className="rv-eyebrow rv-eyebrow-on-tint">{c.formEyebrow}</span>
            <h2>{c.formTitle}</h2>
            <p>{c.formSubtitle}</p>

            <div className="rv-step-list">
              {steps.map((step, index) => (
                <article className="rv-step" key={step.id} style={{ animationDelay: `${index * 80}ms` }}>
                  <span className="rv-step-number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step[lang].title}</h3>
                    <p>{step[lang].body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form className="rv-form" onSubmit={handleSubmit}>
            <div className="rv-form-top">
              <span className="rv-form-icon">
                <Icon name="calendar" />
              </span>
              <div>
                <h2>{c.formCardTitle}</h2>
                <p>{c.formCardSubtitle}</p>
              </div>
            </div>

            <div className="rv-form-grid">
              <label className="rv-field">
                <span>{c.nameLabel}</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  placeholder={c.namePlaceholder}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="rv-field">
                <span>{c.phoneLabel}</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder={c.phonePlaceholder}
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="rv-field">
                <span>{c.serviceLabel}</span>
                <select name="service" value={form.service} onChange={updateField}>
                  {localizedServices.map((service) => (
                    <option value={service.id} key={service.id}>{service.label}</option>
                  ))}
                </select>
              </label>

              <label className="rv-field">
                <span>{c.dateLabel}</span>
                <input name="date" type="date" value={form.date} onChange={updateField} />
              </label>
            </div>

            <fieldset className="rv-period-field">
              <legend>{c.periodLabel}</legend>
              <div className="rv-period-options">
                {preferredPeriods.map((period) => (
                  <label className={`rv-period-option ${form.period === period.id ? 'is-active' : ''}`} key={period.id}>
                    <input
                      type="radio"
                      name="period"
                      value={period.id}
                      checked={form.period === period.id}
                      onChange={updateField}
                    />
                    <span>{period[lang]}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="rv-field rv-field-wide">
              <span>{c.messageLabel}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                rows="4"
                placeholder={c.messagePlaceholder}
              />
            </label>

            <label className="rv-consent">
              <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} required />
              <span>{c.consentLabel}</span>
            </label>

            <button type="submit" className="btn btn-primary rv-submit">
              {c.submitLabel}
              <Icon name="arrow" />
            </button>

            {submitted && (
              <p className="rv-form-note" role="status">
                {c.submitNote}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="rv-locations" id="coordonnees">
        <div className="container">
          <div className="rv-section-head">
            <span className="rv-eyebrow">{c.locationsEyebrow}</span>
            <h2>{c.locationsTitle}</h2>
            <p>{c.locationsSubtitle}</p>
          </div>

          <div className="rv-location-grid">
            {locations.map((location, index) => {
              const localLocation = location[lang];

              return (
                <article className={`rv-location-card ${location.mapEmbedUrl ? '' : 'is-pending'}`} key={location.id} style={{ animationDelay: `${index * 90}ms` }}>
                  <div className="rv-map-frame">
                    {location.mapEmbedUrl ? (
                      <iframe
                        title={localLocation.mapTitle}
                        src={location.mapEmbedUrl}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    ) : (
                      <div className="rv-map-placeholder" aria-label={localLocation.mapTitle}>
                        <span>
                          <Icon name="pin" />
                        </span>
                        <strong>{localLocation.mapPendingTitle}</strong>
                        <p>{localLocation.mapPendingBody}</p>
                      </div>
                    )}
                  </div>

                  <div className="rv-location-body">
                    <span className="rv-location-kicker">{localLocation.kicker}</span>
                    <h3>{localLocation.name}</h3>
                    <p className="rv-location-address">
                      <Icon name="pin" />
                      <span>{localLocation.address}</span>
                    </p>
                    <p className="rv-location-line">
                      <Icon name="clock" />
                      <span>{localLocation.hours}</span>
                    </p>
                    <div className="rv-location-phones">
                      {localLocation.phones.map((phone) => (
                        <a className="rv-location-line rv-location-phone-link" href={`tel:${phone.tel}`} key={phone.tel}>
                          <Icon name="phone" />
                          <span>{phone.display}</span>
                        </a>
                      ))}
                    </div>

                    {location.mapUrl ? (
                      <a className="rv-map-link" href={location.mapUrl} target="_blank" rel="noreferrer">
                        {c.openMapLabel}
                        <Icon name="route" />
                      </a>
                    ) : (
                      <span className="rv-map-link is-disabled">
                        {c.mapPendingLabel}
                        <Icon name="route" />
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
