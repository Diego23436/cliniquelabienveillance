import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';

import Accueil from './pages/Accueil/Accueil';
import Clinique from './pages/APropos/Clinique/Clinique';
import Equipe from './pages/APropos/Equipe/Equipe';
import ServicesOverview from './pages/Services/Overview/Overview';
import Pathologies from './pages/Services/Pathologies/Pathologies';
import Prevention from './pages/Services/Prevention/Prevention';
import Blog from './pages/Ressources/Blog/Blog';
import FAQ from './pages/Ressources/FAQ/FAQ';
import Temoignages from './pages/Temoignages/Temoignages';
import Galerie from './pages/Galerie/Galerie';
import RendezVous from './pages/Contact/RendezVous/RendezVous';
import Coordonnees from './pages/Contact/Coordonnees/Coordonnees';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />

          <Route path="/a-propos/clinique" element={<Clinique />} />
          <Route path="/a-propos/equipe" element={<Equipe />} />

          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/pathologies" element={<Pathologies />} />
          <Route path="/services/prevention" element={<Prevention />} />

          <Route path="/ressources/blog" element={<Blog />} />
          <Route path="/ressources/faq" element={<FAQ />} />

          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/galerie" element={<Galerie />} />

          <Route path="/contact/rendez-vous" element={<RendezVous />} />
          <Route path="/contact/coordonnees" element={<Coordonnees />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
