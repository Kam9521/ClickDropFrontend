import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      app_title: "Welcome to ClickDrop",
      nav_home: "Home",
      nav_about: "About",
      nav_login: "Login",
      nav_register: "Register",
      footer_text: "All rights reserved.",
    },
  },
  pl: {
    translation: {
      app_title: "Witamy w ClickDrop",
      nav_home: "Start",
      nav_about: "O nas",
      nav_login: "Logowanie",
      nav_register: "Rejestracja",
      footer_text: "Wszelkie prawa zastrzeżone.",
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
