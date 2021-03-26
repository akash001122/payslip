'use strict';


const Boom = require('@hapi/boom');
const Bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const users = require('../../users/schemas/users');

const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client);

const JWT_SECRET_KEY = require('../util/config');

module.exports = async (request,h) => {
    try{
        const {payload} = request;
        const user = await users.findOne({email : payload.email, visibility : true})
        if(!user){
            Boom.unauthorized('Invalid email');
        }
        const match = await Bcrypt.compare(payload.password, user.password);
        if(!match){
            Boom.unauthorized('Invalid password');
        }
        const tokenId = uuid.v4()
        const session = {
            user_id: user._id,
            valid: true,
        }

        const jwt_token = jwt.sign({id:tokenId,valid:true}, JWT_SECRET_KEY, {
            expiresIn: '30 days',
        });
        const redis_result = await setAsync(tokenId, JSON.stringify(session));
        return {
            statusCode: 200,
            message: 'Login Successfull',
            data: {
              userid: user._id,
              jwt: jwt_token,
            },
        };
    }catch(e){
        return Boom.badRequest(e);
    }
    
}
