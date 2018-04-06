const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('rusers').del()
    .then(function () {
      return Promise.all([
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()})
      ]);
    });
};
