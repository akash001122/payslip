'use strict';

const Boom = require('@hapi/boom');

const {promisify} = require('util');
const redis = require('redis');
const client = redis.createClient();
const setAsync = promisify(client.set).bind(client);
const getAsync = promisify(client.get).bind(client);

client.on('error', function(error) {
  console.error(error);
});


module.exports = async (request, h) => {
  try {
    const {tokenId} = request.auth.credentials;
    const redis_reply = await getAsync(tokenId);
    const session = JSON.parse(redis_reply);
    session.valid = false
    await setAsync(tokenId, JSON.stringify(session));
    return {
      statusCode: 200,
      message: 'Logged Out Successfully',
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};

