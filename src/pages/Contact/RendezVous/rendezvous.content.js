import { contactGroups, clinicLocations, directContact } from '../../../content/clinicContacts';

const MAIN_LOCATION_QUERY = 'Ancienne%20gare%20routi%C3%A8re%2C%20Dakar%2C%20Douala';
const SECOND_LOCATION_QUERY = 'Yassa%2C%20centre%20de%20sante%20la%20bienveillance';

export const services = [
  { id: 'consultation', fr: 'Consultation générale', en: 'General consultation' },
  { id: 'urgence', fr: 'Urgence courante', en: 'Everyday emergency' },
  { id: 'laboratoire', fr: 'Laboratoire / examens', en: 'Laboratory / tests' },
  { id: 'pharmacie', fr: 'Pharmacie', en: 'Pharmacy' },
  { id: 'prevention', fr: 'Prévention / dépistage', en: 'Prevention / screening' },
  { id: 'suivi', fr: 'Suivi médical', en: 'Medical follow-up' },
];

export const preferredPeriods = [
  { id: 'morning', fr: 'Matin', en: 'Morning' },
  { id: 'afternoon', fr: 'Après-midi', en: 'Afternoon' },
  { id: 'evening', fr: 'Soir', en: 'Evening' },
];

export const steps = [
  {
    id: 'details',
    fr: {
      title: 'Partagez les informations utiles',
      body: 'Indiquez le service souhaité, vos disponibilités et le motif principal de la visite.',
    },
    en: {
      title: 'Share the useful details',
      body: 'Choose the service, your preferred timing, and the main reason for the visit.',
    },
  },
  {
    id: 'confirmation',
    fr: {
      title: "Confirmation par l'équipe",
      body: 'La clinique confirme le créneau le plus adapté et les documents à apporter.',
    },
    en: {
      title: 'Team confirmation',
      body: 'The clinic confirms the best slot and the documents you should bring.',
    },
  },
  {
    id: 'arrival',
    fr: {
      title: "Accueil sur site",
      body: "À votre arrivée, l'équipe vous oriente vers le bon service sans délai inutile.",
    },
    en: {
      title: 'On-site welcome',
      body: 'When you arrive, the team guides you to the right service without unnecessary delay.',
    },
  },
];

export const contactMethods = [
  {
    id: 'main-site',
    icon: 'phone',
    href: contactGroups.fr[0].href,
    phones: contactGroups.fr[0].phones,
    fr: {
      title: 'Site principal',
      body: contactGroups.fr[0].subtitle,
    },
    en: {
      title: 'Main site',
      body: contactGroups.en[0].subtitle,
    },
  },
  {
    id: 'second-site',
    icon: 'pin',
    href: contactGroups.fr[1].href,
    phones: contactGroups.fr[1].phones,
    fr: {
      title: 'Centre de sante La Bienveillance',
      body: contactGroups.fr[1].subtitle,
    },
    en: {
      title: 'La Bienveillance Health Center',
      body: contactGroups.en[1].subtitle,
    },
  },
  {
    id: 'direct-contact',
    icon: 'clock',
    href: `tel:${directContact.tel}`,
    phones: [directContact],
    fr: {
      title: directContact.label.fr,
      body: 'WhatsApp et appels rapides pour les demandes urgentes.',
    },
    en: {
      title: directContact.label.en,
      body: 'WhatsApp and quick calls for urgent requests.',
    },
  },
];

export const locations = [
  {
    id: 'main-location',
    mapEmbedUrl: `https://www.google.com/maps?q=${MAIN_LOCATION_QUERY}&output=embed`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${MAIN_LOCATION_QUERY}`,
    fr: clinicLocations.fr[0],
    en: clinicLocations.en[0],
  },
  {
    id: 'second-location',
    mapEmbedUrl: `https://www.google.com/maps?q=${SECOND_LOCATION_QUERY}&output=embed`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${SECOND_LOCATION_QUERY}`,
    fr: clinicLocations.fr[1],
    en: clinicLocations.en[1],
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Rendez-vous',
    eyebrow: 'Contact & rendez-vous',
    title: 'Prendre rendez-vous à la Clinique La Bienveillance',
    tagline: 'Un accès simple aux soins, avec une équipe disponible et attentive.',
    intro:
      'Préparez votre demande de rendez-vous, choisissez le service souhaité et retrouvez nos deux sites ainsi que nos coordonnées principales sur la même page.',
    heroButton: 'Commencer la demande',
    appointmentPhoneRaw: directContact.tel,
    appointmentPhone: directContact.display,
    heroCardLabel: 'Disponibilité de la clinique',
    heroCardTitle: 'Deux sites pour mieux vous accueillir',
    heroCardBody:
      'Pour les situations urgentes ou les rendez-vous, appelez le contact direct afin d’obtenir une orientation rapide.',
    heroCardLineOne: 'Ancienne gare routière, Dakar, Douala',
    heroCardLineTwo: 'Yassa, centre de santé la bienveillance',
    methodsEyebrow: 'Contacts directs',
    methodsTitle: 'Choisissez le moyen le plus rapide',
    methodsSubtitle:
      'Les appels restent le canal le plus sûr pour confirmer un créneau ou signaler une urgence.',
    formEyebrow: 'Demande de rendez-vous',
    formTitle: 'Un parcours clair avant votre arrivée',
    formSubtitle:
      "Le formulaire prépare les informations essentielles afin que l'équipe puisse confirmer le créneau et le bon service.",
    formCardTitle: 'Détails du rendez-vous',
    formCardSubtitle: "Remplissez les champs principaux, puis confirmez votre demande avec l'équipe.",
    nameLabel: 'Nom complet',
    namePlaceholder: 'Votre nom',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '+237 ...',
    serviceLabel: 'Service souhaité',
    dateLabel: 'Date souhaitée',
    periodLabel: 'Moment préféré',
    messageLabel: 'Message ou motif',
    messagePlaceholder: 'Décrivez brièvement le besoin, les symptômes ou la personne concernée.',
    consentLabel: 'J’accepte d’être contacté(e) par la clinique pour confirmer le rendez-vous.',
    submitLabel: 'Préparer la demande',
    submitNote:
      'Votre demande est prête. Pour finaliser le rendez-vous, appelez la clinique afin de confirmer le créneau.',
    locationsEyebrow: 'Nos coordonnées',
    locationsTitle: 'Deux sites, une même attention',
    locationsSubtitle:
      'Voici les deux emplacements de la clinique. Les deux sites sont mis en avant pour faciliter votre orientation.',
    openMapLabel: 'Voir sur Google Maps',
    mapPendingLabel: 'Carte à confirmer',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Appointment',
    eyebrow: 'Contact & appointments',
    title: 'Book an appointment at Clinique La Bienveillance',
    tagline: 'Simple access to care, with an available and attentive team.',
    intro:
      'Prepare your appointment request, choose the service you need, and find both clinic locations plus our main contact details on the same page.',
    heroButton: 'Start the request',
    appointmentPhoneRaw: directContact.tel,
    appointmentPhone: directContact.display,
    heroCardLabel: 'Clinic availability',
    heroCardTitle: 'Two locations for easier access',
    heroCardBody:
      'For urgent situations or appointments, call the direct contact so the team can guide you quickly.',
    heroCardLineOne: 'Ancienne gare routière, Dakar, Douala',
    heroCardLineTwo: 'Yassa, La Bienveillance Health Center',
    methodsEyebrow: 'Direct contacts',
    methodsTitle: 'Choose the fastest channel',
    methodsSubtitle:
      'Phone calls remain the safest channel to confirm a slot or report an emergency.',
    formEyebrow: 'Appointment request',
    formTitle: 'A clear path before your arrival',
    formSubtitle:
      'The form prepares the essential details so the team can confirm the right slot and service.',
    formCardTitle: 'Appointment details',
    formCardSubtitle: 'Fill in the main fields, then confirm the request with the team.',
    nameLabel: 'Full name',
    namePlaceholder: 'Your name',
    phoneLabel: 'Phone',
    phonePlaceholder: '+237 ...',
    serviceLabel: 'Requested service',
    dateLabel: 'Preferred date',
    periodLabel: 'Preferred time',
    messageLabel: 'Message or reason',
    messagePlaceholder: 'Briefly describe the need, symptoms, or person concerned.',
    consentLabel: 'I agree to be contacted by the clinic to confirm the appointment.',
    submitLabel: 'Prepare request',
    submitNote:
      'Your request is ready. To finalize the appointment, call the clinic to confirm the slot.',
    locationsEyebrow: 'Our locations',
    locationsTitle: 'Two locations, one standard of care',
    locationsSubtitle:
      'These are the two clinic locations. Both sites are highlighted to make orientation easy.',
    openMapLabel: 'Open in Google Maps',
    mapPendingLabel: 'Map to confirm',
  },
};
