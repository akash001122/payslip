'use strict';

const Boom = require('@hapi/boom');
const users = require('../schemas/users')

module.exports = async (request, h) => {
    try{
        const user = await users.find({visibility:true},{password:0});
        return{
            statusCode: 200,
            message: 'User details fetched',
            data: user,
        }
    }catch(e){
       return Boom.badRequest(e);
    }
}