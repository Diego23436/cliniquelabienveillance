// Local bilingual content for the patient testimonials page.
// Patient identities are intentionally anonymized until the clinic provides
// explicit consent-backed names, photos, or video files.

export const categories = [
  { id: 'consultation', fr: 'Consultations', en: 'Consultations' },
  { id: 'emergency', fr: 'Urgences', en: 'Emergencies' },
  { id: 'lab', fr: 'Laboratoire', en: 'Laboratory' },
  { id: 'maternity', fr: 'Maternité', en: 'Maternity' },
  { id: 'pharmacy', fr: 'Pharmacie', en: 'Pharmacy' },
  { id: 'family', fr: 'Famille', en: 'Family' },
];

export const testimonials = [
  {
    id: 'night-emergency',
    category: 'emergency',
    icon: 'emergency',
    featured: true,
    fr: {
      author: 'Patient anonymisé',
      context: 'Urgence de nuit',
      quote:
        'Nous sommes arrivés tard, inquiets, et l’équipe nous a reçus avec calme. Les explications étaient claires du début à la fin.',
      detail:
        'Le patient souligne la rapidité de l’accueil, la présence de nuit et la façon dont l’équipe a pris le temps d’expliquer chaque étape de la prise en charge.',
    },
    en: {
      author: 'Anonymous patient',
      context: 'Night emergency',
      quote:
        'We arrived late and worried, and the team received us calmly. The explanations were clear from start to finish.',
      detail:
        'The patient highlights fast reception, nighttime availability, and the way the team explained each step of care.',
    },
  },
  {
    id: 'family-consultation',
    category: 'consultation',
    icon: 'consultation',
    fr: {
      author: 'Parent de patient',
      context: 'Consultation enfant',
      quote: 'Le médecin a pris le temps d’écouter les symptômes de mon enfant et de répondre à toutes mes questions.',
      detail:
        'Le parent retient surtout l’écoute, les conseils pratiques et l’orientation donnée pour surveiller l’évolution à la maison.',
    },
    en: {
      author: 'Patient parent',
      context: 'Child consultation',
      quote: 'The doctor took time to listen to my child’s symptoms and answer all my questions.',
      detail:
        'The parent especially remembers the attentive listening, practical advice, and guidance for monitoring symptoms at home.',
    },
  },
  {
    id: 'lab-results',
    category: 'lab',
    icon: 'lab',
    fr: {
      author: 'Patient anonymisé',
      context: 'Analyses médicales',
      quote: 'J’ai pu faire mes examens sur place et revenir rapidement avec les résultats pour la suite du traitement.',
      detail:
        'Le témoignage insiste sur la simplicité du parcours entre consultation, laboratoire et suivi médical.',
    },
    en: {
      author: 'Anonymous patient',
      context: 'Medical analyses',
      quote: 'I was able to do my tests on site and return quickly with results for the next step of treatment.',
      detail:
        'The story emphasizes the simple path between consultation, laboratory testing, and medical follow-up.',
    },
  },
  {
    id: 'pregnancy-followup',
    category: 'maternity',
    icon: 'maternity',
    fr: {
      author: 'Future maman',
      context: 'Suivi prénatal',
      quote: 'Je me suis sentie rassurée pendant le suivi. Les conseils étaient précis et donnés avec beaucoup de bienveillance.',
      detail:
        'La patiente met en avant la disponibilité de l’équipe, la clarté des recommandations et la qualité de l’accompagnement.',
    },
    en: {
      author: 'Expecting mother',
      context: 'Prenatal follow-up',
      quote: 'I felt reassured during follow-up. The advice was precise and given with real kindness.',
      detail:
        'The patient highlights team availability, clear recommendations, and supportive care.',
    },
  },
  {
    id: 'pharmacy-guidance',
    category: 'pharmacy',
    icon: 'pharmacy',
    fr: {
      author: 'Patient suivi',
      context: 'Conseil pharmacie',
      quote: 'La pharmacie m’a expliqué comment prendre mon traitement et les erreurs à éviter.',
      detail:
        'Le patient apprécie la continuité entre la prescription médicale et les conseils donnés au moment de récupérer le traitement.',
    },
    en: {
      author: 'Follow-up patient',
      context: 'Pharmacy guidance',
      quote: 'The pharmacy explained how to take my treatment and which mistakes to avoid.',
      detail:
        'The patient appreciated continuity between medical prescription and the advice given when collecting treatment.',
    },
  },
  {
    id: 'family-guidance',
    category: 'family',
    icon: 'family',
    fr: {
      author: 'Couple accompagné',
      context: 'Orientation familiale',
      quote: 'Nous avons reçu des réponses simples, sans jugement, et une orientation adaptée à notre situation.',
      detail:
        'Ce retour met en avant la confidentialité, l’écoute et l’accompagnement dans les décisions liées à la santé familiale.',
    },
    en: {
      author: 'Supported couple',
      context: 'Family guidance',
      quote: 'We received simple, non-judgmental answers and guidance adapted to our situation.',
      detail:
        'This feedback highlights confidentiality, listening, and support in decisions related to family health.',
    },
  },
  {
    id: 'adult-checkup',
    category: 'consultation',
    icon: 'consultation',
    fr: {
      author: 'Patient adulte',
      context: 'Bilan de santé',
      quote: 'La consultation était structurée. On m’a expliqué pourquoi certains examens étaient nécessaires.',
      detail:
        'Le patient retient la pédagogie du médecin et le fait de mieux comprendre son propre parcours de soins.',
    },
    en: {
      author: 'Adult patient',
      context: 'Health checkup',
      quote: 'The consultation was structured. They explained why some tests were necessary.',
      detail:
        'The patient remembers the doctor’s educational approach and better understanding their own care pathway.',
    },
  },
];

export const trustPoints = [
  {
    id: 'privacy',
    icon: 'shield',
    fr: {
      title: 'Confidentialité',
      body: 'Les témoignages publiés sont anonymisés tant qu’une autorisation explicite n’est pas fournie.',
    },
    en: {
      title: 'Confidentiality',
      body: 'Published testimonials are anonymized unless explicit consent is provided.',
    },
  },
  {
    id: 'listening',
    icon: 'heart',
    fr: {
      title: 'Écoute active',
      body: 'Les retours patients aident l’équipe à améliorer l’accueil, le suivi et la communication.',
    },
    en: {
      title: 'Active listening',
      body: 'Patient feedback helps the team improve reception, follow-up, and communication.',
    },
  },
  {
    id: 'quality',
    icon: 'clipboard',
    fr: {
      title: 'Amélioration continue',
      body: 'Chaque retour utile est transmis aux services concernés pour renforcer la qualité du parcours.',
    },
    en: {
      title: 'Continuous improvement',
      body: 'Useful feedback is shared with the relevant teams to strengthen the care journey.',
    },
  },
];

export const feedbackSteps = [
  {
    id: 'collect',
    fr: {
      title: 'Recueillir',
      body: 'Le patient partage son expérience après une consultation, un examen ou un suivi.',
    },
    en: {
      title: 'Collect',
      body: 'The patient shares their experience after a consultation, test, or follow-up.',
    },
  },
  {
    id: 'protect',
    fr: {
      title: 'Protéger',
      body: 'L’identité et les détails sensibles sont retirés avant toute publication.',
    },
    en: {
      title: 'Protect',
      body: 'Identity and sensitive details are removed before any publication.',
    },
  },
  {
    id: 'improve',
    fr: {
      title: 'Améliorer',
      body: 'Les enseignements sont utilisés pour rendre l’expérience patient plus fluide.',
    },
    en: {
      title: 'Improve',
      body: 'Lessons learned are used to make the patient experience smoother.',
    },
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Témoignages Patients',
    eyebrow: 'Témoignages & Galerie',
    title: 'Témoignages Patients',
    tagline: 'Des parcours de soins racontés avec simplicité',
    intro:
      'Découvrez des retours anonymisés de patients et de familles accompagnés par la Clinique La Bienveillance. Ces témoignages reflètent l’écoute, la disponibilité et la continuité du parcours de soins.',
    liveBadge: 'Retours anonymisés et respectueux de la confidentialité',

    featuredEyebrow: 'Expérience mise en avant',
    featuredTitle: 'Un retour qui résume notre engagement',
    featuredSubtitle: 'Une histoire courte, mais très représentative de ce que les patients attendent : être accueillis, compris et rassurés.',

    libraryEyebrow: 'Parcours patients',
    libraryTitle: 'Explorer les témoignages',
    librarySubtitle: 'Filtrez les retours selon le service ou le moment du parcours de soins.',
    filterLabel: 'Filtrer les témoignages par service',
    allStories: 'Tous les témoignages',
    ratingLabel: 'Note patient cinq étoiles',

    categoryLabels: {
      consultation: 'Consultation',
      emergency: 'Urgence',
      lab: 'Laboratoire',
      maternity: 'Maternité',
      pharmacy: 'Pharmacie',
      family: 'Famille',
    },

    trustEyebrow: 'Confiance',
    trustTitle: 'Comment nous traitons les retours patients',
    trustSubtitle: 'La confiance ne se décrète pas : elle se construit dans la confidentialité, l’écoute et l’amélioration continue.',

    processEyebrow: 'Méthode',
    processTitle: 'Du témoignage à l’amélioration du service',
    processSubtitle: 'Chaque retour aide la clinique à mieux comprendre ce qui rassure, ce qui freine et ce qui doit progresser.',

    ctaTitle: 'Vous souhaitez vivre une prise en charge attentive ?',
    ctaBody: 'Prenez rendez-vous avec l’équipe et échangez directement sur votre besoin de santé.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Patient Testimonials',
    eyebrow: 'Testimonials & Gallery',
    title: 'Patient Testimonials',
    tagline: 'Care journeys told with simplicity',
    intro:
      'Discover anonymized feedback from patients and families supported by Clinique La Bienveillance. These stories reflect listening, availability, and continuity of care.',
    liveBadge: 'Anonymized feedback with respect for confidentiality',

    featuredEyebrow: 'Featured experience',
    featuredTitle: 'A story that reflects our commitment',
    featuredSubtitle: 'A short but representative story of what patients expect: to be welcomed, understood, and reassured.',

    libraryEyebrow: 'Patient journeys',
    libraryTitle: 'Explore testimonials',
    librarySubtitle: 'Filter feedback by service or stage of the care journey.',
    filterLabel: 'Filter testimonials by service',
    allStories: 'All testimonials',
    ratingLabel: 'Five-star patient rating',

    categoryLabels: {
      consultation: 'Consultation',
      emergency: 'Emergency',
      lab: 'Laboratory',
      maternity: 'Maternity',
      pharmacy: 'Pharmacy',
      family: 'Family',
    },

    trustEyebrow: 'Trust',
    trustTitle: 'How we handle patient feedback',
    trustSubtitle: 'Trust is built through confidentiality, listening, and continuous improvement.',

    processEyebrow: 'Method',
    processTitle: 'From testimonial to service improvement',
    processSubtitle: 'Every response helps the clinic understand what reassures, what slows patients down, and what can improve.',

    ctaTitle: 'Would you like attentive care?',
    ctaBody: 'Book an appointment with the team and discuss your health need directly.',
    ctaButton: 'Book an Appointment',
  },
};
