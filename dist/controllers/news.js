"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var callApi, response;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                callApi = function () { return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        resolve('hello from async');
                    }, 5000);
                }); };
                return [4 /*yield*/, callApi()];
            case 1:
                response = _a.sent();
                res.json({ message: response });
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
