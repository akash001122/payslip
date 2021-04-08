'use strict';
const auth = require('../plugins/auth');
const users = require('../plugins/users');
const employee = require('../plugins/employee');
const payslip = require('../plugins/payslip');
const pay_deduction = require('../plugins/pay_structure');
const {version} = require('../package.json');

try {
  module.exports = {
    server: {
      port: process.env.PORT || 3003,
      routes: {
        cors: {
          origin: ['*'],
          credentials: true,
          additionalExposedHeaders: ['X-Total-Count'],
        },
      },
      debug: {
        log: ['error'],
        request: ['error'],
      },
    },
    register: {
      plugins: [
        {
          plugin: require('@hapi/inert'),
        },
        {
          plugin: require('@hapi/vision'),
        },
        {
          plugin: require('hapi-swagger'),
          options: {
            info: {
              title: `Payslip Project Documentation`,
              version,
            },
            pathPrefixSize: 2,
            basePath: '/api',
            securityDefinitions: {
              Bearer: {
                'type': 'apiKey',
                'name': 'Authorization',
                'in': 'header',
                'x-keyPrefix': 'Bearer',
              },
            },
            security: [{Bearer: []}],
          },
        },
        {
          plugin: require('nipo'),
          options: {
            pino: {
              prettyPrint: true,
            },
          },
        },
        {
          plugin: require('@antoniogiordano/hacli'),
          options: {
            permissions: ['admin', 'hr'],
          },
        },
        {
          plugin: auth,
        },
        {
          plugin: users,
        },
        {
          plugin: employee,
        },
        {
          plugin: payslip,
        },
        {
          plugin: pay_deduction,
        },
      ],
    },
  };
} catch (e) {
  console.log('manifest err ', e);
} finally {
  console.log('manifest loaded!');
}
