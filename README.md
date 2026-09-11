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

## Gestion du contenu et déploiement Cloudflare

La page d'accueil contient maintenant un carrousel d'actualités avec un mode
de secours local. Les quatre photos `public/event1.jpg` à `public/event4.jpg`
s'affichent immédiatement. Une fois D1 activé, le carrousel utilise les
événements publiés par l'API.

Le dossier `functions/` contient les Pages Functions et `migrations/` contient
le schéma D1. Le panneau `/admin` est volontairement inutilisable tant que
Cloudflare Access, D1 et R2 ne sont pas configurés.

### Ce qu'il reste à faire dans Cloudflare, dans l'ordre

1. Créer une base D1 : `npx wrangler d1 create clinique-content`.
2. Copier `wrangler.toml.example` vers `wrangler.toml` et remplacer l'identifiant D1.
3. Appliquer les migrations `0001_content.sql` a `0007_seed_existing_team.sql` dans D1, dans cet ordre. Avec Wrangler : `npx wrangler d1 migrations apply clinique-content --remote`.
4. Créer le bucket R2 : `npx wrangler r2 bucket create clinique-media`.
5. Dans le projet Pages, ouvrir Settings > Functions > Bindings et ajouter les bindings `DB` (D1) et `BUCKET` (R2), puis redéployer.
6. Dans Pages > Settings > Environment variables, ajouter `ADMIN_API_ENABLED=true`.
7. Activer Cloudflare Access avec One-time PIN et créer une application Self-hosted pour le chemin `/admin*` ainsi qu'une seconde règle pour `/api/admin*`. Autoriser uniquement l'adresse email du gérant.
8. Ajouter les variables `CF_ACCESS_TEAM_DOMAIN`, `CF_ACCESS_AUDIENCE` et, recommandé, `CF_ACCESS_ALLOWED_EMAIL` dans l'environnement Pages.
9. Si les vidéos sont nécessaires, activer Cloudflare Stream, créer un API token limité à Stream Write, puis ajouter `CF_ACCOUNT_ID` et `CF_STREAM_API_TOKEN` comme secrets Pages. Le téléchargement utilise une URL temporaire Stream, jamais un token dans React.
10. Déployer via Git ou `npx wrangler pages deploy dist --project-name <nom-du-projet>` après un `npm run build`.

Les routes publiques sont `GET /api/events` et les routes de gestion sont
`/api/admin/events`, `/api/admin/announcements`, `/api/admin/team`,
`/api/admin/gallery` et `/api/admin/contacts`. Les images R2 sont servies par
`/media/*`.

Le plan gratuit doit être confirmé dans le tableau de bord Cloudflare avant
d'activation, notamment pour les limites D1, R2, Stream et les utilisateurs
Access. Ne publiez pas l'API admin avec `ADMIN_API_ENABLED=true` avant d'avoir
créé les règles Access correspondantes.
