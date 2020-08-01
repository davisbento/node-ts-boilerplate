export interface IUser {
  name: string;
  email: string;
  password: string;
  active?: boolean;
  resetToken?: string;
}
