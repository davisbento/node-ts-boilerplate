"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = require("../models/user");
const formatError_1 = require("../helpers/formatError");
const router = express.Router();
router.post('/register', async (req, res) => {
    try {
        const user = await user_1.User.find({ email: req.body.email });
        if (user.length > 0) {
            // http status for 'conflict'
            return res.status(409).json({ success: false, error: { message: 'E-mail already taken' } });
        }
        else {
            const data = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            };
            const user = new user_1.User();
            user.password = data.password ? user.generateHash(data.password) : '';
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
});
exports.default = router;
