import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const SITE_NAME = 'Clinique La Bienveillance';

const META_BY_ROUTE = {
  '/': {
    fr: {
      title: 'Clinique La Bienveillance | Centre de sante a Douala',
      description:
        'Clinique La Bienveillance, centre de sante bilingue a Douala, avec consultations, pharmacie, laboratoire, urgences et deux sites pour vous accueillir.',
    },
    en: {
      title: 'Clinique La Bienveillance | Health Center in Douala',
      description:
        'Clinique La Bienveillance is a bilingual health center in Douala offering consultations, pharmacy, lab services, emergencies, and two locations.',
    },
  },
  '/a-propos/clinique': {
    fr: {
      title: 'Notre Clinique | Clinique La Bienveillance',
      description:
        'Decouvrez notre clinique, ses valeurs, son histoire et ses deux sites a Douala pour mieux preparer votre visite.',
    },
    en: {
      title: 'Our Clinic | Clinique La Bienveillance',
      description:
        'Learn about our clinic, its values, history, and two Douala locations to prepare your visit.',
    },
  },
  '/a-propos/equipe': {
    fr: {
      title: 'Notre Equipe | Clinique La Bienveillance',
      description:
        'Rencontrez l equipe de la Clinique La Bienveillance et decouvrez les professionnels qui vous accueillent au quotidien.',
    },
    en: {
      title: 'Our Team | Clinique La Bienveillance',
      description:
        'Meet the Clinique La Bienveillance team and discover the professionals who welcome you every day.',
    },
  },
  '/services': {
    fr: {
      title: 'Nos Services | Clinique La Bienveillance',
      description:
        'Consultez les principaux services de la Clinique La Bienveillance : consultations, pharmacie, laboratoire et orientation familiale.',
    },
    en: {
      title: 'Our Services | Clinique La Bienveillance',
      description:
        'Explore Clinique La Bienveillance main services: consultations, pharmacy, laboratory, and family guidance.',
    },
  },
  '/services/pathologies': {
    fr: {
      title: 'Pathologies Traitees | Clinique La Bienveillance',
      description:
        'Decouvrez les pathologies prises en charge a la Clinique La Bienveillance, avec diagnostic, suivi et prise en charge personnalisee.',
    },
    en: {
      title: 'Conditions Treated | Clinique La Bienveillance',
      description:
        'See the conditions treated at Clinique La Bienveillance, with diagnosis, follow-up, and personalized care.',
    },
  },
  '/services/prevention': {
    fr: {
      title: 'Prevention et Depistage | Clinique La Bienveillance',
      description:
        'Consultez nos actions de prevention et de depistage pour suivre votre sante et detecter tot les facteurs de risque.',
    },
    en: {
      title: 'Prevention & Screening | Clinique La Bienveillance',
      description:
        'Browse our prevention and screening services to monitor your health and detect risks early.',
    },
  },
  '/ressources/blog': {
    fr: {
      title: 'Blog Sante | Clinique La Bienveillance',
      description:
        'Lisez les articles sante de la Clinique La Bienveillance pour mieux comprendre les soins, la prevention et le suivi medical.',
    },
    en: {
      title: 'Health Blog | Clinique La Bienveillance',
      description:
        'Read Clinique La Bienveillance health articles to better understand care, prevention, and follow-up.',
    },
  },
  '/ressources/faq': {
    fr: {
      title: 'FAQ | Clinique La Bienveillance',
      description:
        'Trouvez rapidement des reponses aux questions frequentes sur les services, les rendez-vous et l organisation de la clinique.',
    },
    en: {
      title: 'FAQ | Clinique La Bienveillance',
      description:
        'Find quick answers to common questions about services, appointments, and how the clinic is organized.',
    },
  },
  '/temoignages': {
    fr: {
      title: 'Temoignages | Clinique La Bienveillance',
      description:
        'Decouvrez des temoignages anonymises de patients et familles suivis par la Clinique La Bienveillance.',
    },
    en: {
      title: 'Testimonials | Clinique La Bienveillance',
      description:
        'Read anonymized testimonials from patients and families supported by Clinique La Bienveillance.',
    },
  },
  '/galerie': {
    fr: {
      title: 'Galerie Photo et Video | Clinique La Bienveillance',
      description:
        'Parcourez les photos et apercus video de la Clinique La Bienveillance pour mieux visualiser les espaces et services.',
    },
    en: {
      title: 'Photo and Video Gallery | Clinique La Bienveillance',
      description:
        'Browse photos and video previews of Clinique La Bienveillance to better visualize the spaces and services.',
    },
  },
  '/contact/rendez-vous': {
    fr: {
      title: 'Contact et Rendez-vous | Clinique La Bienveillance',
      description:
        'Prenez contact avec la Clinique La Bienveillance et lancez votre demande de rendez-vous directement depuis la page.',
    },
    en: {
      title: 'Contact and Appointments | Clinique La Bienveillance',
      description:
        'Contact Clinique La Bienveillance and start your appointment request directly from this page.',
    },
  },
  '/contact/coordonnees': {
    fr: {
      title: 'Coordonnees | Clinique La Bienveillance',
      description:
        'Retrouvez les coordonnees, sites et informations utiles de la Clinique La Bienveillance.',
    },
    en: {
      title: 'Contact Details | Clinique La Bienveillance',
      description:
        'Find the clinic locations, contact details, and useful information for Clinique La Bienveillance.',
    },
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export default function SeoManager() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  const meta = useMemo(() => {
    const routeMeta = META_BY_ROUTE[pathname] ?? META_BY_ROUTE['/'];
    return routeMeta[lang] ?? routeMeta.fr;
  }, [lang, pathname]);

  useEffect(() => {
    document.title = meta.title;
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });

    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, '');
    const normalizedPath = pathname === '/' ? '' : pathname;
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: `${siteUrl}${normalizedPath}` });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: `${siteUrl}${normalizedPath}` });
  }, [meta, pathname]);

  return null;
}

export { SITE_NAME };
