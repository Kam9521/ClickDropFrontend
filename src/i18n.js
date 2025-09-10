import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      app_title: "ClickDrop",
      nav_home: "Home",
      nav_about: "About",
      nav_register: "Register",
      nav_login: "Login",
      welcome: "Welcome to ClickDrop",
      footer: {
        rights: "All rights reserved.",
        contact: "Contact",
        navLabel: "Footer navigation",
      },
    },
  },
  pl: {
    translation: {
      app_title: "ClickDrop",
      nav_home: "Start",
      nav_about: "O nas",
      nav_register: "Rejestracja",
      nav_login: "Logowanie",
      welcome: "Witamy w ClickDrop",
      footer: {
        rights: "Wszelkie prawa zastrzeżone.",
        contact: "Kontakt",
        navLabel: "Nawigacja w stopce",
      },
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
