import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import './Navbar.css';

const NAV_ITEMS = [
  { to: '/', key: 'nav.home' },
  {
    key: 'nav.about',
    children: [
      { to: '/a-propos/clinique', key: 'nav.about.clinic' },
      { to: '/a-propos/equipe', key: 'nav.about.team' },
    ],
  },
  {
    key: 'nav.services',
    children: [
      { to: '/services', key: 'nav.services.overview' },
      { to: '/services/pathologies', key: 'nav.services.conditions' },
      { to: '/services/prevention', key: 'nav.services.prevention' },
    ],
  },
  {
    key: 'nav.resources',
    children: [
      { to: '/ressources/blog', key: 'nav.resources.blog' },
      { to: '/ressources/faq', key: 'nav.resources.faq' },
    ],
  },
  {
    key: 'nav.testimonials',
    children: [
      { to: '/temoignages', key: 'nav.testimonials.reviews' },
      { to: '/galerie', key: 'nav.testimonials.gallery' },
    ],
  },
  { to: '/contact/rendez-vous', key: 'nav.contact' },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Clinique La Bienveillance" />
          <span>La Bienveillance</span>
        </Link>

        <nav className={`navbar-links ${mobileOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.key}
              className={`navbar-item ${item.children ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.children && setOpenDropdown(item.key)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button
                    className="navbar-link navbar-dropdown-toggle"
                    onClick={() => setOpenDropdown(openDropdown === item.key ? null : item.key)}
                    aria-expanded={openDropdown === item.key}
                  >
                    {t(item.key)}
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className={`navbar-dropdown ${openDropdown === item.key ? 'is-open' : ''}`}>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="navbar-dropdown-link"
                        onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                      >
                        {t(child.key)}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink to={item.to} className="navbar-link" onClick={() => setMobileOpen(false)}>
                  {t(item.key)}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="lang-switch"
            onClick={toggleLang}
            aria-label="Changer de langue / Switch language"
            title="Changer de langue / Switch language"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.7 15.7 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a8.14 8.14 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4H4.26Zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 0 1 5.07 16Zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.7 15.7 0 0 0 8.02 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.29 14H9.71a14.53 14.53 0 0 1 0-4h4.58a14.53 14.53 0 0 1 0 4Zm.4 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.5 16.5 0 0 0 0-4h3.38a8.14 8.14 0 0 1 0 4h-3.38Z" />
            </svg>
            {t('lang.switch')}
          </button>

          <button
            type="button"
            className="navbar-burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
