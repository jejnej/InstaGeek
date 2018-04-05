exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', function (table) {
    table.integer('resource_id');
    table.integer('user_id');
    table.primary(['resource_id', 'user_id']);
    table.foreign('user_id').references('users.id');
    table.foreign('resource_id').references('resources.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes');
};
