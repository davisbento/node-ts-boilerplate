"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.set('view engine', 'njk');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(express.static(path.join(__dirname, '../app/public')));
    }
}
exports.default = new App().app;
