"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./config/server");
// import './config/db';
const PORT = process.env.PORT || 8080;
server_1.default.listen(PORT, () => {
    console.log('BACKEND RUNNING ON PORT', PORT);
});
