exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id');
    table.string('comment_text');
    table.integer('resource_id');
    table.integer('user_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
