import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  const path = window.location.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-screen-xl mx-auto px-4 py-10">
        {path === "/register" ? (
          <RegisterPage />
        ) : path === "/login" ? (
          <LoginPage />
        ) : path === "/contact" ? (
          <ContactPage />
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("welcome")}</h2>
            <p className="text-gray-600">kolejne sekcje</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
