"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var path_1 = require("path");
var nunjucks_1 = require("nunjucks");
var viewsConfig = function () { return (nunjucks_1.default.configure(path_1.default.join(__dirname, '../app/views'), {
    autoescape: true,
    express: server_1.default,
})); };
exports.default = viewsConfig;
