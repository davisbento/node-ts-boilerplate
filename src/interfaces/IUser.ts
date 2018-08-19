export interface IUser {
  name?: string;
  email: string;
  pass: string;
  active?: boolean;
  register_date?: string;
  reset_token?: string;
}