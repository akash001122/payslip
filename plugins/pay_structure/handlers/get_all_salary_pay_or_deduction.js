'use strict';

const Boom = require('@hapi/boom');
const salary = require('../schemas/salary_structure');

module.exports = async (request, h) => {
    try{
        const salary_structure = await salary.find({visibilty: true});
        return{
            statusCode: 201,
            message: 'Salary pay and deductions fetched',
            data: salary_structure,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}

