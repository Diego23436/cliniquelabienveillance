import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('clb-lang') : null;
    return saved === 'en' ? 'en' : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('clb-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  // t() looks up a key in the current language, falls back to the key itself
  const t = useCallback(
    (key) => translations[lang]?.[key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
