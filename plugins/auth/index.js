'use strict';

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

const users = require('../users/schemas/users');

const JWT_SECRET_KEY = require('./util/config');

const validate = async (decoded) => {
  try {
    const redis_reply = await getAsync(decoded.id);
    if (!redis_reply) {
      return {isValid: false};
    }

    const session = JSON.parse(redis_reply);
    if (session.valid === true) {
      const user = await users.findOne({_id: session.user_id, visibility: true});
      if (!user) {
        return {isValid: false};
      }
      return {
        isValid: true,
        credentials: {
          tokenId: decoded.id,
          user_id: user._id,
          permission: user.role,
        },
      };
    }
    return {isValid: false};
  } catch (e) {
    console.log('Validate function error', e);
  }
};
exports.plugin = {
  name: 'auth',
  register: async (server, options) => {
    await server.register(require('hapi-auth-jwt2'));
    await server.auth.strategy('jwt', 'jwt', {
      key: JWT_SECRET_KEY,
      verifyOptions: {algorithms: ['HS256']},
      validate,
    });
    server.route(require('./routes/login'));
    server.route(require('./routes/logout'));
  },
};
