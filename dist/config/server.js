"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors_1 = require("./cors");
require("dotenv/config");
const error_1 = require("../middleware/error");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.errorMiddleware();
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(cors_1.default);
        this.app.use(morgan('combined'));
    }
    errorMiddleware() {
        this.app.use(error_1.errorHandling);
    }
    routes() {
        this.app.use(routes_1.default);
    }
}
exports.default = new App().app;
