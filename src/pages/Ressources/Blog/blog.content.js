// Local bilingual content for the Blog / Articles Santé page.
// The articles are educational summaries, not a substitute for consultation.

export const categories = [
  { id: 'prevention', fr: 'Prévention', en: 'Prevention' },
  { id: 'family', fr: 'Santé familiale', en: 'Family health' },
  { id: 'emergency', fr: 'Urgences courantes', en: 'Everyday emergencies' },
  { id: 'lab', fr: 'Laboratoire', en: 'Laboratory' },
  { id: 'pharmacy', fr: 'Pharmacie', en: 'Pharmacy' },
  { id: 'maternal', fr: 'Maternité', en: 'Maternity' },
];

export const articles = [
  {
    id: 'when-to-consult-fever',
    category: 'emergency',
    icon: 'emergency',
    featured: true,
    fr: {
      date: 'Guide patient',
      readTime: '4 min',
      title: 'Fièvre, douleurs, fatigue : quand consulter sans attendre ?',
      excerpt:
        'Un guide simple pour distinguer les symptômes à surveiller à domicile de ceux qui nécessitent une consultation rapide.',
      detail:
        'La fièvre et la fatigue sont fréquentes, mais certains signaux doivent conduire à consulter rapidement : difficulté à respirer, douleur thoracique, confusion, vomissements répétés, fièvre persistante ou aggravation chez un enfant, une femme enceinte ou une personne âgée.',
      takeaways: [
        'Notez la température, l’heure de début et les traitements déjà pris.',
        'Consultez rapidement en cas de douleur intense, gêne respiratoire ou malaise.',
        'Évitez l’automédication prolongée sans avis médical.',
      ],
    },
    en: {
      date: 'Patient guide',
      readTime: '4 min',
      title: 'Fever, pain, fatigue: when should you seek care quickly?',
      excerpt:
        'A simple guide to distinguish symptoms that can be monitored at home from those requiring prompt medical attention.',
      detail:
        'Fever and fatigue are common, but some warning signs should lead to prompt consultation: trouble breathing, chest pain, confusion, repeated vomiting, persistent fever, or worsening symptoms in a child, pregnant woman, or older adult.',
      takeaways: [
        'Write down the temperature, start time, and medicines already taken.',
        'Seek care quickly for severe pain, breathing difficulty, or faintness.',
        'Avoid prolonged self-medication without medical advice.',
      ],
    },
  },
  {
    id: 'screening-routine',
    category: 'prevention',
    icon: 'prevention',
    fr: {
      date: 'Prévention',
      readTime: '3 min',
      title: 'Pourquoi faire un bilan de santé même quand tout va bien ?',
      excerpt:
        'Le dépistage permet de repérer tôt l’hypertension, le diabète ou certaines infections avant les complications.',
      detail:
        'Un bilan régulier aide à repérer les facteurs de risque silencieux. Selon l’âge et les antécédents, il peut inclure tension artérielle, glycémie, bilan sanguin, dépistage infectieux et conseils personnalisés.',
      takeaways: [
        'Un dépistage précoce rend souvent le traitement plus simple.',
        'Le rythme du bilan dépend de l’âge, des antécédents et des symptômes.',
        'Venez avec vos anciens résultats si vous en avez.',
      ],
    },
    en: {
      date: 'Prevention',
      readTime: '3 min',
      title: 'Why get a checkup even when you feel well?',
      excerpt:
        'Screening helps detect hypertension, diabetes, or some infections before complications appear.',
      detail:
        'Regular checkups help identify silent risk factors. Depending on age and history, they may include blood pressure, blood sugar, blood tests, infectious screening, and personalized advice.',
      takeaways: [
        'Early screening often makes treatment simpler.',
        'Checkup frequency depends on age, history, and symptoms.',
        'Bring previous results if you have them.',
      ],
    },
  },
  {
    id: 'child-cough',
    category: 'family',
    icon: 'family',
    fr: {
      date: 'Famille',
      readTime: '3 min',
      title: 'Toux chez l’enfant : les signes qui doivent alerter',
      excerpt:
        'Respiration rapide, refus de boire ou fièvre persistante sont des signaux à prendre au sérieux.',
      detail:
        'La toux est souvent liée à une infection respiratoire bénigne, mais elle doit être évaluée si elle s’accompagne de gêne respiratoire, respiration sifflante, fièvre prolongée, fatigue inhabituelle ou refus de s’alimenter.',
      takeaways: [
        'Observez la respiration, le comportement et l’hydratation.',
        'Consultez vite si l’enfant respire difficilement.',
        'N’utilisez pas d’antibiotiques sans prescription.',
      ],
    },
    en: {
      date: 'Family',
      readTime: '3 min',
      title: 'Child cough: warning signs to watch',
      excerpt:
        'Fast breathing, refusal to drink, or persistent fever are signs that deserve attention.',
      detail:
        'Cough is often linked to a mild respiratory infection, but it should be assessed when combined with breathing difficulty, wheezing, prolonged fever, unusual tiredness, or refusal to feed.',
      takeaways: [
        'Watch breathing, behavior, and hydration.',
        'Seek care quickly if breathing is difficult.',
        'Do not use antibiotics without a prescription.',
      ],
    },
  },
  {
    id: 'lab-results',
    category: 'lab',
    icon: 'lab',
    fr: {
      date: 'Laboratoire',
      readTime: '4 min',
      title: 'Bien préparer une analyse de sang',
      excerpt:
        'Jeûne, médicaments, heure du prélèvement : quelques détails améliorent la fiabilité des résultats.',
      detail:
        'Certaines analyses nécessitent d’être à jeun, d’autres non. Informez l’équipe des médicaments pris, de la grossesse éventuelle et des résultats récents. Ces informations aident le médecin à interpréter correctement les résultats.',
      takeaways: [
        'Demandez si le jeûne est nécessaire avant le prélèvement.',
        'Signalez vos traitements en cours.',
        'Gardez une copie des résultats pour le suivi.',
      ],
    },
    en: {
      date: 'Laboratory',
      readTime: '4 min',
      title: 'How to prepare for a blood test',
      excerpt:
        'Fasting, medicines, and collection time can improve the reliability of results.',
      detail:
        'Some tests require fasting, others do not. Tell the team about medicines, possible pregnancy, and recent results. These details help the doctor interpret your results correctly.',
      takeaways: [
        'Ask whether fasting is required before the sample.',
        'Mention current treatments.',
        'Keep a copy of results for follow-up.',
      ],
    },
  },
  {
    id: 'medicine-safety',
    category: 'pharmacy',
    icon: 'pharmacy',
    fr: {
      date: 'Pharmacie',
      readTime: '3 min',
      title: 'Médicaments : éviter les mélanges dangereux',
      excerpt:
        'Même les traitements courants peuvent interagir entre eux, surtout chez les patients suivis pour maladies chroniques.',
      detail:
        'Les interactions médicamenteuses peuvent réduire l’efficacité d’un traitement ou augmenter les effets indésirables. Avant d’ajouter un médicament, même acheté sans ordonnance, demandez conseil au professionnel de santé.',
      takeaways: [
        'Présentez la liste de vos médicaments à chaque consultation.',
        'Évitez de doubler les doses après un oubli.',
        'Demandez conseil avant d’associer plusieurs traitements.',
      ],
    },
    en: {
      date: 'Pharmacy',
      readTime: '3 min',
      title: 'Medicines: avoiding risky combinations',
      excerpt:
        'Even common medicines can interact, especially for patients followed for chronic conditions.',
      detail:
        'Drug interactions can reduce treatment effectiveness or increase side effects. Before adding any medicine, even over-the-counter products, ask a health professional for advice.',
      takeaways: [
        'Bring your medicine list to each consultation.',
        'Avoid doubling doses after a missed dose.',
        'Ask before combining treatments.',
      ],
    },
  },
  {
    id: 'pregnancy-followup',
    category: 'maternal',
    icon: 'maternal',
    fr: {
      date: 'Maternité',
      readTime: '4 min',
      title: 'Suivi de grossesse : les rendez-vous à ne pas manquer',
      excerpt:
        'Le suivi prénatal aide à protéger la mère et le bébé, du premier trimestre jusqu’à l’accouchement.',
      detail:
        'Le suivi de grossesse permet de surveiller la tension, la croissance du bébé, les signes d’anémie ou d’infection, et d’organiser les examens nécessaires. Une consultation rapide est indiquée en cas de saignement, douleurs fortes, fièvre ou diminution des mouvements du bébé.',
      takeaways: [
        'Respectez le calendrier de suivi proposé.',
        'Consultez rapidement en cas de signe inhabituel.',
        'Gardez vos résultats d’échographie et d’analyses ensemble.',
      ],
    },
    en: {
      date: 'Maternity',
      readTime: '4 min',
      title: 'Pregnancy follow-up: appointments not to miss',
      excerpt:
        'Prenatal care helps protect mother and baby from the first trimester through delivery.',
      detail:
        'Pregnancy follow-up monitors blood pressure, baby growth, signs of anemia or infection, and needed tests. Prompt consultation is advised for bleeding, severe pain, fever, or reduced baby movement.',
      takeaways: [
        'Follow the proposed care schedule.',
        'Seek care quickly for unusual signs.',
        'Keep ultrasound and lab results together.',
      ],
    },
  },
  {
    id: 'hydration-heat',
    category: 'prevention',
    icon: 'prevention',
    fr: {
      date: 'Conseil santé',
      readTime: '2 min',
      title: 'Chaleur et déshydratation : les bons réflexes',
      excerpt:
        'Boire régulièrement, protéger les enfants et repérer les premiers signes de déshydratation.',
      detail:
        'En période de chaleur, la déshydratation peut s’installer rapidement, surtout chez les enfants, les personnes âgées et les patients fragiles. Surveillez la soif intense, la bouche sèche, les urines rares, les vertiges et la fatigue inhabituelle.',
      takeaways: [
        'Buvez régulièrement, sans attendre d’avoir très soif.',
        'Évitez l’exposition prolongée aux heures les plus chaudes.',
        'Consultez en cas de malaise, confusion ou vomissements répétés.',
      ],
    },
    en: {
      date: 'Health tip',
      readTime: '2 min',
      title: 'Heat and dehydration: simple protective steps',
      excerpt:
        'Drink regularly, protect children, and recognize early signs of dehydration.',
      detail:
        'During hot weather, dehydration can develop quickly, especially in children, older adults, and fragile patients. Watch for intense thirst, dry mouth, rare urination, dizziness, and unusual fatigue.',
      takeaways: [
        'Drink regularly before you feel very thirsty.',
        'Avoid prolonged exposure during the hottest hours.',
        'Seek care for faintness, confusion, or repeated vomiting.',
      ],
    },
  },
];

export const guides = [
  {
    id: 'understand',
    fr: {
      title: 'Comprendre',
      body: 'Nos articles expliquent les symptômes et les examens avec un langage simple.',
    },
    en: {
      title: 'Understand',
      body: 'Our articles explain symptoms and tests in plain language.',
    },
  },
  {
    id: 'prepare',
    fr: {
      title: 'Préparer',
      body: 'Avant une consultation, identifiez les informations utiles à partager avec l’équipe.',
    },
    en: {
      title: 'Prepare',
      body: 'Before a consultation, identify the useful information to share with the team.',
    },
  },
  {
    id: 'act',
    fr: {
      title: 'Agir',
      body: 'Quand un signe inquiète, le blog vous aide à décider quand demander un avis médical.',
    },
    en: {
      title: 'Act',
      body: 'When a sign worries you, the blog helps you decide when to seek medical guidance.',
    },
  },
];

export const content = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Blog / Articles Santé',
    eyebrow: 'Ressources',
    title: 'Blog / Articles Santé',
    tagline: 'Des repères clairs pour mieux comprendre votre santé',
    intro:
      'Retrouvez des conseils pratiques sur la prévention, les signes d’alerte, le laboratoire, la pharmacie et la santé familiale. Les articles complètent la consultation, ils ne la remplacent pas.',
    liveBadge: 'Articles éducatifs validés par l’équipe de la clinique',

    featuredEyebrow: 'À Lire en Premier',
    featuredTitle: 'Le guide patient du moment',
    featuredSubtitle: 'Un article prioritaire pour aider les familles à réagir avec calme et discernement.',

    libraryEyebrow: 'Bibliothèque santé',
    libraryTitle: 'Explorer les articles',
    librarySubtitle: 'Filtrez les sujets selon vos besoins et ouvrez un résumé pratique.',
    filterLabel: 'Filtrer les articles par thème',
    allArticles: 'Tous les articles',
    readArticle: 'Lire le guide',
    readMore: 'Lire',
    closeLabel: 'Fermer l’article',

    categoryLabels: {
      prevention: 'Prévention',
      family: 'Santé familiale',
      emergency: 'Urgences courantes',
      lab: 'Laboratoire',
      pharmacy: 'Pharmacie',
      maternal: 'Maternité',
    },

    guidesEyebrow: 'Méthode',
    guidesTitle: 'Comment utiliser ces articles',
    guidesSubtitle: 'Chaque ressource est pensée pour vous aider avant, pendant ou après une consultation.',

    ctaTitle: 'Un symptôme vous inquiète ?',
    ctaBody: 'Les articles donnent des repères, mais notre équipe reste disponible pour un avis adapté à votre situation.',
    ctaButton: 'Prendre Rendez-vous',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Blog / Health Articles',
    eyebrow: 'Resources',
    title: 'Blog / Health Articles',
    tagline: 'Clear guidance to better understand your health',
    intro:
      'Find practical guidance on prevention, warning signs, laboratory tests, pharmacy safety, and family health. Articles support consultation, they do not replace it.',
    liveBadge: 'Educational articles reviewed by the clinic team',

    featuredEyebrow: 'Start Here',
    featuredTitle: 'Current patient guide',
    featuredSubtitle: 'A priority article to help families respond calmly and wisely.',

    libraryEyebrow: 'Health library',
    libraryTitle: 'Explore articles',
    librarySubtitle: 'Filter topics according to your needs and open a practical summary.',
    filterLabel: 'Filter articles by topic',
    allArticles: 'All articles',
    readArticle: 'Read the guide',
    readMore: 'Read',
    closeLabel: 'Close article',

    categoryLabels: {
      prevention: 'Prevention',
      family: 'Family health',
      emergency: 'Everyday emergencies',
      lab: 'Laboratory',
      pharmacy: 'Pharmacy',
      maternal: 'Maternity',
    },

    guidesEyebrow: 'Method',
    guidesTitle: 'How to use these articles',
    guidesSubtitle: 'Each resource is designed to help before, during, or after a consultation.',

    ctaTitle: 'Worried about a symptom?',
    ctaBody: 'Articles give useful reference points, but our team remains available for guidance adapted to your situation.',
    ctaButton: 'Book an Appointment',
  },
};
