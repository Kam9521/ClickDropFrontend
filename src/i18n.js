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
      register: {
        title: "Sign up",
        email: "Email",
        nickname: "Nickname",

        password: "Password",
        confirmPassword: "Confirm password",
        agreePrefix: "I accept the",
        terms: "terms",
        submit: "Create account",
        success: "Registration submitted (demo).",
        errors: {
          required: "This field is required.",
          email: "Enter a valid email.",
          passwordLength: "Password must be at least 8 characters.",
          passwordMatch: "Passwords must match.",
          agree: "You must accept the terms.",
        },
      },
      login: {
        title: "Sign in",
        email: "Email",
        password: "Password",
        remember: "Remember me",
        submit: "Log in",
        success: "Login submitted (demo).",
        errors: {
          required: "This field is required.",
          email: "Enter a valid email.",
          passwordLength: "Password must be at least 8 characters.",
        },
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
      register: {
        title: "Rejestracja",
        email: "Email",
        nickname: "Nick",
        nicknamePlaceholder: "np. Kamil",
        password: "Hasło",
        confirmPassword: "Potwierdź hasło",
        agreePrefix: "Akceptuję",
        terms: "regulamin",
        submit: "Zarejestruj się",
        success: "Rejestracja wysłana (demo).",
        errors: {
          required: "To pole jest wymagane.",
          email: "Podaj poprawny adres email.",
          passwordLength: "Hasło musi mieć co najmniej 8 znaków.",
          passwordMatch: "Hasła muszą być identyczne.",
          agree: "Musisz zaakceptować regulamin.",
        },
      },
      login: {
        title: "Logowanie",
        email: "E-mail",
        password: "Hasło",
        remember: "Zapamiętaj mnie",
        submit: "Zaloguj się",
        success: "Logowanie wysłane (demo).",
        errors: {
          required: "To pole jest wymagane.",
          email: "Podaj poprawny adres e-mail.",
          passwordLength: "Hasło musi mieć co najmniej 8 znaków.",
        },
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
