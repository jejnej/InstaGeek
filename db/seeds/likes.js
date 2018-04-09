exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries

        knex('likes').insert({resource_id: 28 , user_id: 1 }),
        knex('likes').insert({resource_id: 28 , user_id: 3 }),
        knex('likes').insert({resource_id: 28 , user_id: 4 }),
        knex('likes').insert({resource_id: 28 , user_id: 6 }),
        knex('likes').insert({resource_id: 28 , user_id: 7 }),

        knex('likes').insert({resource_id: 29 , user_id: 1 }),
        knex('likes').insert({resource_id: 29 , user_id: 2 }),
        knex('likes').insert({resource_id: 29 , user_id: 4 }),
        knex('likes').insert({resource_id: 29 , user_id: 5 }),
        knex('likes').insert({resource_id: 29 , user_id: 7 }),

        knex('likes').insert({resource_id: 30 , user_id: 1 }),
        knex('likes').insert({resource_id: 30 , user_id: 2 }),
        knex('likes').insert({resource_id: 30 , user_id: 3 }),
        knex('likes').insert({resource_id: 30 , user_id: 7 }),

        knex('likes').insert({resource_id: 31 , user_id: 1 }),
        knex('likes').insert({resource_id: 31 , user_id: 4 }),
        knex('likes').insert({resource_id: 31 , user_id: 5 }),

        knex('likes').insert({resource_id: 32 , user_id: 1 }),
        knex('likes').insert({resource_id: 32 , user_id: 2 }),
        knex('likes').insert({resource_id: 32 , user_id: 3 }),
        knex('likes').insert({resource_id: 32 , user_id: 7 }),

        knex('likes').insert({resource_id: 33 , user_id: 1 }),
        knex('likes').insert({resource_id: 33 , user_id: 2 }),
        knex('likes').insert({resource_id: 33 , user_id: 3 }),
        knex('likes').insert({resource_id: 33 , user_id: 5 }),
        knex('likes').insert({resource_id: 33 , user_id: 7 }),

        knex('likes').insert({resource_id: 34 , user_id: 1 }),
        knex('likes').insert({resource_id: 34 , user_id: 3 }),

        knex('likes').insert({resource_id: 35 , user_id: 1 }),
        knex('likes').insert({resource_id: 35 , user_id: 2 }),
        knex('likes').insert({resource_id: 35 , user_id: 4 }),
        knex('likes').insert({resource_id: 35 , user_id: 5 }),
        knex('likes').insert({resource_id: 35 , user_id: 6 }),
        knex('likes').insert({resource_id: 35 , user_id: 7 }),

        knex('likes').insert({resource_id: 56 , user_id: 1 }),
        knex('likes').insert({resource_id: 56 , user_id: 2 }),
        knex('likes').insert({resource_id: 56 , user_id: 6 }),
        knex('likes').insert({resource_id: 56 , user_id: 7 }),

        knex('likes').insert({resource_id: 55 , user_id: 1 }),
        knex('likes').insert({resource_id: 55 , user_id: 2 }),
        knex('likes').insert({resource_id: 55 , user_id: 3 }),
        knex('likes').insert({resource_id: 55 , user_id: 5 }),
        knex('likes').insert({resource_id: 55 , user_id: 7 }),

        knex('likes').insert({resource_id: 54 , user_id: 1 }),
        knex('likes').insert({resource_id: 54 , user_id: 2 }),
        knex('likes').insert({resource_id: 54 , user_id: 3 }),
        knex('likes').insert({resource_id: 54 , user_id: 4 }),
        knex('likes').insert({resource_id: 54 , user_id: 5 }),
        knex('likes').insert({resource_id: 54 , user_id: 6 }),
        knex('likes').insert({resource_id: 54 , user_id: 7 }),
        knex('likes').insert({resource_id: 54 , user_id: 8 }),
        knex('likes').insert({resource_id: 54 , user_id: 9 }),
        knex('likes').insert({resource_id: 54 , user_id: 10 }),

        knex('likes').insert({resource_id: 53 , user_id: 1 }),
        knex('likes').insert({resource_id: 53 , user_id: 2 }),
        knex('likes').insert({resource_id: 53 , user_id: 3 }),
        knex('likes').insert({resource_id: 53 , user_id: 7 }),

        knex('likes').insert({resource_id: 52 , user_id: 1 }),
        knex('likes').insert({resource_id: 52 , user_id: 2 }),
        knex('likes').insert({resource_id: 52 , user_id: 3 }),
        knex('likes').insert({resource_id: 52 , user_id: 5 }),
        knex('likes').insert({resource_id: 52 , user_id: 7 }),

        knex('likes').insert({resource_id: 51 , user_id: 1 }),
        knex('likes').insert({resource_id: 51 , user_id: 3 }),

        knex('likes').insert({resource_id: 50 , user_id: 1 }),
        knex('likes').insert({resource_id: 50 , user_id: 2 }),
        knex('likes').insert({resource_id: 50 , user_id: 4 }),
        knex('likes').insert({resource_id: 50 , user_id: 5 }),
        knex('likes').insert({resource_id: 50 , user_id: 6 }),
        knex('likes').insert({resource_id: 50 , user_id: 7 }),

        knex('likes').insert({resource_id: 49 , user_id: 1 }),
        knex('likes').insert({resource_id: 49 , user_id: 2 }),
        knex('likes').insert({resource_id: 49 , user_id: 6 }),
        knex('likes').insert({resource_id: 49 , user_id: 7 }),

        knex('likes').insert({resource_id: 48 , user_id: 1 }),
        knex('likes').insert({resource_id: 48 , user_id: 2 }),
        knex('likes').insert({resource_id: 48 , user_id: 3 }),
        knex('likes').insert({resource_id: 48 , user_id: 5 }),
        knex('likes').insert({resource_id: 48 , user_id: 7 }),

        knex('likes').insert({resource_id: 47 , user_id: 1 }),
        knex('likes').insert({resource_id: 47 , user_id: 2 }),
        knex('likes').insert({resource_id: 47 , user_id: 3 }),
        knex('likes').insert({resource_id: 47 , user_id: 7 }),

        knex('likes').insert({resource_id: 46 , user_id: 1 }),
        knex('likes').insert({resource_id: 46 , user_id: 2 }),
        knex('likes').insert({resource_id: 46 , user_id: 3 }),
        knex('likes').insert({resource_id: 46 , user_id: 5 }),
        knex('likes').insert({resource_id: 46 , user_id: 7 }),

        knex('likes').insert({resource_id: 45 , user_id: 1 }),
        knex('likes').insert({resource_id: 45 , user_id: 3 }),

        knex('likes').insert({resource_id: 44 , user_id: 1 }),
        knex('likes').insert({resource_id: 44 , user_id: 2 }),
        knex('likes').insert({resource_id: 44 , user_id: 4 }),
        knex('likes').insert({resource_id: 44 , user_id: 5 }),
        knex('likes').insert({resource_id: 44 , user_id: 6 }),
        knex('likes').insert({resource_id: 44 , user_id: 7 }),

        knex('likes').insert({resource_id: 43 , user_id: 1 }),
        knex('likes').insert({resource_id: 43 , user_id: 2 }),
        knex('likes').insert({resource_id: 43, user_id: 6 }),
        knex('likes').insert({resource_id: 43 , user_id: 7 }),

        knex('likes').insert({resource_id: 42 , user_id: 1 }),
        knex('likes').insert({resource_id: 42 , user_id: 2 }),
        knex('likes').insert({resource_id: 42 , user_id: 3 }),
        knex('likes').insert({resource_id: 42 , user_id: 5 }),
        knex('likes').insert({resource_id: 42 , user_id: 7 }),

        knex('likes').insert({resource_id: 41 , user_id: 1 }),
        knex('likes').insert({resource_id: 41 , user_id: 2 }),
        knex('likes').insert({resource_id: 41 , user_id: 3 }),
        knex('likes').insert({resource_id: 41 , user_id: 7 }),

        knex('likes').insert({resource_id: 40 , user_id: 1 }),
        knex('likes').insert({resource_id: 40 , user_id: 2 }),
        knex('likes').insert({resource_id: 40 , user_id: 3 }),
        knex('likes').insert({resource_id: 40 , user_id: 5 }),
        knex('likes').insert({resource_id: 40 , user_id: 7 }),

        knex('likes').insert({resource_id: 39 , user_id: 1 }),
        knex('likes').insert({resource_id: 39 , user_id: 3 }),

        knex('likes').insert({resource_id: 38 , user_id: 1 }),
        knex('likes').insert({resource_id: 38 , user_id: 2 }),
        knex('likes').insert({resource_id: 38 , user_id: 4 }),
        knex('likes').insert({resource_id: 38 , user_id: 5 }),
        knex('likes').insert({resource_id: 38 , user_id: 6 }),
        knex('likes').insert({resource_id: 38 , user_id: 7 }),

        knex('likes').insert({resource_id: 37 , user_id: 1 }),
        knex('likes').insert({resource_id: 37 , user_id: 2 }),
        knex('likes').insert({resource_id: 37 , user_id: 6 }),
        knex('likes').insert({resource_id: 37 , user_id: 7 }),

        knex('likes').insert({resource_id: 36 , user_id: 1 }),
        knex('likes').insert({resource_id: 36 , user_id: 2 }),
        knex('likes').insert({resource_id: 36 , user_id: 3 }),
        knex('likes').insert({resource_id: 36 , user_id: 5 }),
        knex('likes').insert({resource_id: 36 , user_id: 7 })

      ]);
    });
};
