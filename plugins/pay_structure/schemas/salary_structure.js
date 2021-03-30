'use strict';

const { string } = require('joi');
const mongoose = require('mongoose');
const { bold } = require('../../auth/util/config');

mongoose.Promise = require('bluebird');
const { Schema } = mongoose;
const pay_or_deductions = ['pay','deduction'];
const percentage_or_amount = ['percentage','amount'];
const schema = new Schema(
    {
        name: { type: String, required: false },
        slab: { type: String, required: true},
        type:{ type: String, enum: pay_or_deductions, required: true},
        percentage_or_amount:{ type: String, enum: percentage_or_amount, required: true},
        value: {type: Number, required: false},
        visibility: { type: Boolean, required: false, default: true}
    }
)

module.exports = mongoose.model('salary_structure', schema);