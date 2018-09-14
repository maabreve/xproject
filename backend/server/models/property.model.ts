/**
 * Entity Property
 * _id: id
 * title: property title  
 */

import mongoose = require("mongoose");

export let Schema = mongoose.Schema;

export default interface IPropertyModel extends mongoose.Document {
    title: string;
    type: string;
    address: string;
    latitude: string;
    longitude: string;
    province: string;
    rooms: number;
    internalSize: number;
    externalSize: number;
}

let schema = new Schema({
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

export let PropertyModel  = mongoose.model<IPropertyModel>('property', schema, 'Properties', true);