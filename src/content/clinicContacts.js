export const directContact = {
  label: {
    fr: 'Contact direct',
    en: 'Direct contact',
  },
  display: '+237 677 60 90 56',
  tel: '+237677609056',
  wa: '237677609056',
};

export const mainSiteContact = {
  title: {
    fr: 'Site principal',
    en: 'Main site',
  },
  subtitle: {
    fr: 'Ancienne gare routière, Dakar, Douala',
    en: 'Ancient bus station, Dakar, Douala',
  },
  phones: [
    {
      display: '+237 693 32 16 84',
      tel: '+237693321684',
      wa: '237693321684',
    },
    {
      display: '+237 670 10 34 04',
      tel: '+237670103404',
      wa: '237670103404',
    },
    {
      display: '+237 699 61 50 98',
      tel: '+237699615098',
      wa: '237699615098',
    },
    {
      display: directContact.display,
      tel: directContact.tel,
      wa: directContact.wa,
    },
  ],
};

export const secondSiteContact = {
  title: {
    fr: 'Centre de santé La Bienveillance',
    en: 'La Bienveillance Health Center',
  },
  subtitle: {
    fr: 'Yassa, Centre de santé La Bienveillance',
    en: 'Yassa, La Bienveillance Health Center',
  },
  phones: [
    {
      display: '+237 694 81 10 69',
      tel: '+237694811069',
      wa: '237694811069',
    },
    {
      display: '+237 674 38 21 71',
      tel: '+237674382171',
      wa: '237674382171',
    },
    {
      display: '+237 670 13 39 77',
      tel: '+237670133977',
      wa: '237670133977',
    },
  ],
};

export const contactGroups = {
  fr: [
    {
      id: 'main-site',
      title: mainSiteContact.title.fr,
      subtitle: mainSiteContact.subtitle.fr,
      phones: mainSiteContact.phones,
      note: 'Les contacts historiques du site principal, avec la ligne directe.',
      href: mainSiteContact.phones[0].tel,
    },
    {
      id: 'second-site',
      title: secondSiteContact.title.fr,
      subtitle: secondSiteContact.subtitle.fr,
      phones: secondSiteContact.phones,
      note: 'Les trois lignes du centre de santé de Yassa.',
      href: secondSiteContact.phones[0].tel,
    },
    {
      id: 'direct-contact',
      title: directContact.label.fr,
      subtitle: 'WhatsApp et appels rapides',
      phones: [directContact],
      note: 'Contact direct pour les demandes rapides.',
      href: directContact.tel,
    },
  ],
  en: [
    {
      id: 'main-site',
      title: mainSiteContact.title.en,
      subtitle: mainSiteContact.subtitle.en,
      phones: mainSiteContact.phones,
      note: 'The main site’s historical contacts, plus the direct line.',
      href: mainSiteContact.phones[0].tel,
    },
    {
      id: 'second-site',
      title: secondSiteContact.title.en,
      subtitle: secondSiteContact.subtitle.en,
      phones: secondSiteContact.phones,
      note: 'The three lines for the Yassa health center.',
      href: secondSiteContact.phones[0].tel,
    },
    {
      id: 'direct-contact',
      title: directContact.label.en,
      subtitle: 'WhatsApp and quick calls',
      phones: [directContact],
      note: 'Direct contact for urgent requests.',
      href: directContact.tel,
    },
  ],
};

export const clinicLocations = {
  fr: [
    {
      id: 'main-location',
      kicker: 'Site principal',
      name: 'Clinique La Bienveillance - Ancienne gare routiere',
      address: 'Ancienne gare routiere, Dakar, Douala',
      hours: 'Ouvert 24h/24, 7j/7',
      phones: mainSiteContact.phones,
      mapTitle: 'Carte Google Maps du site principal',
    },
    {
      id: 'second-location',
      kicker: 'Second site',
      name: 'Centre de sante La Bienveillance - Yassa',
      address: 'Yassa, centre de sante la bienveillance',
      hours: 'Ouvert 24h/24, 7j/7',
      phones: secondSiteContact.phones,
      mapTitle: 'Carte Google Maps du second site',
    },
  ],
  en: [
    {
      id: 'main-location',
      kicker: 'Main site',
      name: 'Clinique La Bienveillance - Ancient bus station',
      address: 'Ancient bus station, Dakar, Douala',
      hours: 'Open 24 hours, every day',
      phones: mainSiteContact.phones,
      mapTitle: 'Google Maps view of the main location',
    },
    {
      id: 'second-location',
      kicker: 'Second site',
      name: 'La Bienveillance Health Center - Yassa',
      address: 'Yassa, La Bienveillance Health Center',
      hours: 'Open 24 hours, every day',
      phones: secondSiteContact.phones,
      mapTitle: 'Google Maps view of the second location',
    },
  ],
};
