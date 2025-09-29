import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { validateContact } from "../services/contactValidationService";

export default function ContactPage() {
  const { t, i18n } = useTranslation();
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    accept: false,
  });
  const [errors, setErrors] = useState({});

  const runValidate = () => {
    const errs = validateContact(values, t);
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  useEffect(() => {
    setErrors((prev) => {
      if (!Object.keys(prev).length) return prev;
      return validateContact(values, t);
    });
  }, [i18n.language, values, t]);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!runValidate()) return;
    console.log("CONTACT PAYLOAD:", values);
    alert(t("contact.success"));
  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">{t("contact.title")}</h1>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            {t("contact.name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder={t("contact.namePlaceholder")}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            {t("contact.email")}
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
          <label htmlFor="message" className="block text-sm mb-1">
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={onChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder={t("contact.messagePlaceholder")}
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              name="accept"
              checked={values.accept}
              onChange={onChange}
              className="h-4 w-4"
            />
            <span className="text-sm">
              {t("contact.acceptPrefix")}{" "}
              <a href="/terms" className="text-teal-600 hover:underline">
                {t("contact.terms")}
              </a>
            </span>
          </label>
          {errors.accept && (
            <p className="text-red-600 text-sm mt-1">{errors.accept}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white rounded py-2 hover:bg-teal-700"
        >
          {t("contact.submit")}
        </button>
      </form>
    </section>
  );
}
