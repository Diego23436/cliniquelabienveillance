import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const insuranceLogos = [
    { name: 'Royal Onyx Assurance', src: '/insurances/royal-onyx.png' },
    { name: 'Activa Assurance', src: '/insurances/activa-assurance.png' },
    { name: 'Saham/Allianz Assurance', src: '/insurances/saham-allianz.png' },
    { name: 'Generalia Assurance', src: '/insurances/generalia-assurance.png' },
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61557558487217&mibextid=wwXIfr', svg: (
      <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.7c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.4h2.2l-.4 2.9h-1.8v7A10 10 0 0 0 22 12Z" fill="currentColor"/></svg>
    )},
    { name: 'TikTok', url: 'https://www.tiktok.com/@clinique.bienveillance?_r=1&_t=ZS-98nQW4FMtpB', svg: (
      <svg viewBox="0 0 24 24" className="footer-social-icon" aria-hidden="true"><path d="M16.2 3.2h2.2c0 2.8 2.1 5.1 4.9 5.4v2.1a7 7 0 0 1-7.1-7.5Zm-5.7 1.1h2.4v10.4a4.8 4.8 0 1 1-2.4-4.1V4.3Zm-3 5.6a2.4 2.4 0 1 0 2.4 2.4 2.4 2.4 0 0 0-2.4-2.4Z" fill="currentColor"/></svg>
    )},
  ];

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
          <p>{t('footer.address1.label')}<br />
            Ancienne gare routière, Dakar, Douala
          </p>
          <p>{t('footer.address2.label')}<br />
            {t('footer.address2.value')}
          </p>
          <p>
            Tél / Phone: <a href="tel:+237670103404">+237 670 103 404</a><br />
            Urgences / Emergency: <a href="tel:+237693321684">+237 693 32 16 84</a>
          </p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.hours')}</h4>
          <p>{t('footer.hours.value')}</p>
        </div>

        <div className="footer-col footer-insurances">
          <h4>{t('footer.insurances')}</h4>
          <div className="footer-insurance-logos">
            {insuranceLogos.map((item) => (
              <img
                key={item.name}
                className="footer-insurance-logo"
                src={item.src}
                alt={item.name}
                loading="lazy"
              />
            ))}
          </div>
          <h4>{t('footer.followUs')}</h4>
          <div className="footer-social">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                className="footer-social-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
              >
                {item.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {year} Clinique La Bienveillance. {t('footer.rights')}</span>
      </div>
    </footer>
  );
}
