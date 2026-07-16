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

const CLINIC_PHONE_DISPLAY = '+237 693 32 16 84';
const CLINIC_PHONE_TEL = '+237693321684';
const CLINIC_PHONE_WA = '237693321684';

const rawMembers = [
  {
    name: 'Dr. Soh',
    dept: 'medecine',
    photo: '/imgteam1.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Médecin Généraliste', bio: 'Plus de 10 ans à l’écoute des familles de Bepanda.' },
    en: { role: 'General Practitioner', bio: 'Over 10 years caring for families in Bepanda.' },
  },
  {
    name: 'Dr. Serge Fotso',
    dept: 'medecine',
    photo: '/pathologies/imgteam2.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Médecin Généraliste', bio: 'Suivi des adultes et consultations de garde en soirée.' },
    en: { role: 'General Practitioner', bio: 'Adult follow-up care and evening on-call consultations.' },
  },
  {
    name: 'Brenda Nga',
    dept: 'soins',
    photo: '/pathologies/imgteam3.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Infirmière Diplômée d’État', bio: 'Coordination des soins et injections en salle de consultation.' },
    en: { role: 'Registered Nurse', bio: 'Coordinates care and treatments in the consultation room.' },
  },
  {
    name: 'Paul Eyenga',
    dept: 'soins',
    photo: '/pathologies/imgteam4.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Infirmier de Garde (nuit)', bio: 'Présent chaque nuit pour les urgences et les soins continus.' },
    en: { role: 'Night-Shift Nurse', bio: 'On site every night for emergencies and continuous care.' },
  },
  {
    name: 'Christelle Ateba',
    dept: 'pharmacie',
    photo: '/pathologies/imgteam5.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Pharmacienne Titulaire', bio: 'Délivrance et conseil sur les traitements prescrits.' },
    en: { role: 'Lead Pharmacist', bio: 'Dispenses and advises on prescribed treatments.' },
  },
  {
    name: 'Junior Tchoumi',
    dept: 'pharmacie',
    photo: '/pathologies/imgteam6.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Préparateur en Pharmacie', bio: 'Gestion du stock et disponibilité des médicaments essentiels.' },
    en: { role: 'Pharmacy Assistant', bio: 'Manages stock and availability of essential medicines.' },
  },
  {
    name: 'Marlyse Doumbe',
    dept: 'labo',
    photo: '/pathologies/imgteam7.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Technicienne de Laboratoire', bio: 'Analyses de routine et résultats sous 24h.' },
    en: { role: 'Lab Technician', bio: 'Routine analyses with results within 24 hours.' },
  },
  {
    name: 'Hervé Bindzi',
    dept: 'labo',
    photo: '/pathologies/imgteam8.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Technicien de Laboratoire', bio: 'Prélèvements et suivi des examens spécialisés.' },
    en: { role: 'Lab Technician', bio: 'Sample collection and specialized test follow-up.' },
  },
  {
    name: 'Solange Ekwalla',
    dept: 'accueil',
    photo: '/pathologies/imgteam9.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Responsable Accueil & Orientation', bio: 'Premier contact et orientation vers le bon service.' },
    en: { role: 'Front Desk & Guidance Lead', bio: 'First point of contact, directing patients to the right service.' },
  },
  {
    name: 'Franck Assam',
    dept: 'accueil',
    photo: '/pathologies/imgteam10.png',
    whatsappLink: 'https://wa.me/237693321684',
    fr: { role: 'Agent d’Accueil', bio: 'Accompagnement administratif et prise de rendez-vous.' },
    en: { role: 'Front Desk Officer', bio: 'Administrative support and appointment scheduling.' },
  },
];

function buildMembers(lang) {
  return rawMembers.map((member) => ({
    name: member.name,
    dept: member.dept,
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
