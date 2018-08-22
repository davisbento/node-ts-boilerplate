"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: [4, 'Password must be greater than 3'] },
    active: { type: Boolean, default: true },
    register_date: { type: Date, default: Date.now },
    reset_token: { type: String, required: false },
});
userSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
userSchema.methods.comparPassword = (password, passwordStored) => {
    return bcrypt.compareSync(password, passwordStored);
};
// tslint:disable-next-line:variable-name
exports.User = mongoose_1.model('User', userSchema);
