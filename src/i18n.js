import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files from src/locales
import en from './locales/en/common.json';
import sl from './locales/sl/common.json';
import de from './locales/de/common.json';
import it from './locales/it/common.json';

// i18n configuration
i18n
  .use(initReactI18next) // Bind react-i18next to i18n
  .init({
    resources: {
      en: { translation: en },
      sl: { translation: sl },
      de: { translation: de },
      it: { translation: it },
    },
    lng: 'en', // Default language
    fallbackLng: ['en', 'sl', 'de', 'it'], // Fallback languages
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
