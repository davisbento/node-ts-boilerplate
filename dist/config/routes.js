"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_1 = require("../controllers/home");
const news_1 = require("../controllers/news");
const auth_1 = require("../controllers/auth");
const user_1 = require("../controllers/user");
const routes = (server) => {
    server.use('/api/', home_1.default);
    server.use('/api/news', news_1.default);
    server.use('/api/auth', auth_1.default);
    server.use('/api/users', user_1.default);
};
exports.default = routes;
