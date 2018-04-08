const Chance = require("chance");
const chance = new Chance();

exports.seed = function(knex, Promise) {
  return knex('rusers').del()
    .then(function () {
      return Promise.all([
        knex('rusers').insert({password: 'password', handle: 'Falconheavy', email: 'Cora@eggmail.com', first_name: 'Cora', last_name: 'Massey', city: 'Ottawa'}),
        knex('rusers').insert({password: 'password', handle: 'Teslax', email: 'Jorge@mail.com', first_name: 'Jorge', last_name: 'Watson', city: 'Vaugan'}),
        knex('rusers').insert({password: 'password', handle: 'Jupiter', email: 'Minnie@mousemail.com', first_name: 'Minnie', last_name: 'Rob', city: 'Vancouver'}),
        knex('rusers').insert({password: 'password', handle: 'Mathwiz', email: 'Lilly@mail.com', first_name: 'Lillian', last_name: 'Nash', city: 'Miami'}),
        knex('rusers').insert({password: 'password', handle: 'Bragamat', email: 'Melvin@mail.com', first_name: 'Melvin', last_name: 'Neal', city: 'Edmonton'}),
        knex('rusers').insert({password: 'password', handle: 'Rocketman', email: 'Ryan@mail.com', first_name: 'Ryan', last_name: 'Fer', city: 'New York'}),
        knex('rusers').insert({password: 'password', handle: 'Jody', email: 'jody@jodymail.com', first_name: 'Jody', last_name: 'S', city: 'Toronto'}),
        knex('rusers').insert({password: 'password', handle: 'Thomas', email: 'thomas@thomasmail.com', first_name: 'Thomas', last_name: 'S', city: 'Toronto'}),
        knex('rusers').insert({password: 'password', handle: 'Michael', email: 'michael@mymail.com', first_name: 'Michael', last_name: 'S', city: 'Toronto'}),
        knex('rusers').insert({password: 'password', handle: 'Saturn5', email: 'Ethel@mail.com', first_name: 'Ethel', last_name: 'Massey', city: 'Calgary'})
      ]);
    });
};
