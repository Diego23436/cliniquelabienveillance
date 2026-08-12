// Local content for the "Notre Équipe" page only.
// Team photos are expected at /pathologies/imgteam1.png ... /pathologies/imgteam10.png
// so you can drop in the real staff images later without changing the JSX.

export const departments = [
  { id: 'medecine', fr: 'Médecine Générale', en: 'General Medicine' },
  { id: 'soins', fr: 'Soins Infirmiers', en: 'Nursing Care' },
  { id: 'pharmacie', fr: 'Pharmacie', en: 'Pharmacy' },
  { id: 'labo', fr: 'Laboratoire', en: 'Laboratory' },
  { id: 'accueil', fr: 'Accueil & Orientation Familiale', en: 'Front Desk & Family Guidance' },
];

const CLINIC_PHONE_DISPLAY = '+237 677 60 90 56';
const CLINIC_PHONE_TEL = '+237677609056';
const CLINIC_PHONE_WA = '237677609056';

const rawMembers = [
  {
    name: 'Dr. Soh',
    dept: 'medecin, Obsteticien et Sante Reproductive  ',
    photo: '/imgteam1.jpg',
    whatsappLink: 'https://wa.me/237677609056',
    fr: {
      role: 'Médecin Généraliste',
      bio: 'Accompagnement global en médecine générale avec une spécialisation en santé reproductive et périnatale.',
    },
    en: {
      role: 'General Practitioner',
      bio: 'Comprehensive general practice care with a focus on reproductive and perinatal health.',
    },
  },
  {
    name: 'Dr. Negou Liliane',
    dept: 'medecin geraliste',
    photo: '/pathologies/imgteam2.jpg',
    whatsappLink: 'https://wa.me/237650128282',
    fr: {
      role: 'Médecin Généraliste',
      bio: 'Suivi des adultes et consultations de garde en soirée.',
    },
    en: {
      role: 'General Practitioner',
      bio: 'Adult follow-up care and evening on-call consultations.',
    },
  },
  {
    name: 'Dr Flaure Tchopda Epse Kamdoum ',
    dept: 'Laboratoire, Biologiste Médicale',
    photo: '/pathologies/imgteam3.jpg',
    whatsappLink: 'https://wa.me/237697791411',
    fr: {
      role: 'Biologiste Médicale',
      bio: 'Analyses de routine et remise des résultats sous 24h.',
    },
    en: {
      role: 'Medical Biologist',
      bio: 'Routine analyses with results delivered within 24 hours.',
    },
  },
  {
    name: 'Dr Tene Soh Dylan Parfait',
    dept: 'Medecin generaliste',
    photo: '/pathologies/imgteam4.png',
    whatsappLink: 'https://wa.me/237677609056',
    fr: {
      role: 'Médecin Généraliste',
      bio: 'Suivi des adultes et consultations de garde en soirée.',
    },
    en: {
      role: 'General Practitioner',
      bio: 'Adult follow-up care and evening on-call consultations.',
    },
  },
  {
    name: 'Hameni Romario',
    dept: 'Soin Obstretiques/ Maieuticien',
    photo: '/pathologies/imgteam5.png',
    whatsappLink: 'https://wa.me/237696641068',
    fr: {
      role: 'Sage-femme',
      bio: 'Accompagnement obstétrical complet et suivi prénatal pour les patientes et leurs familles.',
    },
    en: {
      role: 'Midwife',
      bio: 'Complete obstetric support and prenatal follow-up for patients and their families.',
    },
  },
  {
    name: 'Mme Fotso Valerie ',
    dept: 'Major',
    photo: '/pathologies/imgteam6.png',
    whatsappLink: 'https://wa.me/237699157869',
    fr: {
      role: 'Préparatrice en Pharmacie',
      bio: 'Coordination des préparations pharmaceutiques et suivi des stocks essentiels.',
    },
    en: {
      role: 'Pharmacy Assistant',
      bio: 'Coordinates pharmaceutical preparation and manages essential stock levels.',
    },
  },
  {
    name: 'Samen Ornella',
    dept: 'Pharmacie',
    photo: '/pathologies/imgteam7.png',
    whatsappLink: 'https://wa.me/237674299039',
    fr: {
      role: 'Technicienne de Laboratoire',
      bio: 'Assure le lien entre le laboratoire et la pharmacie pour la préparation des traitements.',
    },
    en: {
      role: 'Lab Technician',
      bio: 'Bridges the laboratory and pharmacy for treatment preparation.',
    },
  },
  {
    name: 'Tchassi Tsinkou Danielle',
    dept: 'Pharmacie principale',
    photo: '/pathologies/imgteam8.png',
    whatsappLink: 'https://wa.me/237693953876',
    fr: {
      role: 'Technicien de Laboratoire',
      bio: 'Spécialiste des prélèvements biologiques et du support technique en pharmacie principale.',
    },
    en: {
      role: 'Lab Technician',
      bio: 'Specializes in biological sampling and technical support for the main pharmacy.',
    },
  },
  
/* {
   name: 'Solange Ekwalla',
    dept: 'accueil',
    photo: '/pathologies/imgteam9.png',
    whatsappLink: 'https://wa.me/237677609056',
    fr: { role: 'Responsable Accueil & Orientation', bio: 'Premier contact et orientation vers le bon service.' },
    en: { role: 'Front Desk & Guidance Lead', bio: 'First point of contact, directing patients to the right service.' },
  },
  {
    name: 'Franck Assam',
    dept: 'accueil',
    photo: '/pathologies/imgteam10.png',
    whatsappLink: 'https://wa.me/237677609056',
    fr: { role: 'Agent d’Accueil', bio: 'Accompagnement administratif et prise de rendez-vous.' },
    en: { role: 'Front Desk Officer', bio: 'Administrative support and appointment scheduling.' },
  },
  */
];

function normalizeDept(dept) {
  const value = (dept || '').trim().toLowerCase();
  if (/medecin.*obsteticien|obstretiques|sante reproductive|reproductive|sante/i.test(value)) return 'medecine';
  if (/medecin.*generaliste|medecin generaliste|medecin geraliste|medecin/i.test(value)) return 'medecine';
  if (/laboratoire|biologiste/i.test(value)) return 'labo';
  if (/soin.*obstretiques|maieuticien|obstet/i.test(value)) return 'soins';
  if (/pharmacie|major/i.test(value)) return 'pharmacie';
  if (/accueil|orientation/i.test(value)) return 'accueil';
  return 'medecine';
}

function buildMembers(lang) {
  return rawMembers.map((member) => ({
    name: member.name,
    dept: normalizeDept(member.dept),
    rawDept: member.dept.trim(),
    photo: member.photo,
    whatsappLink: member.whatsappLink,
    role: member[lang].role,
    bio: member[lang].bio,
    phoneDisplay: CLINIC_PHONE_DISPLAY,
    phoneTel: CLINIC_PHONE_TEL,
    whatsapp: CLINIC_PHONE_WA,
  }));
} 
export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Notre Équipe',
    eyebrow: 'À Propos',
    title: 'Notre Équipe',
    tagline: 'Des professionnels dévoués à votre santé',
    intro:
      'Notre équipe multidisciplinaire met tout en œuvre pour vous offrir des soins de qualité, humains et personnalisés, à toute heure du jour et de la nuit.',
    liveBadge: 'Équipe disponible 24h/24, 7j/7',
    filterAll: 'Tous les services',
    filterToggle: 'Filtrer par service',
    members: buildMembers('fr'),
    commitmentTitle: 'Ce Que Notre Équipe Vous Doit',
    commitments: [
      { title: 'Écoute', body: 'Chaque symptôme, chaque inquiétude, pris au sérieux dès la première minute.' },
      { title: 'Rigueur', body: 'Des protocoles suivis avec précision, à chaque relève d’équipe.' },
      { title: 'Continuité', body: 'Une présence ininterrompue, sans rupture entre le jour et la nuit.' },
    ],
    ctaTitle: 'Une Question Pour Notre Équipe ?',
    ctaBody: 'Prenez rendez-vous et rencontrez directement le professionnel adapté à votre besoin.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Our Team',
    eyebrow: 'About Us',
    title: 'Our Team',
    tagline: 'Professionals devoted to your health',
    intro:
      'Our multidisciplinary team does everything possible to provide quality, human, personalized care around the clock.',
    liveBadge: 'Team available 24 hours a day, every day',
    filterAll: 'All departments',
    filterToggle: 'Filter by department',
    members: buildMembers('en'),
    commitmentTitle: 'What Our Team Owes You',
    commitments: [
      { title: 'Attentiveness', body: 'Every symptom, every concern, taken seriously from the first minute.' },
      { title: 'Rigor', body: 'Protocols followed precisely, at every shift handover.' },
      { title: 'Continuity', body: 'An uninterrupted presence, with no gap between day and night.' },
    ],
    ctaTitle: 'A Question For Our Team?',
    ctaBody: 'Book an appointment and meet the professional best suited to your needs directly.',
    ctaButton: 'Book an Appointment',
  },
};
