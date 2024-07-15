import { object, string } from 'yup';

export const postSchema = object({
  guid: string().required().length(10),
});

export interface postParamsInterface {
  guid: string;
}

export const validatePostParams = (params: postParamsInterface) => {
  return postSchema.isValid(params);
};
