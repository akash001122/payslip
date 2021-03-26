'use strict';

const Boom = require('@hapi/boom');
const users = require('../schemas/users')

module.exports = async (request, h) => {
    try{
        const {query} = request;
        const options = { useFindAndModify : false, new : true};
        const user = await users.findOneAndUpdate({_id:{$in:query.userId}},{$set:{visibility:false}},options);
        return{
            statusCode: 204,
            message: 'User deleted',
            data: user,
        }
    }catch(e){
       return Boom.badRequest(e);
    }
}