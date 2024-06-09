import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './digital/locales/en/translation.json';
import ua from './digital/locales/ua/translation.json';


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ua: { translation: ua },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;