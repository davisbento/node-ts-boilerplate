"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./config/server");
var routes_1 = require("./config/routes");
require("./config/db");
require("./config/cors");
require("./config/views");
var PORT = process.env.PORT || 8080;
server_1.default.listen(PORT, function () {
    console.log('BACKEND RUNNING ON PORT', PORT);
});
routes_1.default(server_1.default);
