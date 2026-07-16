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
          <p>
            {t('footer.address1.label')}<br />
            Ancienne gare routière, Dakar, Douala
          </p>
          <p>
            {t('footer.address2.label')}<br />
            Yassa, centre de sante la bienveillance
          </p>
          <p>
            Tél 1: <a href="tel:+237693321684">+237 693 32 16 84</a><br />
            Tél 2: <a href="tel:+237670103404">+237 670 10 34 04</a><br />
            Tél 3: <a href="tel:+237699615098">+237 699 61 50 98</a>
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
