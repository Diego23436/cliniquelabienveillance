import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
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
          <p>{t('footer.address1.label')}<br />
            {/* DEFAULT — replace/confirm with owner */}
            3P8J+6WV, Petit Marché, Bepanda, Douala
          </p>
          <p>{t('footer.address2.label')}<br />
            {t('footer.address2.value')}
          </p>
          <p>
            Tél / Phone: <a href="tel:+237699615098">+237 699 61 50 98</a><br />
            Urgences / Emergency: <a href="tel:+237674621928">+237 674 62 19 28</a>
          </p>
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
