"use strict";
/**
 * Entity Property
 * _id: id
 * title: property title
 */
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
exports.Schema = mongoose.Schema;
var schema = new exports.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    internalSize: {
        type: Number,
        required: true
    },
    externalSize: {
        type: Number,
        required: true
    },
});
exports.PropertyModel = mongoose.model('property', schema, 'Properties', true);
