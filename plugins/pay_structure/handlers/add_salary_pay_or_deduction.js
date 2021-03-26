'use strict';

const Boom = require('@hapi/boom');
const salary = require('../schemas/salary_structure');

module.exports = async (request, h) => {
    try{
        const {payload} = request;

        const salary_structure = await salary.create(payload);
        return{
            statusCode: 201,
            message: 'Salary pay or deduction created',
            data: salary_structure,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}

