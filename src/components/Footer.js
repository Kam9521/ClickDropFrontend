import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} ClickDrop. {t("footer.rights")}
        </p>

        <nav aria-label={t("footer.navLabel")} className="flex gap-4">
          <a href="/contact" className="hover:text-teal-600">
            {t("footer.contact")}
          </a>
        </nav>
      </div>
    </footer>
  );
}
