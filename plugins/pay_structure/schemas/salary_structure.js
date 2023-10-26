'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const {Schema} = mongoose;
const pay_or_deductions = ['pay', 'deduction'];
const percentage_or_amount = ['percentage', 'amount'];
const schema = new Schema({
  name: {type: String, required: false},
  slab: {type: String, required: true},
  type: {type: String, enum: pay_or_deductions, required: true},
  pf: {type: Boolean, required: true},
  basic_pay: {type: Boolean, required: true},
  percentage_or_amount: {type: String, enum: percentage_or_amount, required: true},
  value: {type: Number, required: false},
  visibility: {type: Boolean, required: false, default: true},
});
schema.index({
  slab: 1,
  visibility: 1,
});
module.exports = mongoose.model('salary_structure', schema);
