exports.up = function(knex, Promise) {
  return knex.schema.createTable('rusers', function (table) {
    table.increments('id');
    table.string('password');
    table.string('handle');
    table.string('email');
    table.string('first_name');
    table.string('last_name');
    table.string('city');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rusers');
};
