import { registerUser, login } from "../services/authService";
import { validateRegister } from "../services/validationService";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const runValidate = () => {
    const errs = validateRegister(values, t);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      runValidate();
    }
  }, [i18n.language]);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!runValidate()) return;

    try {
      const payload = {
        username: values.nickname,
        email: values.email,
        password: values.password,
      };
      const created = await registerUser(payload);

      const { token } = await login({
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", token);

      alert(`Zarejestrowano: ${created.username}`);

      setValues({
        email: "",
        nickname: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });
      setErrors({});
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">{t("register.title")}</h1>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            {t("register.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder={t("common.emailPlaceholder")}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="nickname" className="block text-sm mb-1">
            {t("register.nickname")}
          </label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            value={values.nickname}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder={t("register.nicknamePlaceholder")}
          />
          {errors.nickname && (
            <p className="text-red-600 text-sm mt-1">{errors.nickname}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            {t("register.password")}
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

        <div>
          <label htmlFor="confirmPassword" className="block text-sm mb-1">
            {t("register.confirmPassword")}
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
          />
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={values.agree}
              onChange={onChange}
              className="h-4 w-4"
            />
            <span className="text-sm">
              {t("register.agreePrefix")}{" "}
              <a href="/terms" className="text-teal-600 hover:underline">
                {t("register.terms")}
              </a>
            </span>
          </label>
          {errors.agree && (
            <p className="text-red-600 text-sm mt-1">{errors.agree}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white rounded py-2 hover:bg-teal-700"
        >
          {t("register.submit")}
        </button>
      </form>
    </section>
  );
}
