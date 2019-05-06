"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const formatError_1 = require("../helpers/formatError");
const user_1 = require("../models/user");
class AuthController {
    async register(req, res, next) {
        try {
            const user = await user_1.User.find({ email: req.body.email });
            if (user.length > 0) {
                // http status for 'conflict'
                return res
                    .status(409)
                    .json({ success: false, error: { message: 'E-mail already taken' } });
            }
            else {
                const data = {
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password,
                };
                const user = new user_1.User();
                const hashedPassword = await bcrypt.hash(data.password, 10);
                user.password = hashedPassword;
                user.email = data.email;
                user.name = data.name;
                const response = await user.save();
                return res.status(200).json({ success: true, data: response });
            }
        }
        catch (err) {
            const errors = formatError_1.formatError(err);
            return res.status(500).json({ sucess: false, errors });
        }
    }
}
exports.default = new AuthController();
