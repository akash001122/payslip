'use strict';

const Boom = require('@hapi/boom');
const salary = require('../schemas/salary_structure');

module.exports = async (request, h) => {
    try{
        const {salary_structure_id} = request.query;
        const options = { useFindAndModify : false, new : true};
        const salary_structure = await salary.findOneAndUpdate({_id:{ $in:salary_structure_id }},{ visibility: false},options);
        return{
            statusCode: 204,
            message: 'Salary pay or deduction deleted',
            data: salary_structure,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}

