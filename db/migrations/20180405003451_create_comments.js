exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.string('comment_text');
    table.integer('resource_id');
    table.integer('user_id');
    table.primary(['resource_id', 'user_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
    table.string('comment_text');
};
