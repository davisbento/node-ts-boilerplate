"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_1 = require("../controllers/home");
var news_1 = require("../controllers/news");
var auth_1 = require("../controllers/auth");
var routes = function (server) {
    server.use('/', home_1.default);
    server.use('/news', news_1.default);
    server.use('/auth', auth_1.default);
};
exports.default = routes;
