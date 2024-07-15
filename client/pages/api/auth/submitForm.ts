import type { FormData } from "lib/interfaces/LoginForm";
import { login } from "lib/auth/login";
import { setErrorMessage } from "src/features/Login/LoginService";
import type { Dispatch, AnyAction } from "@reduxjs/toolkit";
import type { NextRouter } from "next/router";

// Async submit more function, which handle many errors
export const submitForm = async (
  router: NextRouter,
  dispatch: Dispatch<AnyAction>,
  formData: FormData
) => {
  try {
    // Make API call to submit form data
    const response = await login(formData);

    // Handle response
    if (response.status === 200) {
      const result = await response.json();
      // Save our token
      sessionStorage.setItem("x-token", result.data);
      // Redirect to index page
      router.push("/");
    } else {
      dispatch(setErrorMessage({ message: response.message }));
    }
  } catch (error: any) {
    dispatch(
      setErrorMessage({
        message: error.message,
      })
    );
  }
};
