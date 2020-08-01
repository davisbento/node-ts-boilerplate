import { hash, compare } from 'bcryptjs';

export const hashPass = (password: string) => hash(password, 10);
export const comparePass = (password: string, userHashPassword: string) => compare(password, userHashPassword);
