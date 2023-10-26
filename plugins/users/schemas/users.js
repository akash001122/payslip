'use strict';

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const {Schema} = mongoose;
const permissions = ['hr', 'admin'];

const schema = new Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true, unique: true, lowercase: true},
  password: {type: String, required: true},
  role: {type: String, enum: permissions, required: true},
  visibility: {type: Boolean, required: false, default: true},
});
schema.index({
  email: 1,
  visibility: 1,
});

module.exports = mongoose.model('users', schema);
