export function validateLogin(values, t) {
  const errs = {};

  if (!values.email) errs.email = t("login.errors.required");
  else if (!/^\S+@\S+\.\S+$/.test(values.email))
    errs.email = t("login.errors.email");

  if (!values.password) errs.password = t("login.errors.required");
  else if (values.password.length < 8)
    errs.password = t("login.errors.passwordLength");

  return errs;
}
