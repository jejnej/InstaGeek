exports.up = function(knex, Promise) {
  return knex.schema.createTable('resources', function (table) {
    table.increments('id');
    table.string('url');
    table.string('title');
    table.string('description');
    table.string('image_url');
    table.integer('creator_id');
    table.foreign('creator_id').references('rusers.id');
    table.integer('subject_id');
    table.foreign('subject_id').references('subjects.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('resources');
};
