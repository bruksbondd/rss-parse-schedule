import bcryptjs from 'bcryptjs';

export const varifyEncryptedPassword = (
  clientPassword: string,
  dbPassword: string
) => {

  return bcryptjs.compare(clientPassword, dbPassword);
};
