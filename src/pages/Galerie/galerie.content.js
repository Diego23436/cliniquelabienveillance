// Local bilingual content for the photo and video gallery page.
// Replace the video placeholder thumbnails with real video files when provided.

export const filters = [
  { id: 'all', fr: 'Tout', en: 'All' },
  { id: 'photo', fr: 'Photos', en: 'Photos' },
  { id: 'video', fr: 'Vidéos', en: 'Videos' },
  { id: 'clinic', fr: 'Clinique', en: 'Clinic' },
  { id: 'services', fr: 'Services', en: 'Services' },
  { id: 'prevention', fr: 'Prévention', en: 'Prevention' },
  { id: 'lab', fr: 'Laboratoire', en: 'Laboratory' },
];

export const mediaItems = [
  {
    id: 'clinic-reception',
    type: 'photo',
    category: 'clinic',
    src: '/team-hero.png',
    size: 'wide',
    featured: true,
    fr: {
      typeLabel: 'Photo',
      title: 'Accueil de la Clinique La Bienveillance',
      alt: 'Hall d’accueil lumineux de la Clinique La Bienveillance',
      description:
        'Un premier aperçu de l’espace d’accueil, pensé pour orienter les patients dès leur arrivée.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Clinique La Bienveillance reception',
      alt: 'Bright reception hall at Clinique La Bienveillance',
      description:
        'A first look at the reception area, designed to guide patients as soon as they arrive.',
    },
  },
  {
    id: 'care-pathway-video',
    type: 'video',
    category: 'clinic',
    src: '/service-banner.png',
    duration: '01:20',
    size: 'tall',
    fr: {
      typeLabel: 'Vidéo',
      title: 'Parcours patient en clinique',
      alt: 'Aperçu visuel du parcours patient à la clinique',
      description:
        'Une vidéo de présentation à remplacer par le fichier réel lorsque la clinique fournira ses contenus officiels.',
    },
    en: {
      typeLabel: 'Video',
      title: 'Patient journey inside the clinic',
      alt: 'Visual preview of the patient journey at the clinic',
      description:
        'A presentation video placeholder to replace with the real file when the clinic provides official media.',
    },
  },
  {
    id: 'services-overview',
    type: 'photo',
    category: 'services',
    src: '/service-banner.png',
    size: 'standard',
    fr: {
      typeLabel: 'Photo',
      title: 'Services coordonnés',
      alt: 'Espace de soins moderne représentant les services de la clinique',
      description:
        'Consultation, pharmacie, laboratoire et orientation familiale réunis dans un parcours simple.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Coordinated services',
      alt: 'Modern care space representing clinic services',
      description:
        'Consultation, pharmacy, laboratory, and family guidance gathered into a simple pathway.',
    },
  },
  {
    id: 'prevention-program',
    type: 'photo',
    category: 'prevention',
    src: '/prevention-banner.png',
    size: 'standard',
    fr: {
      typeLabel: 'Photo',
      title: 'Prévention & dépistage',
      alt: 'Bannière illustrant les programmes de prévention et dépistage',
      description:
        'Un visuel dédié aux bilans de santé, au dépistage précoce et au suivi préventif.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Prevention & screening',
      alt: 'Banner illustrating prevention and screening programs',
      description:
        'A visual dedicated to checkups, early screening, and preventive follow-up.',
    },
  },
  {
    id: 'pathology-care',
    type: 'photo',
    category: 'services',
    src: '/pathology-banner.png',
    size: 'wide',
    fr: {
      typeLabel: 'Photo',
      title: 'Pathologies prises en charge',
      alt: 'Bannière médicale représentant la prise en charge des pathologies',
      description:
        'Une vue d’ensemble des soins proposés pour les symptômes courants et maladies fréquentes.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Conditions treated',
      alt: 'Medical banner representing condition care',
      description:
        'An overview of care offered for common symptoms and frequent conditions.',
    },
  },
  {
    id: 'lab-video',
    type: 'video',
    category: 'lab',
    src: '/pathologies/endocrine.png',
    duration: '00:45',
    size: 'standard',
    fr: {
      typeLabel: 'Vidéo',
      title: 'Comprendre les analyses',
      alt: 'Aperçu vidéo sur les analyses médicales',
      description:
        'Un format vidéo court prévu pour expliquer la préparation aux examens et la lecture des résultats.',
    },
    en: {
      typeLabel: 'Video',
      title: 'Understanding lab tests',
      alt: 'Video preview about medical analyses',
      description:
        'A short video format planned to explain test preparation and result interpretation.',
    },
  },
  {
    id: 'respiratory-care',
    type: 'photo',
    category: 'services',
    src: '/pathologies/respiratory.png',
    size: 'standard',
    fr: {
      typeLabel: 'Photo',
      title: 'Santé respiratoire',
      alt: 'Illustration médicale liée aux pathologies respiratoires',
      description:
        'Repères visuels pour les consultations liées à la toux, l’essoufflement et les infections respiratoires.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Respiratory health',
      alt: 'Medical illustration related to respiratory conditions',
      description:
        'Visual reference for consultations related to cough, breathlessness, and respiratory infections.',
    },
  },
  {
    id: 'cardio-screening',
    type: 'photo',
    category: 'prevention',
    src: '/pathologies/cardiovascular.png',
    size: 'standard',
    fr: {
      typeLabel: 'Photo',
      title: 'Suivi cardiovasculaire',
      alt: 'Illustration médicale liée au suivi cardiovasculaire',
      description:
        'Support visuel pour les bilans de tension, cholestérol et prévention cardiovasculaire.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Cardiovascular follow-up',
      alt: 'Medical illustration related to cardiovascular follow-up',
      description:
        'Visual support for blood pressure, cholesterol, and cardiovascular prevention checkups.',
    },
  },
  {
    id: 'infection-care',
    type: 'photo',
    category: 'services',
    src: '/pathologies/infectious.jpeg',
    size: 'standard',
    fr: {
      typeLabel: 'Photo',
      title: 'Infections courantes',
      alt: 'Illustration médicale liée aux infections courantes',
      description:
        'Un visuel pour les informations de prévention, consultation et suivi des infections fréquentes.',
    },
    en: {
      typeLabel: 'Photo',
      title: 'Common infections',
      alt: 'Medical illustration related to common infections',
      description:
        'A visual for prevention, consultation, and follow-up information around frequent infections.',
    },
  },
  {
    id: 'neurology-care-video',
    type: 'video',
    category: 'services',
    src: '/pathologies/neurological.webp',
    duration: '00:55',
    size: 'standard',
    fr: {
      typeLabel: 'Vidéo',
      title: 'Quand consulter pour des maux de tête ?',
      alt: 'Aperçu vidéo lié aux symptômes neurologiques',
      description:
        'Un futur extrait vidéo éducatif pour reconnaître les signes qui nécessitent une consultation rapide.',
    },
    en: {
      typeLabel: 'Video',
      title: 'When to consult for headaches?',
      alt: 'Video preview related to neurological symptoms',
      description:
        'A future educational video excerpt for recognizing signs that require prompt consultation.',
    },
  },
];

export const highlights = [
  {
    id: 'real-spaces',
    icon: 'clinic',
    fr: {
      title: 'Espaces réels',
      body: 'La galerie utilise des visuels liés à la clinique et pourra recevoir les photos officielles au fur et à mesure.',
    },
    en: {
      title: 'Real spaces',
      body: 'The gallery uses visuals related to the clinic and can receive official photos as they become available.',
    },
  },
  {
    id: 'service-context',
    icon: 'service',
    fr: {
      title: 'Contexte des soins',
      body: 'Chaque média est relié à un service ou à un moment du parcours patient.',
    },
    en: {
      title: 'Care context',
      body: 'Each media item is connected to a service or a moment in the patient journey.',
    },
  },
  {
    id: 'privacy',
    icon: 'shield',
    fr: {
      title: 'Respect de la confidentialité',
      body: 'Aucun visage ou contenu sensible n’est publié sans validation explicite.',
    },
    en: {
      title: 'Privacy first',
      body: 'No face or sensitive content is published without explicit validation.',
    },
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Galerie Photo / Vidéo',
    eyebrow: 'Témoignages & Galerie',
    title: 'Galerie Photo / Vidéo',
    tagline: 'Voir les espaces, les services et les repères du parcours patient',
    intro:
      'Parcourez les visuels de la clinique, des services, de la prévention et des contenus vidéo prévus pour mieux préparer votre visite.',
    liveBadge: 'Photos et aperçus vidéo organisés par service',

    featuredEyebrow: 'Média mis en avant',
    featuredTitle: 'Un premier regard sur la clinique',
    featuredSubtitle:
      'La galerie commence par l’espace d’accueil, premier point de contact entre le patient et l’équipe.',

    libraryEyebrow: 'Bibliothèque visuelle',
    libraryTitle: 'Explorer la galerie',
    librarySubtitle: 'Filtrez les photos et aperçus vidéo selon le type de média ou le service.',
    filterLabel: 'Filtrer la galerie',
    openMedia: 'Voir le média',
    openLabel: 'Ouvrir',
    closeLabel: 'Fermer le média',
    videoNote: 'Aperçu vidéo : le fichier officiel pourra être intégré lorsque la clinique le fournira.',

    categoryLabels: {
      clinic: 'Clinique',
      services: 'Services',
      prevention: 'Prévention',
      lab: 'Laboratoire',
    },

    highlightsEyebrow: 'Publication responsable',
    highlightsTitle: 'Une galerie utile, pas décorative',
    highlightsSubtitle:
      'L’objectif est d’aider les patients à visualiser le lieu, comprendre les services et se sentir mieux préparés.',

    ctaTitle: 'Vous souhaitez visiter ou consulter ?',
    ctaBody: 'Prenez rendez-vous et échangez avec l’équipe sur le service adapté à votre besoin.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Photo / Video Gallery',
    eyebrow: 'Testimonials & Gallery',
    title: 'Photo / Video Gallery',
    tagline: 'See spaces, services, and patient journey landmarks',
    intro:
      'Browse visuals of the clinic, services, prevention topics, and planned video content to better prepare your visit.',
    liveBadge: 'Photos and video previews organized by service',

    featuredEyebrow: 'Featured media',
    featuredTitle: 'A first look at the clinic',
    featuredSubtitle:
      'The gallery begins with the reception area, the first point of contact between patient and team.',

    libraryEyebrow: 'Visual library',
    libraryTitle: 'Explore the gallery',
    librarySubtitle: 'Filter photos and video previews by media type or service.',
    filterLabel: 'Filter the gallery',
    openMedia: 'View media',
    openLabel: 'Open',
    closeLabel: 'Close media',
    videoNote: 'Video preview: the official file can be integrated when the clinic provides it.',

    categoryLabels: {
      clinic: 'Clinic',
      services: 'Services',
      prevention: 'Prevention',
      lab: 'Laboratory',
    },

    highlightsEyebrow: 'Responsible publishing',
    highlightsTitle: 'A useful gallery, not decoration',
    highlightsSubtitle:
      'The goal is to help patients visualize the place, understand services, and feel better prepared.',

    ctaTitle: 'Would you like to visit or consult?',
    ctaBody: 'Book an appointment and discuss the service best suited to your need with the team.',
    ctaButton: 'Book an Appointment',
  },
};
