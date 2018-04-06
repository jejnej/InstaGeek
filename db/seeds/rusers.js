const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('rusers').del()
    .then(function () {
      return Promise.all([
        knex('rusers').insert({id: 1, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 2, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 3, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 4, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 5, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 6, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 7, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 8, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 9, password: 'password', handle: chance.twitter().slice(1), email: chance.email(), first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('rusers').insert({id: 10, password: 'password', handle: chance.twitter().slice(1), email: chance.email(),first_name: chance.first(), last_name: chance.last(), city: chance.city()})
      ]);
    });
};
