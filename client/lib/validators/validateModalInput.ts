import type { ValidateModalInput } from "lib/interfaces/postValidator";

export const validateModalInput: ValidateModalInput = (data) => {
  if (data) {
    return data;
  }
  return "";
};
