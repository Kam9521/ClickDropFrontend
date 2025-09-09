
import i18n from "../i18n";

export function setLanguage(lang) {
  i18n.changeLanguage(lang);
}

export function getCurrentLanguage() {
  return i18n.language;
}
