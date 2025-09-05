import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      app_title: "ClickDrop",
      nav_home: "Home",
      nav_about: "About",
      footer_text: "All rights reserved.",
      welcome: "Welcome to ClickDrop",
    },
  },
  pl: {
    translation: {
      app_title: "ClickDrop",
      nav_home: "Start",
      nav_about: "O nas",
      footer_text: "Wszelkie prawa zastrzeżone.",
      welcome: "Witamy w ClickDrop",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
