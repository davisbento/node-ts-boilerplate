"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./config/server");
const routes_1 = require("./config/routes");
require("./config/db");
require("./config/cors");
require("./config/views");
require('dotenv').config();
const PORT = process.env.PORT || 8080;
routes_1.default(server_1.default);
server_1.default.listen(PORT, () => {
    console.log('BACKEND RUNNING ON PORT', PORT);
});
