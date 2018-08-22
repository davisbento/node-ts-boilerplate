"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = process.env.MONGODB || 'mongodb://localhost:27017/myapp';
const options = {
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
mongoose.connect(uri, options).then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('mongoose connected successful');
}, err => console.log(`err connecting mongoose: ${err}`));
exports.default = mongoose;
