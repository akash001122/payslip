'use strict';

const Boom = require('@hapi/boom');
const employee = require('../schemas/employee')

module.exports = async (request, h) => {
    try{
        const employeeDetails = await employee.find({ visibility: true});
        return{
            statusCode: 200,
            message: 'Employees Details fetched',
            data: employeeDetails,
        }
    }catch(e){
        return Boom.badRequest(e);
    }
}