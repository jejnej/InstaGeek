exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('subjects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('subjects').insert({ id: '1', name: 'Math' }),
        knex('subjects').insert({ id: '2', name: 'Physics' }),
        knex('subjects').insert({ id: '3', name: 'Chemistry' }),
        knex('subjects').insert({ id: '4', name: 'Biology' }),
        knex('subjects').insert({ id: '5', name: 'Economics' }),
        knex('subjects').insert({ id: '6', name: 'Technology' }),
        knex('subjects').insert({ id: '7', name: 'Arts' })
      ]);
    });
};
