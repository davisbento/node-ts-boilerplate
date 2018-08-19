export interface IUser {
  name: string;
  email: string;
  password: string;
  active?: boolean;
  register_date?: string;
  reset_token?: string;
}