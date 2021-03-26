'use strict';

const Boom = require('@hapi/boom');
const employee = require('../schemas/employee')

module.exports = async (request, h) => {
    try{
        const { query} = request;
        const options = { useFindAndModify : false, new : true};
        const employeeDetails = await employee.findOneAndUpdate({_id: {$in: query.employeeId}}, {$set: {visibility:false}},options);
        return{
            statusCode: 204,
            message: 'Employee Deleted',
            data: employeeDetails,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}