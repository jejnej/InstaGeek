const Chance = require("chance");
const chance = new Chance();


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({comment_text: 'wow I have not been able to figure this out, this really cleared it up', resource_id: 56, user_id: 1}),
        knex('comments').insert({comment_text: 're-post, seen it before', resource_id: 56, user_id: 2}),
        knex('comments').insert({comment_text: 'This is awesome, I need a beer', resource_id: 56, user_id: 5}),
        knex('comments').insert({comment_text: 'this is pretty impressive', resource_id: 56, user_id: 3}),
        knex('comments').insert({comment_text: 'whoa crazy', resource_id: 56, user_id: 4}),

        knex('comments').insert({comment_text: 'This actually makes sense', resource_id: 55, user_id: 4}),
        knex('comments').insert({comment_text: 'this really clarified it', resource_id: 55, user_id: 3}),
        knex('comments').insert({comment_text: 'This is awesome, I need a beer', resource_id: 55, user_id: 1}),
        knex('comments').insert({comment_text: 'I should be studying, but i can not stop searching', resource_id: s55, user_id: 2}),
        knex('comments').insert({comment_text: 'I have been browsing for hours.  What time is it?', resource_id: 55, user_id: 1}),

        knex('comments').insert({comment_text: 'Wow cool pop ups! nice job InstaGeek', resource_id: 54, user_id: 2}),
        knex('comments').insert({comment_text: 'Who else is in class surfing?', resource_id: 54, user_id: 4}),
        knex('comments').insert({comment_text: 'This is awesome, I need a beer', resource_id: 54, user_id: 5}),
        knex('comments').insert({comment_text: 'Awesome post', resource_id: 54, user_id: 6}),
        knex('comments').insert({comment_text: 'I like this', resource_id: 54, user_id: 8}),

        knex('comments').insert({comment_text: 'Nice!', resource_id: 53, user_id: 1}),
        knex('comments').insert({comment_text: 'Alright, welcome to the future!', resource_id: 53, user_id: 3}),
        knex('comments').insert({comment_text: 'Have I been living under a rock?', resource_id: 53, user_id: 5}),
        knex('comments').insert({comment_text: 'This got me thinking', resource_id: 53, user_id: 7}),
        knex('comments').insert({comment_text: 'Cool!!!', resource_id: 53, user_id: 9}),

        knex('comments').insert({comment_text: 'Very nice :) :)', resource_id: 52, user_id: 1}),
        knex('comments').insert({comment_text: 'meh', resource_id: 52, user_id: 2}),
        knex('comments').insert({comment_text: 'FINALLY!', resource_id: 52, user_id: 4}),
        knex('comments').insert({comment_text: 'kind of cool', resource_id: 52, user_id: 5}),
        knex('comments').insert({comment_text: 'This is awesome, I need a beer', resource_id: 52, user_id: 2}),
        knex('comments').insert({comment_text: 'sickkkkk', resource_id: 52, user_id: 7}),
        knex('comments').insert({comment_text: 'good read', resource_id: 52, user_id: 8}),

        knex('comments').insert({comment_text: 'really informative', resource_id: 51, user_id: 6}),
        knex('comments').insert({comment_text: 'Who else is in class surfing?', resource_id: 51, user_id: 2}),
        knex('comments').insert({comment_text: 'This is awesome, I need a beer', resource_id: 51, user_id: 9}),

        knex('comments').insert({comment_text: 'pretty cool link', resource_id: 50, user_id: 1}),
        knex('comments').insert({comment_text: 'nice photos', resource_id: 50, user_id: 5}),
        knex('comments').insert({comment_text: '2018, still checking out this link', resource_id: 50, user_id: 3}),
        knex('comments').insert({comment_text: 'definitely a fan', resource_id: 50, user_id: 2}),
        knex('comments').insert({comment_text: 'This is awesome, beer anyone?', resource_id: 50, user_id: 6}),

        knex('comments').insert({comment_text: 'Very nice :) :)', resource_id: 49, user_id: 8}),
        knex('comments').insert({comment_text: 'meh', resource_id: 49, user_id: 7}),
        knex('comments').insert({comment_text: 'FINALLY!', resource_id: 49, user_id: 6}),
        knex('comments').insert({comment_text: 'kind of cool', resource_id: 49, user_id: 5}),
        knex('comments').insert({comment_text: 'sickkkkk', resource_id: 49, user_id: 2}),
        knex('comments').insert({comment_text: 'good read', resource_id: 49, user_id: 6}),

        knex('comments').insert({comment_text: 'Very nice :) :)', resource_id:  48, user_id: 8}),
        knex('comments').insert({comment_text: 'meh', resource_id:  48, user_id: 5}),
        knex('comments').insert({comment_text: 'FINALLY!', resource_id:  48, user_id: 3}),
        knex('comments').insert({comment_text: 'kind of cool', resource_id:  48, user_id: 1}),
        knex('comments').insert({comment_text: 'sickkkkk', resource_id: 48, user_id: 2}),
        knex('comments').insert({comment_text: 'good read', resource_id:  48, user_id: 6}),

        knex('comments').insert({comment_text: 'Very nice :) :)', resource_id: 47, user_id: 1}),
        knex('comments').insert({comment_text: 'meh', resource_id: 47, user_id: 2}),
        knex('comments').insert({comment_text: 'FINALLY!', resource_id: 47, user_id: 3}),
        knex('comments').insert({comment_text: 'kind of cool', resource_id: 47, user_id: 5}),
        knex('comments').insert({comment_text: 'sickkkkk', resource_id: 47, user_id: 7}),
        knex('comments').insert({comment_text: 'good read', resource_id: 47, user_id: 8}),

        knex('comments').insert({comment_text: 'Very nice :) :)', resource_id: 46, user_id: 9}),
        knex('comments').insert({comment_text: 'meh', resource_id: 46, user_id: 6}),
        knex('comments').insert({comment_text: 'FINALLY!', resource_id: 46, user_id: 3}),
        knex('comments').insert({comment_text: 'kind of cool', resource_id: 46, user_id: 2}),
        knex('comments').insert({comment_text: 'sickkkkk', resource_id: 46, user_id: 1}),
        knex('comments').insert({comment_text: 'good read', resource_id: 46, user_id: 4}),

        knex('comments').insert({comment_text: 'wow thanks InstaGeek!', resource_id: 45 , user_id: 5}),
        knex('comments').insert({comment_text: 'interesting', resource_id: 45, user_id: 6})
        ]);
    });
};
