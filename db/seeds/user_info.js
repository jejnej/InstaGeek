const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('user_info').del()
    .then(function () {
      return Promise.all([
        knex('user_info').insert({id: 1, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 2, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 3, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 4, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 5, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 6, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 7, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 8, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 9, first_name: chance.first(), last_name: chance.last(), city: chance.city()}),
        knex('user_info').insert({id: 10, first_name: chance.first(), last_name: chance.last(), city: chance.city()})
      ]);
    });
};
