import { Token } from "lib/interfaces/Token";

export const getToken = (): Token => {
  // Get JWT token from session storage
  return sessionStorage.getItem("x-token") as Token;
};
