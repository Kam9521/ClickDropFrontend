export function validateContact(values, t) {
  const errs = {};

  if (!values.name) errs.name = t("contact.errors.required");
  if (!values.email) {
    errs.email = t("contact.errors.required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errs.email = t("contact.errors.email");
  }
  if (!values.message) {
    errs.message = t("contact.errors.required");
  } else if (values.message.trim().length < 10) {
    errs.message = t("contact.errors.messageLength");
  }
  if (!values.accept) errs.accept = t("contact.errors.accept");

  return errs;
}
