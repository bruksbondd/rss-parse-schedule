import { PostPubDate } from "lib/interfaces/postValidator";

export const sanitizeDate = (date: PostPubDate) => {
  return date.replace("GMT", "+0000");
};
