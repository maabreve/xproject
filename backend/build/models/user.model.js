"use strict";
/**
 * Entity User
 * _id: id
 * name: name
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.Schema = mongoose.Schema;
var schema = new exports.Schema({
    name: {
        type: String,
        required: true
    }
});
exports.UserModel = mongoose.model('user', schema, 'Users', true);
