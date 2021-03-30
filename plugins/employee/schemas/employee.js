'use strict';

const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const { Schema } = mongoose;

const schema = new Schema(
    {
        name: { type: String, required: true},
        mobile: { type: String, required: true},
        email: { type: String, trim: true, lower: true, required: true },
        address: { type: String, lower: true, required: true},
        department_name: { type: String, required: false},
        date_of_joining: { type: Date, required: true},
        ctc: { type: Number, required: true},
        slab: { type: String, required: true},
        pan_number: { type: String, required: true},
        bank_details: [
            {
            bank_name: { type: String, required: true},
            bank_ifsc: { type: String, required: true},
            account_number: { type: String, required: true},
            active: { type: Boolean, required: false, default: true}
            }
        ],
        visibility: { type: Boolean, required: false, default: true}
    }
)

module.exports = mongoose.model('employee', schema);