import PageShell from '../../../components/PageShell/PageShell';
import Placeholder from '../../../components/PageShell/Placeholder';
import { useLanguage } from '../../../i18n/LanguageContext';

// STUB PAGE — header and footer are already wired via PageShell.
// Replace the <Placeholder /> below with real content for this page.
const pageNames = { fr: "Nos Services — Vue d'Ensemble", en: 'Our Services — Overview' };

export default function Overview() {
  const { lang } = useLanguage();
  return (
    <PageShell>
      <Placeholder pageName={pageNames[lang]} />
    </PageShell>
  );
}
