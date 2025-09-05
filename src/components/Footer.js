import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        <span>
          © {new Date().getFullYear()} {t("app_title")}
        </span>
        <span>{t("footer_text")}</span>
      </div>
    </footer>
  );
}
