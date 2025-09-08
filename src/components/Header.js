import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">

        <h1 className="text-xl font-bold">ClickDrop</h1>

      
        <nav className="flex gap-6">
          <a href="/login" className="hover:text-teal-300">
            {t("nav_login")}
          </a>
          <a href="/register" className="hover:text-teal-300">
            {t("nav_register")}
          </a>
          <a href="/about" className="hover:text-teal-300">
            {t("nav_about")}
          </a>
        </nav>

        
        <div className="flex gap-2">
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
      </div>
    </header>
  );
}
