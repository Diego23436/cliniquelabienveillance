// Local content for the "Notre Équipe" page only — owned by this page's developer.
//
// NOTE: member names/roles/photos below are placeholders (photos via a public
// avatar-placeholder service, no real staff photos yet), following the same
// "à confirmer" convention already used in clinique.content.js for the second
// site. Swap with real staff info + photos once the clinic provides them.
// Phone/WhatsApp link to the clinic's real published number (see Clinique
// page); the Facebook icon links to "#" until the clinic gives us the real page.

export const departments = [
  { id: 'medecine', fr: 'Médecine Générale', en: 'General Medicine' },
  { id: 'soins', fr: 'Soins Infirmiers', en: 'Nursing Care' },
  { id: 'pharmacie', fr: 'Pharmacie', en: 'Pharmacy' },
  { id: 'labo', fr: 'Laboratoire', en: 'Laboratory' },
  { id: 'accueil', fr: 'Accueil & Orientation Familiale', en: 'Front Desk & Family Guidance' },
];

const CLINIC_PHONE_DISPLAY = '+237 699 61 50 98';
const CLINIC_PHONE_TEL = '+237699615098';
const CLINIC_PHONE_WA = '237699615098';

// avatarId picks a deterministic placeholder headshot (i.pravatar.cc/{n}) per member.
const rawMembers = [
  { name: 'Dr. Aline Mbarga', dept: 'medecine', avatarId: 5, fr: { role: 'Médecin Généraliste', bio: 'Plus de 10 ans à l\u2019écoute des familles de Bepanda.' }, en: { role: 'General Practitioner', bio: 'Over 10 years caring for families in Bepanda.' } },
  { name: 'Dr. Serge Fotso', dept: 'medecine', avatarId: 12, fr: { role: 'Médecin Généraliste', bio: 'Suivi des adultes et consultations de garde en soirée.' }, en: { role: 'General Practitioner', bio: 'Adult follow-up care and evening on-call consultations.' } },
  { name: 'Dr. Micheline Ngo Bakoa', dept: 'medecine', avatarId: 47, fr: { role: 'Médecin Généraliste', bio: 'Spécialisée dans le suivi des femmes enceintes.' }, en: { role: 'General Practitioner', bio: 'Specializes in prenatal follow-up care.' } },
  { name: 'Brenda Nga', dept: 'soins', avatarId: 45, fr: { role: 'Infirmière Diplômée d\u2019État', bio: 'Coordination des soins et injections en salle de consultation.' }, en: { role: 'Registered Nurse', bio: 'Coordinates care and treatments in the consultation room.' } },
  { name: 'Paul Eyenga', dept: 'soins', avatarId: 13, fr: { role: 'Infirmier de Garde (nuit)', bio: 'Présent chaque nuit pour les urgences et les soins continus.' }, en: { role: 'Night-Shift Nurse', bio: 'On site every night for emergencies and continuous care.' } },
  { name: 'Clarisse Manga', dept: 'soins', avatarId: 29, fr: { role: 'Infirmière en Soins Généraux', bio: 'Prise de constantes et accompagnement des patients.' }, en: { role: 'General Care Nurse', bio: 'Vital signs monitoring and patient support.' } },
  { name: 'Christelle Ateba', dept: 'pharmacie', avatarId: 25, fr: { role: 'Pharmacienne Titulaire', bio: 'Délivrance et conseil sur les traitements prescrits.' }, en: { role: 'Lead Pharmacist', bio: 'Dispenses and advises on prescribed treatments.' } },
  { name: 'Junior Tchoumi', dept: 'pharmacie', avatarId: 33, fr: { role: 'Préparateur en Pharmacie', bio: 'Gestion du stock et disponibilité des médicaments essentiels.' }, en: { role: 'Pharmacy Assistant', bio: 'Manages stock and availability of essential medicines.' } },
  { name: 'Rosine Kamdem', dept: 'pharmacie', avatarId: 44, fr: { role: 'Pharmacienne Adjointe', bio: 'Garde de nuit et urgences pharmaceutiques.' }, en: { role: 'Assistant Pharmacist', bio: 'Night shifts and pharmaceutical emergencies.' } },
  { name: 'Marlyse Doumbe', dept: 'labo', avatarId: 48, fr: { role: 'Technicienne de Laboratoire', bio: 'Analyses de routine et résultats sous 24h.' }, en: { role: 'Lab Technician', bio: 'Routine analyses with results within 24 hours.' } },
  { name: 'Hervé Bindzi', dept: 'labo', avatarId: 15, fr: { role: 'Technicien de Laboratoire', bio: 'Prélèvements et suivi des examens spécialisés.' }, en: { role: 'Lab Technician', bio: 'Sample collection and specialized test follow-up.' } },
  { name: 'Bertille Songue', dept: 'labo', avatarId: 40, fr: { role: 'Biologiste Médicale', bio: 'Supervision des analyses et contrôle qualité.' }, en: { role: 'Medical Biologist', bio: 'Oversees analyses and quality control.' } },
  { name: 'Solange Ekwalla', dept: 'accueil', avatarId: 20, fr: { role: 'Responsable Accueil & Orientation', bio: 'Premier contact et orientation vers le bon service.' }, en: { role: 'Front Desk & Guidance Lead', bio: 'First point of contact, directing patients to the right service.' } },
  { name: 'Franck Assam', dept: 'accueil', avatarId: 14, fr: { role: 'Agent d\u2019Accueil', bio: 'Accompagnement administratif et prise de rendez-vous.' }, en: { role: 'Front Desk Officer', bio: 'Administrative support and appointment scheduling.' } },
  { name: 'Yvette Ngassa', dept: 'accueil', avatarId: 32, fr: { role: 'Conseillère Familiale', bio: 'Écoute et orientation des familles vers les bons services.' }, en: { role: 'Family Guidance Officer', bio: 'Listens and guides families toward the right services.' } },
];

function buildMembers(lang) {
  return rawMembers.map((m) => ({
    name: m.name,
    dept: m.dept,
    avatarId: m.avatarId,
    role: m[lang].role,
    bio: m[lang].bio,
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
      "Notre équipe multidisciplinaire met tout en œuvre pour vous offrir des soins de qualité, humains et personnalisés, à toute heure du jour et de la nuit.",
    liveBadge: 'Équipe disponible 24h/24, 7j/7',
    filterAll: 'Tous les services',
    filterToggle: 'Filtrer par service',
    members: buildMembers('fr'),
    commitmentTitle: 'Ce Que Notre Équipe Vous Doit',
    commitments: [
      { title: 'Écoute', body: 'Chaque symptôme, chaque inquiétude, pris au sérieux dès la première minute.' },
      { title: 'Rigueur', body: 'Des protocoles suivis avec précision, à chaque relève d\u2019équipe.' },
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
      'Our multidisciplinary team does everything possible to provide quality, human, personalized care — around the clock.',
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
