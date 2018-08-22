"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const path_1 = require("path");
const nunjucks_1 = require("nunjucks");
const viewsConfig = () => (nunjucks_1.default.configure(path_1.default.join(__dirname, '../app/views'), {
    autoescape: true,
    express: server_1.default,
}));
exports.default = viewsConfig;
