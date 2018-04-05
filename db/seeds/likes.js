exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('likes').insert({resource_id: 6 , user_id: 2 }),
        knex('likes').insert({resource_id: 6 , user_id: 6 }),
        knex('likes').insert({resource_id: 3 , user_id: 4 }),
        knex('likes').insert({resource_id: 2 , user_id: 2 }),
        knex('likes').insert({resource_id: 4 , user_id: 3 }),
        knex('likes').insert({resource_id: 5 , user_id: 8 }),
        knex('likes').insert({resource_id: 8 , user_id: 10 }),
        knex('likes').insert({resource_id: 9 , user_id: 4 }),
        knex('likes').insert({resource_id: 4 , user_id: 10 }),
        knex('likes').insert({resource_id: 4 , user_id: 7 })
      ]);
    });
};
