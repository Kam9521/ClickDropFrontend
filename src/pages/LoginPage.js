import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { validateLogin } from "../services/loginValidationService";

export default function LoginPage() {
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});

  const runValidate = () => {
    const e = validateLogin(values, t);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  useEffect(() => {
    if (Object.keys(errors).length) runValidate();
  }, [i18n.language]);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!runValidate()) return;
    console.log("LOGIN PAYLOAD:", values);
    alert(t("login.success"));
  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">{t("login.title")}</h1>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            {t("login.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="name@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            {t("login.password")}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={values.remember}
            onChange={onChange}
            className="h-4 w-4"
          />
          <span className="text-sm">{t("login.remember")}</span>
        </label>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white rounded py-2 hover:bg-teal-700"
        >
          {t("login.submit")}
        </button>
      </form>
    </section>
  );
}
