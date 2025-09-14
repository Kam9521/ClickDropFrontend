import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length) {
      validate();
    }
  }, [i18n.language]);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const errs = {};
    if (!values.email) errs.email = t("register.errors.required");
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      errs.email = t("register.errors.email");

    if (!values.nickname) errs.nickname = t("register.errors.required");

    if (!values.password) errs.password = t("register.errors.required");
    else if (values.password.length < 8)
      errs.password = t("register.errors.passwordLength");

    if (!values.confirmPassword)
      errs.confirmPassword = t("register.errors.required");
    else if (values.confirmPassword !== values.password)
      errs.confirmPassword = t("register.errors.passwordMatch");

    if (!values.agree) errs.agree = t("register.errors.agree");

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("REGISTER PAYLOAD:", values);
    alert(t("register.success"));
  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">{t("register.title")}</h1>

      <form onSubmit={onSubmit} className="space-y-5">
        {/* Email */}
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
            placeholder="name@example.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Nickname */}
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

        {/* Password */}
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

        {/* Confirm Password */}
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

        {/* Agree */}
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
