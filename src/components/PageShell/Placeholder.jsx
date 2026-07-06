import { useLanguage } from '../../i18n/LanguageContext';

// Drop this inside any stub page while it awaits its assigned developer.
// Usage: <Placeholder pageName="Nos Services" />
export default function Placeholder({ pageName }) {
  const { t } = useLanguage();
  return (
    <div className="page-placeholder">
      <span>🚧</span>
      <h2>{pageName}</h2>
      <h3>{t('placeholder.title')}</h3>
      <p>{t('placeholder.body')}</p>
    </div>
  );
}
