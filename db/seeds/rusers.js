const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('rusers').del()
    .then(function () {
      return Promise.all([
        knex('rusers').insert({password: 'password', handle: 'hester', email: chance.email(), first_name: 'Hester', last_name: 'Norris', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'carrie', email: chance.email(), first_name: 'Carrie', last_name: 'Briggs', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'lida', email: chance.email(), first_name: 'Lida', last_name: 'Lewis', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'lillian', email: chance.email(), first_name: 'Lillian', last_name: 'Nash', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'melvin', email: chance.email(), first_name: 'Melvin', last_name: 'Neal', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'ryan', email: chance.email(), first_name: 'Ryan', last_name: 'Fer', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'ethel', email: chance.email(), first_name: 'Ethel', last_name: 'Massey', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'minnie', email: chance.email(), first_name: 'Minnie', last_name: 'Rob', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'cora', email: chance.email(), first_name: 'Cora', last_name: 'Massey', city: chance.city()}),
        knex('rusers').insert({password: 'password', handle: 'jorge', email: chance.email(), first_name: 'Jorge', last_name: 'Watson', city: chance.city()})
      ]);
    });
};