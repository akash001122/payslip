'use strict';

const Boom = require('@hapi/boom');
const salary = require('../schemas/salary_structure');

module.exports = async (request, h) => {
    try{
        const {payload,params} = request;
        const options = { useFindAndModify : false, new : true};
        const salary_structure = await salary.findOneAndUpdate({_id:params.salary_structure_id,visibility:true},payload,options);
        return{
            statusCode: 201,
            message: 'Salary pay or deduction updated',
            data: salary_structure,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}

