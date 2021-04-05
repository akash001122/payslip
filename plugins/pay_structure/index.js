exports.plugin = {
    name: 'pay_deduction',
    register: async (server, options) => {
      //Methods
      server.method(require('./methods/get_pay_structure_by_slab'));
      //Routes
      server.route(require('../pay_structure/routes/add_salary_pay_or_deduction'));
      server.route(require('../pay_structure/routes/edit_salary_pay_or_deduction_by_id'));
      server.route(require('../pay_structure/routes/get_salary_pay_or_deduction_by_id'));
      server.route(require('../pay_structure/routes/get_all_salary_pay_or_deduction'));
      server.route(require('../pay_structure/routes/delete_salary_pay_or_deduction'));
    },
  };