exports.plugin = {
  name: 'employee',
  register: async (server, options) => {
    // Methods
    server.method(require('./methods/get_employee_by_id'));
    // Routes
    server.route(require('./routes/add_new_employee'));
    server.route(require('./routes/edit_employee'));
    server.route(require('./routes/get_employee_by_id'));
    server.route(require('./routes/get_all_employees'));
    server.route(require('./routes/delete_employee'));
  },
};
