exports.up = function(knex, Promise) {
  return knex.schema.createTable('rusers', function (table) {
    table.increments('id');
    table.string('password');
    table.string('handle');
    table.string('email');
    table.integer('user_info_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rusers');
};
