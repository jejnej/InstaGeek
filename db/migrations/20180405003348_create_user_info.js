exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_info', function (table) {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('city');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_info');
};
