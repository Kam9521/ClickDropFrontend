import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">{t("app_title")}</h1>

        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-teal-300">
            {t("nav_home")}
          </a>
          <a href="#" className="hover:text-teal-300">
            {t("nav_about")}
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => i18n.changeLanguage("pl")}
              className={`px-2 py-1 rounded text-sm ${
                i18n.language === "pl"
                  ? "bg-teal-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              PL
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-2 py-1 rounded text-sm ${
                i18n.language === "en"
                  ? "bg-teal-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
