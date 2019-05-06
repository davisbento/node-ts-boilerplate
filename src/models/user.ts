import { IUser } from 'interfaces/IUser';
import { Document, Schema, Model, model } from 'mongoose';

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    minlength: [4, 'Password must be greater than 3'],
  },
  active: { type: Boolean, default: true },
  register_date: { type: Date, default: Date.now },
  reset_token: { type: String, required: false },
});

// tslint:disable-next-line:variable-name
export const User: Model<IUserModel> = model<IUserModel>('User', userSchema);
