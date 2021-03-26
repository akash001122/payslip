'use strict';

const Boom = require('@hapi/boom');
const employee = require('../schemas/employee')

module.exports = async (request, h) => {
    try{
        const {query} = request;
        const employeeDetails = await employee.find({_id: { $in:query.employeeId}, visibility: true});
        return{
            statusCode: 200,
            message: 'Employee Details fetched',
            data: employeeDetails,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}