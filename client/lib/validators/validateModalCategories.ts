import type { ValidateModalCategories } from "lib/interfaces/postValidator";

export const validateModalCategories: ValidateModalCategories = (array) => {
  if (array.length !== 0) {
    return array.join(",");
  }
  return "";
};
