const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('rusers').del()
    .then(function () {
      return Promise.all([
        knex('rusers').insert({id: 1, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 1}),
        knex('rusers').insert({id: 2, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 2}),
        knex('rusers').insert({id: 3, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 3}),
        knex('rusers').insert({id: 4, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 4}),
        knex('rusers').insert({id: 5, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 5}),
        knex('rusers').insert({id: 6, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 6}),
        knex('rusers').insert({id: 7, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 7}),
        knex('rusers').insert({id: 8, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 8}),
        knex('rusers').insert({id: 9, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 9}),
        knex('rusers').insert({id: 10, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), user_info_id: 10})
      ]);
    });
};
