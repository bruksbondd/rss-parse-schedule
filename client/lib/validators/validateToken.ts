import { string } from "yup";
import { Token } from "lib/interfaces/Token";

export const TokenSchema = string().required();

export const validateToken = async (token: Token) => {
  return TokenSchema.isValid(token);
};
