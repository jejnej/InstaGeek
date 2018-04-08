const Chance = require("chance");
const chance = new Chance();


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({comment_text: 'wow I have not been able to figure this out, this really cleared it up', resource_id: 43, user_id: 1}),
        knex('comments').insert({comment_text: 're-post, seen it before', resource_id: 43, user_id: 1}),
        knex('comments').insert({comment_text: 'this is pretty impressive', resource_id: 43, user_id: 2}),
        knex('comments').insert({comment_text: 'whoa crazy', resource_id: 44, user_id: 2}),
        knex('comments').insert({comment_text: 'this really clarified it', resource_id: 44, user_id: 3}),
        knex('comments').insert({comment_text: '2018, still checking out this link', resource_id: 44, user_id: 4}),
        knex('comments').insert({comment_text: 'definitely a fan', resource_id: 44, user_id: 4}),
        knex('comments').insert({comment_text: 'not a great source', resource_id: 45, user_id: 5}),
        knex('comments').insert({comment_text: 'wow thanks InstaGeek!', resource_id: 45, user_id: 5}),
        knex('comments').insert({comment_text: 'interesting', resource_id: 45, user_id: 6}),      ]);
    });
};
