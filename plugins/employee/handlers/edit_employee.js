'use strict';

const Boom = require('@hapi/boom');
const employee = require('../schemas/employee')

module.exports = async (request, h) => {
    try{
        const {payload,params} = request;
        const options = { useFindAndModify : false, new : true};
        const employeeDetails = await employee.findOneAndUpdate({_id:params.employeeId},payload,options);
        return{
            statusCode: 201,
            message: 'Employee Details updated',
            data: employeeDetails,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}