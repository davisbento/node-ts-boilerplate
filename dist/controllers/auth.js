"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = require("express");
var userRepository_1 = require("../repository/userRepository");
var router = express.Router();
router.post('/register', function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var user, data, response, err_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, userRepository_1.findByEmail(req.body.email)];
            case 1:
                user = _a.sent();
                if (!(user.length > 0)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(500).json({ success: false, message: 'E-mail already taken' })];
            case 2:
                data = {
                    email: req.body.email,
                    pass: req.body.password
                };
                return [4 /*yield*/, userRepository_1.saveUser(data)];
            case 3:
                response = _a.sent();
                return [2 /*return*/, res.status(200).json({ success: true, user: response })];
            case 4: return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                return [2 /*return*/, res.status(500).json({ sucess: false, error: err_1 })];
            case 6: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
