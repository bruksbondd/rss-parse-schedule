import type { ValidateAndSubmitForm } from "lib/interfaces/LoginForm";
import { validateLoginForm } from "lib/validators/validateLoginForm";
import { submitForm } from "pages/api/auth/submitForm";
import { setErrorMessage } from "src/features/Login/LoginService";

export const validateAndSubmitForm: ValidateAndSubmitForm = async (
  formData,
  router,
  dispatch
) => {
  if (await validateLoginForm(formData)) {
    await submitForm(router, dispatch, formData);
  } else {
    dispatch(setErrorMessage({ message: "All inputs are required" }));
  }
};
