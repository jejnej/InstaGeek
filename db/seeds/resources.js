var ogParser = require("og-parser");

seedResourceFromUrl = function (knex, url, creator, subject) {
  return new Promise(function (resolve, reject) {
    ogParser(url, function (error, data) {
      let imgurl = data.og.image.url;
      if (imgurl[0] === '/') {
        imgurl = data.og.url.substr(0, data.og.url.slice(8).search("/")+8) + imgurl;
      }
      knex('resources').insert({
        url: url,
        title: data.og.title,
        description: data.og.description,
        image_url: imgurl,
        creator_id: creator
      }).then(resolve).catch(reject);
    });
  })
}

exports.seed = function (knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2)
      ]);
});
};
