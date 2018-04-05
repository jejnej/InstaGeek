var ogParser = require("og-parser");

exports.seed = function (knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        seedResourceFromUrl('https://www.sciencedaily.com/releases/2018/04/180405093238.htm'),
        seedResourceFromUrl('https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/')
      ]);
});
};

seedResourceFromUrl = function (url) {
  return new Promise(function (resolve, reject) {
    ogParser(url, function (error, data) {
      knex('resources').insert({
        url: url,
        title: data.og.title,
        description: data.og.title,
        image_url: data.og.image.url
      }).then(resolve).catch(reject);
    });
  })
}