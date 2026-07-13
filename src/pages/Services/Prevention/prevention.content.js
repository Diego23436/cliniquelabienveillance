// Local content for the "Prévention & Dépistage" / "Prevention & Screening"
// page only — owned by this page's developer.
//
// NOTE: category illustration images are expected at:
//   /public/prevention/{category.id}.png
// (e.g. /public/prevention/cardio-screening.png). Drop the clinic's real
// illustrations there using the same file names as the ids below — nothing
// else needs to change. Until then the <img> fails gracefully behind the
// icon badge, same convention as the Pathologies page.

export const categories = [
  {
    id: 'cardio-screening',
    icon: 'heart',
    fr: {
      title: 'Dépistage Cardiovasculaire',
      items: ['Tension artérielle', 'Cholestérol', 'ECG de repos'],
    },
    en: {
      title: 'Cardiovascular Screening',
      items: ['Blood pressure', 'Cholesterol', 'Resting ECG'],
    },
  },
  {
    id: 'diabetes-screening',
    icon: 'droplet',
    fr: {
      title: 'Dépistage du Diabète',
      items: ['Glycémie à jeun', 'Hémoglobine glyquée (HbA1c)', 'Dépistage précoce'],
    },
    en: {
      title: 'Diabetes Screening',
      items: ['Fasting blood sugar', 'HbA1c test', 'Early detection'],
    },
  },
  {
    id: 'cancer-screening',
    icon: 'shieldCheck',
    fr: {
      title: 'Dépistage des Cancers',
      items: ['Cancer du sein', 'Cancer du col de l\u2019utérus', 'Cancer de la prostate', 'Cancer colorectal'],
    },
    en: {
      title: 'Cancer Screening',
      items: ['Breast cancer', 'Cervical cancer', 'Prostate cancer', 'Colorectal cancer'],
    },
  },
  {
    id: 'vaccination',
    icon: 'syringe',
    fr: {
      title: 'Vaccination',
      items: ['Vaccination infantile', 'Rappels pour adultes', 'Vaccins de voyage'],
    },
    en: {
      title: 'Vaccination',
      items: ['Childhood vaccination', 'Adult boosters', 'Travel vaccines'],
    },
  },
  {
    id: 'maternal-child',
    icon: 'baby',
    fr: {
      title: 'Santé Maternelle & Infantile',
      items: ['Suivi de grossesse', 'Planification familiale', 'Croissance de l\u2019enfant'],
    },
    en: {
      title: 'Maternal & Child Health',
      items: ['Prenatal follow-up', 'Family planning', 'Child growth monitoring'],
    },
  },
  {
    id: 'general-checkup',
    icon: 'stethoscope',
    fr: {
      title: 'Bilan de Santé Général',
      items: ['Bilan sanguin complet', 'Examen physique complet', 'Bilan nutritionnel'],
    },
    en: {
      title: 'General Health Checkup',
      items: ['Full blood panel', 'Complete physical exam', 'Nutritional assessment'],
    },
  },
];

export const lifeStages = [
  {
    id: 'children',
    icon: 'baby',
    fr: { title: 'Enfants (0–12 ans)', body: 'Vaccination, suivi de croissance et dépistage nutritionnel.' },
    en: { title: 'Children (0–12 yrs)', body: 'Vaccination, growth tracking, and nutrition screening.' },
  },
  {
    id: 'adolescents',
    icon: 'personGeneric',
    fr: { title: 'Adolescents (13–19 ans)', body: 'Rappels vaccinaux, vision, audition et santé mentale.' },
    en: { title: 'Adolescents (13–19 yrs)', body: 'Vaccine boosters, vision, hearing, and mental health.' },
  },
  {
    id: 'adults',
    icon: 'personGeneric',
    fr: { title: 'Adultes (20–44 ans)', body: 'Tension, cholestérol, IST et santé reproductive.' },
    en: { title: 'Adults (20–44 yrs)', body: 'Blood pressure, cholesterol, STIs, and reproductive health.' },
  },
  {
    id: 'pregnant',
    icon: 'pregnant',
    fr: { title: 'Femmes Enceintes', body: 'Suivi prénatal, échographies et dépistage du diabète gestationnel.' },
    en: { title: 'Pregnant Women', body: 'Prenatal follow-up, ultrasounds, and gestational diabetes screening.' },
  },
  {
    id: 'midlife',
    icon: 'shieldCheck',
    fr: { title: 'Adultes 45 ans et +', body: 'Dépistage renforcé des cancers, du diabète et des maladies cardiovasculaires.' },
    en: { title: 'Adults 45+ yrs', body: 'Increased screening for cancer, diabetes, and cardiovascular disease.' },
  },
  {
    id: 'seniors',
    icon: 'cane',
    fr: { title: 'Seniors (60 ans et +)', body: 'Ostéoporose, troubles cognitifs et bilans réguliers.' },
    en: { title: 'Seniors (60 yrs and up)', body: 'Osteoporosis, cognitive health, and regular checkups.' },
  },
];

export const benefits = [
  { id: 'early-detection', icon: 'diagnosisSearch', fr: 'Détection précoce', en: 'Early detection' },
  { id: 'better-treatment', icon: 'clipboard', fr: 'Traitement plus efficace', en: 'More effective treatment' },
  { id: 'fewer-complications', icon: 'shieldCheck', fr: 'Moins de complications', en: 'Fewer complications' },
  { id: 'peace-of-mind', icon: 'heart', fr: 'Tranquillité d\u2019esprit', en: 'Peace of mind' },
  { id: 'personalized-followup', icon: 'calendarCheck', fr: 'Suivi personnalisé', en: 'Personalized follow-up' },
  { id: 'long-term-savings', icon: 'trendingDown', fr: 'Économies sur le long terme', en: 'Long-term savings' },
];

export const process = [
  {
    id: 'appointment',
    icon: 'calendar',
    fr: { title: 'Prise de Rendez-vous', body: 'Réservez votre créneau de dépistage en ligne ou par téléphone.' },
    en: { title: 'Book an Appointment', body: 'Reserve your screening slot online or by phone.' },
  },
  {
    id: 'questionnaire',
    icon: 'clipboard',
    fr: { title: 'Questionnaire de Santé', body: 'Vos antécédents et facteurs de risque sont passés en revue.' },
    en: { title: 'Health Questionnaire', body: 'Your history and risk factors are reviewed.' },
  },
  {
    id: 'tests',
    icon: 'flask',
    fr: { title: 'Tests de Dépistage', body: 'Analyses et examens adaptés à votre profil.' },
    en: { title: 'Screening Tests', body: 'Tests and exams tailored to your profile.' },
  },
  {
    id: 'results',
    icon: 'diagnosisSearch',
    fr: { title: 'Résultats & Conseils', body: 'Explication claire des résultats et recommandations.' },
    en: { title: 'Results & Guidance', body: 'Clear explanation of results and recommendations.' },
  },
  {
    id: 'follow-up',
    icon: 'calendarCheck',
    fr: { title: 'Suivi Recommandé', body: 'Un calendrier de suivi adapté à vos besoins.' },
    en: { title: 'Recommended Follow-up', body: 'A follow-up schedule tailored to your needs.' },
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Prévention & Dépistage',
    eyebrow: 'Nos Services',
    title: 'Prévention & Dépistage',
    tagline: 'Prévenir Vaut Mieux Que Guérir',
    intro:
      "Un dépistage régulier permet de détecter les problèmes de santé avant même l\u2019apparition des symptômes. Notre équipe vous accompagne à chaque étape de la vie avec des programmes de prévention adaptés à votre âge et à votre profil de risque.",
    liveBadge: 'Programmes de dépistage disponibles toute la semaine',

    categoriesEyebrow: 'Nos Programmes',
    categoriesTitle: 'Programmes de Dépistage',
    categoriesSubtitle: 'Des bilans ciblés pour anticiper et prévenir les maladies les plus fréquentes.',

    stagesEyebrow: 'Selon Votre Profil',
    stagesTitle: 'Le Dépistage Selon Votre Âge',
    stagesSubtitle: 'Chaque étape de la vie a ses propres besoins de prévention.',

    benefitsEyebrow: 'Pourquoi Se Faire Dépister',
    benefitsTitle: 'Les Bénéfices du Dépistage',
    benefitsSubtitle: 'Un geste simple, des bénéfices durables pour votre santé.',

    processEyebrow: 'Étape par Étape',
    processTitle: 'Comment Se Faire Dépister',
    processSubtitle: 'Un parcours simple et rassurant, du premier contact au suivi.',

    ctaTitle: 'Prêt à Prendre les Devants ?',
    ctaBody: 'Réservez votre bilan de prévention dès aujourd\u2019hui et gardez une longueur d\u2019avance sur votre santé.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Prevention & Screening',
    eyebrow: 'Our Services',
    title: 'Prevention & Screening',
    tagline: 'Prevention Is Better Than Cure',
    intro:
      'Regular screening helps catch health issues before symptoms even appear. Our team supports you at every stage of life with prevention programs tailored to your age and risk profile.',
    liveBadge: 'Screening programs available every day of the week',

    categoriesEyebrow: 'Our Programs',
    categoriesTitle: 'Screening Programs',
    categoriesSubtitle: 'Targeted checkups to anticipate and prevent the most common diseases.',

    stagesEyebrow: 'By Your Profile',
    stagesTitle: 'Screening by Age Group',
    stagesSubtitle: 'Every stage of life has its own prevention needs.',

    benefitsEyebrow: 'Why Get Screened',
    benefitsTitle: 'The Benefits of Screening',
    benefitsSubtitle: 'One simple step, lasting benefits for your health.',

    processEyebrow: 'Step by Step',
    processTitle: 'How Screening Works',
    processSubtitle: 'A simple, reassuring path from first contact to follow-up.',

    ctaTitle: 'Ready to Get Ahead of It?',
    ctaBody: 'Book your prevention checkup today and stay one step ahead of your health.',
    ctaButton: 'Book an Appointment',
  },
};