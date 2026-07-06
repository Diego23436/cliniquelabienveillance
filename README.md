# Clinique La Bienveillance — Site Web

Site vitrine bilingue (FR/EN) pour la Clinique La Bienveillance, Douala.
Stack : **React + Vite + CSS pur** (pas de framework CSS externe).

## Démarrage

```bash
npm install
npm run dev
```

Le site tourne ensuite sur `http://localhost:5173`.

## Structure du projet

```
src/
  components/
    Navbar/         → menu + bouton de langue (FR/EN), partagé par toutes les pages
    Footer/         → pied de page, partagé par toutes les pages
    PageShell/       → wrapper qui garantit Navbar + Footer sur CHAQUE page
  i18n/
    LanguageContext.jsx  → logique de switch de langue (contexte global)
    translations.js       → textes globaux (menu, footer, placeholders)
  pages/
    Accueil/                    ✅ COMPLET
    APropos/Clinique/           ✅ COMPLET
    APropos/Equipe/             ⏳ à compléter
    Services/Overview/          ⏳ à compléter
    Services/Pathologies/       ⏳ à compléter
    Services/Prevention/        ⏳ à compléter
    Ressources/Blog/            ⏳ à compléter
    Ressources/FAQ/             ⏳ à compléter
    Temoignages/                ⏳ à compléter
    Galerie/                    ⏳ à compléter
    Contact/RendezVous/         ⏳ à compléter
    Contact/Coordonnees/        ⏳ à compléter
```

Chaque page vit dans **son propre dossier isolé** avec son propre `.jsx` et
son propre `.css`. Une page ne dépend jamais du fichier d'une autre page —
cela évite les conflits Git quand plusieurs personnes travaillent en parallèle.

## Règles pour l'équipe (à respecter)

1. **Ne touchez que les fichiers de votre page.** N'éditez pas
   `Navbar.jsx`, `Footer.jsx`, ou `index.css` sans en parler au groupe —
   ce sont les seuls fichiers partagés par tout le monde.
2. **Toute page, même vide, passe par `<PageShell>`** — c'est ce qui
   garantit que le header et le footer apparaissent partout, sans exception.
3. **Le contenu bilingue d'une page reste dans son propre fichier**
   (ex. `accueil.content.js`, `clinique.content.js`). Ne rajoutez pas vos
   textes de page dans `i18n/translations.js` — ce fichier est réservé
   aux éléments globaux (menu, footer).
4. **Couleurs et typographies** : tout est déjà défini comme variables
   CSS dans `src/index.css` (`--color-blue`, `--color-green`,
   `--color-off-white`, etc.). Utilisez ces variables plutôt que d'inventer
   de nouvelles couleurs.
5. **Convention de branche Git** suggérée : `feature/nom-page`
   (ex. `feature/services-overview`).

## Où remplacer les informations par défaut

Les informations suivantes sont des **placeholders réels** (tirés de la
fiche Google de la clinique) mais doivent être vérifiées/complétées :

- Adresse du second site (actuellement "à confirmer")
- Horaires du second site
- Réseaux sociaux (aucun lien pour l'instant)
- Formulaire de prise de rendez-vous (page `Contact/RendezVous` est un
  stub — logique d'envoi à définir : email, WhatsApp, ou formulaire connecté ?)

## Langue

Le bouton de langue est dans la barre de navigation (pastille bleue, coin
supérieur droit). Il bascule tout le site FR ⇄ EN instantanément et retient
le choix du visiteur (localStorage).
