exports.plugin = {
    name: 'users',
    register: async (server, options) => {
      server.route(require('./routes/add_new_user'));
      server.route(require('./routes/edit_user'));
      server.route(require('./routes/get_user_by_id'));
      server.route(require('./routes/get_all_users'));
      server.route(require('./routes/delete_user'));
    },
  };