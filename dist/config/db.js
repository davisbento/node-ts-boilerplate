"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = 'mongodb://localhost:27017/myapp';
var options = {
    useNewUrlParser: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
};
mongoose.connect(uri, options).then(function () {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('mongoose connected successful');
}, function (err) { return console.log("err connecting mongoose: " + err); });
exports.default = mongoose;
