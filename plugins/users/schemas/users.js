'use strict';

const { boolean } = require('joi');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const { Schema } = mongoose;
const permissions = ['hr','admin'];

const schema = new Schema(
    {
        first_name: { type: String, required: true},
        last_name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: {type: String, required: true},
        role: { type: String, enum: permissions, required: true},
        visibility: { type: Boolean, required: false, default: true},
    }
)

module.exports = mongoose.model('users', schema);