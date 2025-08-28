import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {} // na razie puste, bo korzystasz z mathTopics
    },
    pl: {
      translation: {}
    }
  },
  lng: 'pl',            // domyślny język
  fallbackLng: 'en',    // fallback gdy brak tłumaczenia
  interpolation: {
    escapeValue: false, // React sam chroni przed XSS
  },
});

export default i18n;
