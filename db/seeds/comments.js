const Chance = require("chance");
const chance = new Chance();


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 10, user_id: 5}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 3, user_id: 8}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 5, user_id: 2}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 6, user_id: 4}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 6, user_id: 6}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 7, user_id: 2}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 7, user_id: 4}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 7, user_id: 6}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 8, user_id: 8}),
        knex('comments').insert({comment_text: chance.sentence(), resource_id: 9, user_id: 8}),      ]);
    });
};
