const Chance = require("chance");
const chance = new Chance();


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ratings').insert({rating_value:3, resource_id:10, user_id:10}),
        knex('ratings').insert({rating_value:1, resource_id:4, user_id:8}),
        knex('ratings').insert({rating_value:5, resource_id:1, user_id:4}),
        knex('ratings').insert({rating_value:5, resource_id:8, user_id:7}),
        knex('ratings').insert({rating_value:5, resource_id:2, user_id:6}),
        knex('ratings').insert({rating_value:5, resource_id:9, user_id:9}),
        knex('ratings').insert({rating_value:1, resource_id:5, user_id:7}),
        knex('ratings').insert({rating_value:2, resource_id:7, user_id:10}),
        knex('ratings').insert({rating_value:3, resource_id:5, user_id:10}),
        knex('ratings').insert({rating_value:3, resource_id:1, user_id:6})
      ]);
    });
};
