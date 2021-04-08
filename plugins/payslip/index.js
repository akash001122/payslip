exports.plugin = {
  name: 'payslip',
  register: async (server, options) => {
    server.route(require('./routes/generate_payslip'));
  },
};
