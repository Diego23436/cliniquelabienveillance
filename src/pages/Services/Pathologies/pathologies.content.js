// Local content for the "Pathologies Traitées" / "Conditions We Treat" page only —
// owned by this page's developer.
//
// NOTE: category illustration images are expected at:
//   /pathologies/{category.id}.png
// (e.g. /pathologies/cardiovascular.png). Drop the clinic's real
// illustrations there using the same file names as the ids below — nothing
// else needs to change. Until then the <img> will just 404 gracefully behind
// the icon badge, which still carries the card.

export const categories = [
  {
    id: 'cardiovascular',
    icon: 'heart',
    fr: {
      title: 'Maladies Cardiovasculaires',
      items: ['Hypertension artérielle', 'Insuffisance cardiaque', 'Arythmie', 'Maladie coronarienne'],
    },
    en: {
      title: 'Cardiovascular Diseases',
      items: ['Hypertension', 'Heart failure', 'Arrhythmia', 'Coronary artery disease'],
    },
  },
  {
    id: 'respiratory',
    icon: 'lungs',
    fr: {
      title: 'Maladies Respiratoires',
      items: ['Asthme', 'Pneumonie', 'Bronchite chronique', 'BPCO'],
    },
    en: {
      title: 'Respiratory Diseases',
      items: ['Asthma', 'Pneumonia', 'Chronic bronchitis', 'COPD'],
    },
  },
  {
    id: 'neurological',
    icon: 'brain',
    fr: {
      title: 'Troubles Neurologiques',
      items: ['Accident vasculaire cérébral', 'Épilepsie', 'Migraine', 'Maladie de Parkinson'],
    },
    en: {
      title: 'Neurological Disorders',
      items: ['Stroke', 'Epilepsy', 'Migraine', "Parkinson's disease"],
    },
  },
  {
    id: 'endocrine',
    icon: 'droplet',
    fr: {
      title: 'Troubles Endocriniens',
      items: ['Diabète', 'Maladies de la thyroïde', 'Déséquilibre hormonal'],
    },
    en: {
      title: 'Endocrine Disorders',
      items: ['Diabetes', 'Thyroid diseases', 'Hormonal imbalance'],
    },
  },
  {
    id: 'bone-joint',
    icon: 'bone',
    imageFile: 'articulaire.png',
    fr: {
      title: 'Troubles Osseux & Articulaires',
      items: ['Arthrite', 'Ostéoporose', 'Douleurs dorsales', 'Fractures'],
    },
    en: {
      title: 'Bone & Joint Disorders',
      items: ['Arthritis', 'Osteoporosis', 'Back pain', 'Fractures'],
    },
  },
  {
    id: 'pediatric',
    icon: 'baby',
    imageFile: 'pedriatique.png',
    fr: {
      title: 'Maladies Pédiatriques',
      items: ['Infections infantiles', 'Malnutrition', 'Troubles de la croissance'],
    },
    en: {
      title: 'Pediatric Diseases',
      items: ['Childhood infections', 'Malnutrition', 'Growth disorders'],
    },
  },
  {
    id: 'womens-health',
    icon: 'female',
    imageFile: 'maladie de femme.png',
    fr: {
      title: 'Santé de la Femme',
      items: ['Fibromes', 'SOPK', 'Troubles cervicaux', 'Complications de grossesse'],
    },
    en: {
      title: "Women's Health",
      items: ['Fibroids', 'PCOS', 'Cervical disorders', 'Pregnancy complications'],
    },
  },
  {
    id: 'mens-health',
    icon: 'male',
    imageFile: "maladie de l'homme.png",
    fr: {
      title: "Santé de l'Homme",
      items: ['Maladies de la prostate', 'Dysfonction érectile', 'Infertilité masculine'],
    },
    en: {
      title: "Men's Health",
      items: ['Prostate diseases', 'Erectile dysfunction', 'Male infertility'],
    },
  },
  {
    id: 'infectious',
    icon: 'virus',
    fr: {
      title: 'Maladies Infectieuses',
      items: ['Paludisme', 'Fièvre typhoïde', 'Tuberculose', 'Prise en charge du VIH'],
    },
    en: {
      title: 'Infectious Diseases',
      items: ['Malaria', 'Typhoid fever', 'Tuberculosis', 'HIV management'],
    },
  },
  {
    id: 'digestive',
    icon: 'stomach',
    fr: {
      title: 'Troubles Digestifs',
      items: ['Gastrite', 'Ulcères', 'Hépatite', 'Calculs biliaires'],
    },
    en: {
      title: 'Digestive Disorders',
      items: ['Gastritis', 'Ulcers', 'Hepatitis', 'Gallstones'],
    },
  },
];

export const symptoms = [
  { id: 'fever', icon: 'thermometer', fr: 'Fièvre persistante', en: 'Persistent fever' },
  { id: 'chest-pain', icon: 'heart', fr: 'Douleur thoracique', en: 'Chest pain' },
  { id: 'breath', icon: 'wind', fr: 'Essoufflement', en: 'Shortness of breath' },
  { id: 'cough', icon: 'lungs', fr: 'Toux chronique', en: 'Chronic cough' },
  { id: 'headache', icon: 'headache', fr: 'Maux de tête sévères', en: 'Severe headaches' },
  { id: 'abdominal-pain', icon: 'stomach', fr: 'Douleurs abdominales', en: 'Abdominal pain' },
  { id: 'weight-loss', icon: 'trendingDown', fr: 'Perte de poids', en: 'Weight loss' },
  { id: 'fatigue', icon: 'batteryLow', fr: 'Fatigue', en: 'Fatigue' },
  { id: 'joint-pain', icon: 'bone', fr: 'Douleurs articulaires', en: 'Joint pain' },
  { id: 'rash', icon: 'rash', fr: 'Éruptions cutanées', en: 'Skin rashes' },
];

export const diagnostics = [
  { id: 'lab-tests', icon: 'flask', fr: 'Tests de laboratoire', en: 'Laboratory tests' },
  { id: 'blood-analysis', icon: 'droplet', fr: 'Analyse sanguine', en: 'Blood analysis' },
  { id: 'imaging', icon: 'scan', fr: 'Imagerie médicale', en: 'Medical imaging' },
  { id: 'ultrasound', icon: 'radioWaves', fr: 'Échographie', en: 'Ultrasound' },
  { id: 'ecg', icon: 'pulseLine', fr: 'ECG', en: 'ECG' },
  { id: 'ct-scan', icon: 'ctScan', fr: 'Scanner (CT Scan)', en: 'CT Scan' },
  { id: 'mri', icon: 'mri', fr: 'IRM', en: 'MRI' },
  { id: 'biopsy', icon: 'syringe', fr: 'Biopsie', en: 'Biopsy' },
  { id: 'specialist', icon: 'stethoscope', fr: 'Consultation spécialisée', en: 'Specialist consultation' },
];

export const process = [
  {
    id: 'appointment',
    icon: 'calendar',
    fr: { title: 'Rendez-vous', body: 'Prise de rendez-vous rapide, en ligne ou par téléphone.' },
    en: { title: 'Appointment', body: 'Quick booking, online or by phone.' },
  },
  {
    id: 'consultation',
    icon: 'stethoscope',
    fr: { title: 'Consultation Médicale', body: 'Un médecin vous examine et recueille vos antécédents.' },
    en: { title: 'Medical Consultation', body: 'A doctor examines you and reviews your history.' },
  },
  {
    id: 'diagnosis',
    icon: 'diagnosisSearch',
    fr: { title: 'Diagnostic', body: 'Examens ciblés pour identifier précisément la cause.' },
    en: { title: 'Diagnosis', body: 'Targeted tests to pinpoint the exact cause.' },
  },
  {
    id: 'treatment-plan',
    icon: 'clipboard',
    fr: { title: 'Plan de Traitement', body: 'Un protocole de soins adapté à votre situation.' },
    en: { title: 'Treatment Plan', body: 'A care protocol tailored to your situation.' },
  },
  {
    id: 'follow-up',
    icon: 'calendarCheck',
    fr: { title: 'Suivi Post-traitement', body: 'Un accompagnement continu jusqu\u2019au rétablissement.' },
    en: { title: 'Follow-up Care', body: 'Ongoing support all the way to recovery.' },
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Pathologies Traitées',
    eyebrow: 'Nos Services',
    title: 'Pathologies Traitées',
    tagline: 'Votre Santé Avant Tout',
    intro:
      "Chaque problème de santé mérite un diagnostic précoce et un traitement personnalisé. Notre équipe pluridisciplinaire propose des soins fondés sur des données probantes, pour les pathologies courantes comme complexes, afin que chaque patient reçoive l\u2019attention qu\u2019il mérite.",
    liveBadge: 'Diagnostic et prise en charge, jour et nuit',

    categoriesEyebrow: 'Explorer',
    categoriesTitle: 'Parcourir par Catégorie',
    categoriesSubtitle: 'Sélectionnez un domaine pour voir les pathologies prises en charge par notre équipe.',

    symptomsEyebrow: 'Soyez Attentif',
    symptomsTitle: 'Symptômes Courants',
    symptomsSubtitle: 'Ressentez-vous l\u2019un de ces signes ?',
    symptomsNote: 'La présence d\u2019un ou plusieurs de ces symptômes justifie une consultation rapide.',

    diagnosticsEyebrow: 'Notre Méthode',
    diagnosticsTitle: 'Comment Nous Diagnostiquons',
    diagnosticsSubtitle: 'Un plateau technique complet pour un diagnostic fiable, sans délai.',

    processEyebrow: 'Prise en Charge',
    processTitle: 'Notre Processus de Soins',
    processSubtitle: 'De la première consultation au suivi, un parcours clair à chaque étape.',

    ctaTitle: 'Un Symptôme Vous Inquiète ?',
    ctaBody: 'Prenez rendez-vous dès maintenant et bénéficiez d\u2019un diagnostic rapide, réalisé par notre équipe pluridisciplinaire.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Conditions We Treat',
    eyebrow: 'Our Services',
    title: 'Conditions We Treat',
    tagline: 'Your Health Comes First',
    intro:
      'Every health condition deserves early diagnosis and personalized treatment. Our multidisciplinary team provides evidence-based care for both common and complex diseases, ensuring every patient receives the attention they deserve.',
    liveBadge: 'Diagnosis and care, day and night',

    categoriesEyebrow: 'Explore',
    categoriesTitle: 'Browse by Category',
    categoriesSubtitle: 'Choose an area to see the conditions our team manages.',

    symptomsEyebrow: 'Stay Alert',
    symptomsTitle: 'Common Symptoms',
    symptomsSubtitle: 'Are you experiencing any of these?',
    symptomsNote: 'Any one of these symptoms is a good reason to book a consultation soon.',

    diagnosticsEyebrow: 'Our Method',
    diagnosticsTitle: 'How We Diagnose',
    diagnosticsSubtitle: 'A full diagnostic platform for a reliable answer, without delay.',

    processEyebrow: 'Care Journey',
    processTitle: 'Our Care Process',
    processSubtitle: 'From first consultation to follow-up, a clear path at every step.',

    ctaTitle: 'Worried About a Symptom?',
    ctaBody: 'Book an appointment now and get a fast, personalized diagnosis from our multidisciplinary team.',
    ctaButton: 'Book an Appointment',
  },
};
