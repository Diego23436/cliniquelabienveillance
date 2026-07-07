const MAIN_LOCATION_QUERY = '3P8J%2B6WV%2C%20Petit%20March%C3%A9%2C%20Bepanda%2C%20Douala';

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
      title: 'Confirmation par l’équipe',
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
      title: 'Accueil sur site',
      body: 'À votre arrivée, l’équipe vous oriente vers le bon service sans délai inutile.',
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
    href: 'tel:+237699615098',
    fr: {
      title: 'Rendez-vous',
      body: 'Pour réserver ou déplacer un créneau de consultation.',
      action: '+237 699 61 50 98',
    },
    en: {
      title: 'Appointments',
      body: 'For booking or moving a consultation slot.',
      action: '+237 699 61 50 98',
    },
  },
  {
    id: 'emergency',
    icon: 'emergency',
    href: 'tel:+237674621928',
    fr: {
      title: 'Urgences',
      body: 'Pour une situation qui demande une réponse immédiate.',
      action: '+237 674 62 19 28',
    },
    en: {
      title: 'Emergency',
      body: 'For a situation that needs an immediate response.',
      action: '+237 674 62 19 28',
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
    id: 'bepanda',
    mapEmbedUrl: `https://www.google.com/maps?q=${MAIN_LOCATION_QUERY}&output=embed`,
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${MAIN_LOCATION_QUERY}`,
    fr: {
      kicker: 'Site principal',
      name: 'Clinique La Bienveillance — Bepanda',
      address: '3P8J+6WV, Petit Marché, Bepanda, Douala',
      hours: 'Ouvert 24h/24, 7j/7',
      phone: '+237 699 61 50 98',
      mapTitle: 'Carte Google Maps du site principal de Bepanda',
    },
    en: {
      kicker: 'Main location',
      name: 'Clinique La Bienveillance — Bepanda',
      address: '3P8J+6WV, Petit Marché, Bepanda, Douala',
      hours: 'Open 24 hours, every day',
      phone: '+237 699 61 50 98',
      mapTitle: 'Google Maps view of the main Bepanda location',
    },
  },
  {
    id: 'second-site',
    mapEmbedUrl: '',
    mapUrl: '',
    fr: {
      kicker: 'Second site',
      name: 'Clinique La Bienveillance — Second site',
      address: 'Adresse à confirmer',
      hours: 'Horaires à confirmer',
      phone: 'À confirmer',
      mapTitle: 'Carte du second site à intégrer',
      mapPendingTitle: 'Localisation en attente',
      mapPendingBody: 'La carte Google Maps sera activée dès que la deuxième adresse sera fournie.',
    },
    en: {
      kicker: 'Second location',
      name: 'Clinique La Bienveillance — Second location',
      address: 'Address to be confirmed',
      hours: 'Hours to be confirmed',
      phone: 'To be confirmed',
      mapTitle: 'Second location map to be added',
      mapPendingTitle: 'Location pending',
      mapPendingBody: 'The Google Maps view will be activated as soon as the second address is provided.',
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
      'Préparez votre demande de rendez-vous, choisissez le service souhaité et retrouvez nos coordonnées principales sur la même page.',
    heroButton: 'Commencer la demande',
    appointmentPhoneRaw: '+237699615098',
    appointmentPhone: '+237 699 61 50 98',
    heroCardLabel: 'Disponibilité de la clinique',
    heroCardTitle: 'Accueil 24h/24',
    heroCardBody: 'Pour les situations urgentes, appelez directement la clinique afin d’obtenir une orientation rapide.',
    heroCardLineOne: 'Consultations, urgences courantes, laboratoire',
    heroCardLineTwo: 'Bepanda, Douala',
    methodsEyebrow: 'Contacts directs',
    methodsTitle: 'Choisissez le moyen le plus rapide',
    methodsSubtitle:
      'Les appels restent le canal le plus sûr pour confirmer un créneau ou signaler une urgence.',
    formEyebrow: 'Demande de rendez-vous',
    formTitle: 'Un parcours clair avant votre arrivée',
    formSubtitle:
      'Le formulaire prépare les informations essentielles afin que l’équipe puisse confirmer le créneau et le bon service.',
    formCardTitle: 'Détails du rendez-vous',
    formCardSubtitle: 'Remplissez les champs principaux, puis confirmez votre demande avec l’équipe.',
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
      'Voici les deux emplacements prévus pour la clinique. Le site principal est déjà relié à Google Maps; le second sera activé dès réception de l’adresse exacte.',
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
      'Prepare your appointment request, choose the service you need, and find our main location details on the same page.',
    heroButton: 'Start the request',
    appointmentPhoneRaw: '+237699615098',
    appointmentPhone: '+237 699 61 50 98',
    heroCardLabel: 'Clinic availability',
    heroCardTitle: '24/7 reception',
    heroCardBody: 'For urgent situations, call the clinic directly so the team can guide you quickly.',
    heroCardLineOne: 'Consultations, everyday emergencies, laboratory',
    heroCardLineTwo: 'Bepanda, Douala',
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
      'These are the two planned clinic locations. The main location is already connected to Google Maps; the second will be activated when the exact address is provided.',
    openMapLabel: 'Open in Google Maps',
    mapPendingLabel: 'Map to confirm',
  },
};
