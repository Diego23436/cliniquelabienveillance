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
    id: 'appointment',
    icon: 'phone',
    href: 'tel:+237693321684',
    fr: {
      title: 'Rendez-vous',
      body: 'Pour réserver ou déplacer un créneau de consultation.',
      action: '+237 693 32 16 84',
    },
    en: {
      title: 'Appointments',
      body: 'For booking or moving a consultation slot.',
      action: '+237 693 32 16 84',
    },
  },
  {
    id: 'emergency',
    icon: 'emergency',
    href: 'tel:+237670103404',
    fr: {
      title: 'Urgences',
      body: 'Pour une situation qui demande une réponse immédiate.',
      action: '+237 670 10 34 04',
    },
    en: {
      title: 'Emergency',
      body: 'For a situation that needs an immediate response.',
      action: '+237 670 10 34 04',
    },
  },
  {
    id: 'hours',
    icon: 'clock',
    href: '#coordonnees',
    fr: {
      title: 'Disponibilité',
      body: 'Une présence organisée pour accueillir les patients chaque jour.',
      action: 'Ouvert 24h/24, 7j/7',
    },
    en: {
      title: 'Availability',
      body: 'A care presence organized to welcome patients every day.',
      action: 'Open 24/7',
    },
  },
];

export const locations = [
  {
    id: 'ancienne-gare-routiere',
    mapEmbedUrl: `https://www.google.com/maps?q=${MAIN_LOCATION_QUERY}&output=embed`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${MAIN_LOCATION_QUERY}`,
    fr: {
      kicker: 'Site principal',
      name: 'Clinique La Bienveillance — Ancienne gare routière',
      address: 'Ancienne gare routière, Dakar, Douala',
      hours: 'Ouvert 24h/24, 7j/7',
      phone: '+237 693 32 16 84',
      mapTitle: 'Carte Google Maps du site principal',
    },
    en: {
      kicker: 'Main location',
      name: 'Clinique La Bienveillance — Ancient bus station',
      address: 'Ancienne gare routière, Dakar, Douala',
      hours: 'Open 24 hours, every day',
      phone: '+237 693 32 16 84',
      mapTitle: 'Google Maps view of the main location',
    },
  },
  {
    id: 'yassa',
    mapEmbedUrl: `https://www.google.com/maps?q=${SECOND_LOCATION_QUERY}&output=embed`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${SECOND_LOCATION_QUERY}`,
    fr: {
      kicker: 'Second site',
      name: 'Clinique La Bienveillance — Yassa',
      address: 'Yassa, centre de sante la bienveillance',
      hours: 'Ouvert 24h/24, 7j/7',
      phone: '+237 699 61 50 98',
      mapTitle: 'Carte Google Maps du second site',
    },
    en: {
      kicker: 'Second location',
      name: 'Clinique La Bienveillance — Yassa',
      address: 'Yassa, centre de sante la bienveillance',
      hours: 'Open 24 hours, every day',
      phone: '+237 699 61 50 98',
      mapTitle: 'Google Maps view of the second location',
    },
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
    appointmentPhoneRaw: '+237693321684',
    appointmentPhone: '+237 693 32 16 84',
    heroCardLabel: 'Disponibilité de la clinique',
    heroCardTitle: 'Deux sites pour mieux vous accueillir',
    heroCardBody:
      'Pour les situations urgentes ou les rendez-vous, appelez directement la clinique afin d’obtenir une orientation rapide.',
    heroCardLineOne: 'Ancienne gare routière, Dakar, Douala',
    heroCardLineTwo: 'Yassa, centre de sante la bienveillance',
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
    appointmentPhoneRaw: '+237693321684',
    appointmentPhone: '+237 693 32 16 84',
    heroCardLabel: 'Clinic availability',
    heroCardTitle: 'Two locations for easier access',
    heroCardBody:
      'For urgent situations or appointments, call the clinic directly so the team can guide you quickly.',
    heroCardLineOne: 'Ancienne gare routière, Dakar, Douala',
    heroCardLineTwo: 'Yassa, centre de sante la bienveillance',
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
