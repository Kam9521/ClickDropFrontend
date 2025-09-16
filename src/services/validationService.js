export function validateRegister(values, t) {
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

  return errs;
}
