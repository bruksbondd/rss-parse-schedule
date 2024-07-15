import type { ValidateModalDate } from "lib/interfaces/postValidator";

export const validateModalDate: ValidateModalDate = (date) => {
  if (date) {
    return new Date(date);
  }
  return "";
};
