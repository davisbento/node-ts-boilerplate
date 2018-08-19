"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var userSchema = new mongoose_1.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    active: { type: Boolean, default: true },
    register_date: { type: Date, default: Date.now },
    reset_token: { type: String, required: false },
});
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
userSchema.methods.comparPassword = function (password, passwordStored) {
    return bcrypt.compareSync(password, passwordStored);
};
// tslint:disable-next-line:variable-name
exports.User = mongoose_1.model('User', userSchema);
