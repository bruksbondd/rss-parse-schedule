import { FormData } from "lib/interfaces/LoginForm";
import { AUTH_ENDPOINT } from "lib/constants/endpoints";

// Standart login form
export const login = async ({ username, password }: FormData) => {
  return await fetch(AUTH_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).catch((error) => error);
};
