import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { contactGroups } from '../../content/clinicContacts';
import './Footer.css';

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-col footer-brand">
          <img src="/logo.png" alt="Clinique La Bienveillance" />
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.quicklinks')}</h4>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/a-propos/clinique">{t('nav.about.clinic')}</Link>
          <Link to="/services">{t('nav.services')}</Link>
          <Link to="/contact/rendez-vous">{t('nav.contact.booking')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('footer.contact')}</h4>
          <div className="footer-contact-list">
            {contactGroups[lang].map((group) => (
              <div className="footer-contact-item" key={group.id}>
                <strong>{group.title}</strong>
                <span>{group.subtitle}</span>
                <div className="footer-contact-phones">
                  {group.phones.map((phone) => (
                    <a key={phone.tel} href={`tel:${phone.tel}`}>
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>{t('footer.hours')}</h4>
          <p>{t('footer.hours.value')}</p>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {year} Clinique La Bienveillance. {t('footer.rights')}</span>
      </div>
    </footer>
  );
}
