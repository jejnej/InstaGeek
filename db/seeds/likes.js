const Chance = require("chance");
const chance = new Chance();


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})}),
        knex('likes').insert({resource_id: chance.integer({min: 1, max: 10}), user_id: chance.integer({min: 1, max: 10})})
      ]);
    });
};
