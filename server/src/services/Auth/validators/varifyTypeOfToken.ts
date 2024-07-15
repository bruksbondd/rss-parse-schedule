export const varifyTypeOfToken = (token: string, targetType: string) => {
  return typeof token === targetType ? true : false;
};
