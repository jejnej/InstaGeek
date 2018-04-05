exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('password');
    table.string('handle');
    table.string('email');
    table.integer('user_info_id');
    table.foreign('user_info_id').references('user_info.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
