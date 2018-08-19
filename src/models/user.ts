import { IUser } from 'interfaces/IUser';
import { Document, Schema, Model, model } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

interface IUserModel extends IUser, Document {
  generateHash(password: string): string;
  comparPassword(password: string, passwordStored: string): boolean;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  active: { type: Boolean, default: true },
  register_date: { type: Date, default: Date.now },
  reset_token: { type: String, required: false },
});

userSchema.methods.generateHash = (password: string) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

userSchema.methods.comparPassword = (password: string, passwordStored: string) => {
  return bcrypt.compareSync(password, passwordStored);
};

// tslint:disable-next-line:variable-name
export const User: Model<IUserModel> = model<IUserModel>('User', userSchema);
