import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import pt from "./locales/pt.json";
import useStore from "./store";

export const resources = {
  en: { 
    translation: en,
  },
  pt: {
    translation: pt,
  },
};

const initialLanguage = useStore.getState().language;

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  keySeparator: ".",
});

export default i18n;