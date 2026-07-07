// Local bilingual content for the FAQ page.

export const categories = [
  { id: 'appointment', icon: 'appointment', fr: 'Rendez-vous', en: 'Appointments' },
  { id: 'services', icon: 'services', fr: 'Services', en: 'Services' },
  { id: 'emergency', icon: 'emergency', fr: 'Urgences', en: 'Emergencies' },
  { id: 'lab', icon: 'lab', fr: 'Laboratoire', en: 'Laboratory' },
  { id: 'pharmacy', icon: 'pharmacy', fr: 'Pharmacie', en: 'Pharmacy' },
  { id: 'payment', icon: 'payment', fr: 'Paiement', en: 'Payment' },
];

export const faqs = [
  {
    id: 'book-appointment',
    category: 'appointment',
    icon: 'appointment',
    fr: {
      question: 'Comment prendre rendez-vous à la clinique ?',
      answer:
        'Vous pouvez passer par le bouton Rendez-vous du site ou appeler directement la clinique. L’équipe confirme le créneau, le service concerné et les informations utiles à apporter.',
      keywords: ['réserver', 'consultation', 'créneau'],
    },
    en: {
      question: 'How can I book an appointment at the clinic?',
      answer:
        'You can use the Book Now button on the site or call the clinic directly. The team confirms the time slot, the relevant service, and the useful information to bring.',
      keywords: ['book', 'consultation', 'schedule'],
    },
  },
  {
    id: 'walk-in',
    category: 'appointment',
    icon: 'appointment',
    fr: {
      question: 'Puis-je venir sans rendez-vous ?',
      answer:
        'Oui, la clinique reçoit aussi les patients qui se présentent directement. Pour réduire l’attente, il reste préférable d’appeler avant lorsque la situation n’est pas urgente.',
      keywords: ['sans rendez-vous', 'attente', 'venir'],
    },
    en: {
      question: 'Can I come without an appointment?',
      answer:
        'Yes, the clinic also receives walk-in patients. To reduce waiting time, it is still best to call first when the situation is not urgent.',
      keywords: ['walk in', 'waiting', 'visit'],
    },
  },
  {
    id: 'open-hours',
    category: 'emergency',
    icon: 'emergency',
    fr: {
      question: 'La clinique est-elle ouverte la nuit ?',
      answer:
        'Oui. La Clinique La Bienveillance est organisée pour assurer une présence 24h/24 et 7j/7, avec une prise en charge des urgences courantes.',
      keywords: ['nuit', '24h', 'urgence', 'horaires'],
    },
    en: {
      question: 'Is the clinic open at night?',
      answer:
        'Yes. Clinique La Bienveillance is organized to provide 24/7 presence, with care for everyday emergencies.',
      keywords: ['night', '24/7', 'emergency', 'hours'],
    },
  },
  {
    id: 'emergency-signs',
    category: 'emergency',
    icon: 'emergency',
    fr: {
      question: 'Quels signes nécessitent une consultation rapide ?',
      answer:
        'Difficulté à respirer, douleur thoracique, fièvre persistante, malaise, confusion, vomissements répétés ou aggravation rapide doivent conduire à demander un avis médical sans attendre.',
      keywords: ['fièvre', 'douleur', 'malaise', 'respirer'],
    },
    en: {
      question: 'Which signs require prompt consultation?',
      answer:
        'Trouble breathing, chest pain, persistent fever, faintness, confusion, repeated vomiting, or rapid worsening should lead you to seek medical advice quickly.',
      keywords: ['fever', 'pain', 'breathing', 'urgent'],
    },
  },
  {
    id: 'services-list',
    category: 'services',
    icon: 'services',
    fr: {
      question: 'Quels services sont disponibles sur place ?',
      answer:
        'La clinique propose les consultations générales, les soins infirmiers, la pharmacie, le laboratoire d’analyses et l’orientation en santé familiale.',
      keywords: ['consultation', 'soins', 'pharmacie', 'planning familial'],
    },
    en: {
      question: 'Which services are available on site?',
      answer:
        'The clinic provides general consultations, nursing care, pharmacy, laboratory analyses, and family health guidance.',
      keywords: ['consultation', 'nursing', 'pharmacy', 'family planning'],
    },
  },
  {
    id: 'children-care',
    category: 'services',
    icon: 'services',
    fr: {
      question: 'Recevez-vous les enfants ?',
      answer:
        'Oui. Les enfants peuvent être reçus pour une consultation, un suivi, une fièvre, une toux, une vaccination ou une orientation vers un examen complémentaire.',
      keywords: ['enfant', 'pédiatrie', 'vaccin', 'toux'],
    },
    en: {
      question: 'Do you receive children?',
      answer:
        'Yes. Children can be seen for consultation, follow-up, fever, cough, vaccination, or referral for additional tests.',
      keywords: ['child', 'pediatrics', 'vaccine', 'cough'],
    },
  },
  {
    id: 'lab-fast',
    category: 'lab',
    icon: 'lab',
    fr: {
      question: 'Combien de temps faut-il pour obtenir les résultats ?',
      answer:
        'Cela dépend de l’analyse demandée. Beaucoup de résultats courants sont disponibles rapidement, parfois dans la journée ou sous 24h selon le type d’examen.',
      keywords: ['résultats', 'analyse', '24h', 'sang'],
    },
    en: {
      question: 'How long does it take to receive results?',
      answer:
        'It depends on the requested test. Many routine results are available quickly, sometimes the same day or within 24 hours depending on the exam type.',
      keywords: ['results', 'test', '24h', 'blood'],
    },
  },
  {
    id: 'lab-fasting',
    category: 'lab',
    icon: 'lab',
    fr: {
      question: 'Dois-je être à jeun pour une analyse ?',
      answer:
        'Certaines analyses nécessitent le jeûne, d’autres non. L’équipe vous le précisera au moment du rendez-vous ou avant le prélèvement.',
      keywords: ['jeun', 'prélèvement', 'sang'],
    },
    en: {
      question: 'Do I need to fast before a test?',
      answer:
        'Some tests require fasting and others do not. The team will clarify this when booking or before the sample is taken.',
      keywords: ['fasting', 'sample', 'blood'],
    },
  },
  {
    id: 'pharmacy-onsite',
    category: 'pharmacy',
    icon: 'pharmacy',
    fr: {
      question: 'La pharmacie est-elle disponible après consultation ?',
      answer:
        'Oui. La pharmacie sur place facilite l’accès aux traitements prescrits et permet de recevoir des conseils sur la bonne prise des médicaments.',
      keywords: ['médicament', 'ordonnance', 'traitement'],
    },
    en: {
      question: 'Is the pharmacy available after consultation?',
      answer:
        'Yes. The on-site pharmacy makes prescribed treatments easier to access and provides guidance on proper medicine use.',
      keywords: ['medicine', 'prescription', 'treatment'],
    },
  },
  {
    id: 'payment-methods',
    category: 'payment',
    icon: 'payment',
    fr: {
      question: 'Quels moyens de paiement acceptez-vous ?',
      answer:
        'Les modalités de paiement peuvent dépendre du service demandé. Contactez l’accueil avant votre visite si vous souhaitez confirmer les options disponibles.',
      keywords: ['paiement', 'tarif', 'prix'],
    },
    en: {
      question: 'Which payment methods do you accept?',
      answer:
        'Payment options may depend on the requested service. Contact the front desk before your visit if you want to confirm available options.',
      keywords: ['payment', 'price', 'fees'],
    },
  },
  {
    id: 'documents',
    category: 'appointment',
    icon: 'document',
    fr: {
      question: 'Quels documents dois-je apporter ?',
      answer:
        'Apportez vos anciens résultats, ordonnances, carnet de santé ou tout document médical récent. Ces éléments aident l’équipe à mieux comprendre votre situation.',
      keywords: ['document', 'ordonnance', 'résultats', 'carnet'],
    },
    en: {
      question: 'Which documents should I bring?',
      answer:
        'Bring previous results, prescriptions, health records, or any recent medical document. These items help the team better understand your situation.',
      keywords: ['document', 'prescription', 'results', 'records'],
    },
  },
];

export const quickCards = [
  {
    id: 'call',
    icon: 'phone',
    href: 'tel:+237699615098',
    fr: {
      title: 'Appeler l’accueil',
      body: 'Pour confirmer un horaire, une disponibilité ou un service.',
      action: '+237 699 61 50 98',
    },
    en: {
      title: 'Call the front desk',
      body: 'To confirm hours, availability, or a service.',
      action: '+237 699 61 50 98',
    },
  },
  {
    id: 'appointment',
    icon: 'appointment',
    fr: {
      title: 'Préparer une visite',
      body: 'Choisissez un créneau et indiquez le motif de consultation.',
      action: 'Prendre rendez-vous',
    },
    en: {
      title: 'Prepare a visit',
      body: 'Choose a time slot and indicate the reason for consultation.',
      action: 'Book an appointment',
    },
  },
  {
    id: 'question',
    icon: 'chat',
    href: 'https://wa.me/237699615098',
    fr: {
      title: 'Question rapide',
      body: 'Envoyez un message si vous avez besoin d’une précision.',
      action: 'WhatsApp',
    },
    en: {
      title: 'Quick question',
      body: 'Send a message if you need a clarification.',
      action: 'WhatsApp',
    },
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'FAQ',
    eyebrow: 'Ressources',
    title: 'Foire Aux Questions',
    tagline: 'Les réponses essentielles avant votre visite',
    intro:
      'Retrouvez les informations pratiques sur les rendez-vous, les services, les urgences, le laboratoire, la pharmacie et les moyens de paiement.',
    liveBadge: 'Réponses pratiques pour préparer votre passage à la clinique',

    searchEyebrow: 'Trouver rapidement',
    searchTitle: 'Que souhaitez-vous savoir ?',
    searchSubtitle: 'Filtrez par thème ou recherchez un mot-clé pour ouvrir la bonne réponse.',
    searchPlaceholder: 'Rechercher une question, ex: laboratoire, paiement, urgence...',
    filterLabel: 'Filtrer les questions par catégorie',
    allQuestions: 'Toutes les questions',

    topicsLabel: 'Thèmes de la FAQ',
    resultsLabel: 'Questions affichées',
    emptyTitle: 'Aucune réponse trouvée',
    emptyBody: 'Essayez un autre mot-clé ou affichez toutes les questions.',
    emptyAction: 'Réinitialiser',

    quickEyebrow: 'Besoin de plus ?',
    quickTitle: 'Contacts utiles',
    quickSubtitle: 'Si votre situation demande une réponse personnalisée, contactez directement l’équipe.',

    ctaTitle: 'Votre question concerne votre état de santé ?',
    ctaBody: 'La FAQ aide à préparer votre visite, mais une consultation reste le meilleur moyen d’obtenir un avis adapté.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'FAQ',
    eyebrow: 'Resources',
    title: 'Frequently Asked Questions',
    tagline: 'Essential answers before your visit',
    intro:
      'Find practical information about appointments, services, emergencies, laboratory tests, pharmacy access, and payment.',
    liveBadge: 'Practical answers to prepare your visit to the clinic',

    searchEyebrow: 'Find quickly',
    searchTitle: 'What would you like to know?',
    searchSubtitle: 'Filter by topic or search a keyword to open the right answer.',
    searchPlaceholder: 'Search a question, e.g. laboratory, payment, emergency...',
    filterLabel: 'Filter questions by category',
    allQuestions: 'All questions',

    topicsLabel: 'FAQ topics',
    resultsLabel: 'Questions shown',
    emptyTitle: 'No answer found',
    emptyBody: 'Try another keyword or show all questions.',
    emptyAction: 'Reset',

    quickEyebrow: 'Need more?',
    quickTitle: 'Useful contacts',
    quickSubtitle: 'If your situation needs a personalized answer, contact the team directly.',

    ctaTitle: 'Is your question about your health condition?',
    ctaBody: 'The FAQ helps prepare your visit, but consultation remains the best way to get advice adapted to you.',
    ctaButton: 'Book an Appointment',
  },
};
