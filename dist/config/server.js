"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        this.app.set('view engine', 'njk');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(express.static(path.join(__dirname, '../app/public')));
    };
    return App;
}());
exports.default = new App().app;
