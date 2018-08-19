"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var user_1 = require("../models/user");
exports.findByEmail = function (email) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var criteria, user, err_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                criteria = { email: email };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_1.User.find(criteria)];
            case 2:
                user = _a.sent();
                return [2 /*return*/, user];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, err_1];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.saveUser = function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var user, newUser, err_2;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = new user_1.User();
                user.pass = user.generateHash(data.pass);
                user.email = data.email;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user.save()];
            case 2:
                newUser = _a.sent();
                return [2 /*return*/, newUser];
            case 3:
                err_2 = _a.sent();
                throw new Error(err_2.message);
            case 4: return [2 /*return*/];
        }
    });
}); };
