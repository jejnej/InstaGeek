const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('rusers').del()
    .then(function () {
      return Promise.all([
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 1}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 2}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 3}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 4}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 5}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 6}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 7}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 8}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 9}),
        knex('rusers').insert({ password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 10})
      ]);
    });
};
