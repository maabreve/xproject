/**
 * Entity User
 * _id: id
 * name: name 
 */

import mongoose = require("mongoose");

export let Schema = mongoose.Schema;

export default interface IUserModel extends mongoose.Document {
    name: string;
}

let schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export let UserModel  = mongoose.model<IUserModel>('user', schema, 'Users', true);