'use strict';
const Salary = require('../schemas/salary_structure');
const Boom = require('@hapi/boom');

module.exports = {
    name: 'get_pay_structure_by_slab',
    method: async (slab) => {
        try{
            const pay_structure = await Salary.find({slab:slab, visibility: true});
            if(!pay_structure){
                throw Boom.badRequest('Invalid slab');
            }
            return pay_structure;
        }catch(e){
            throw Boom.badRequest(e);
        }
    },
};

