var ogParser = require("og-parser");

seedResourceFromUrl = function (knex, url, creator, subject) {
  return new Promise(function (resolve, reject) {
    ogParser(url, function (error, data) {
      let imgurl = data.og.image.url;
      if (imgurl[0] === '/') {
        imgurl = data.og.url.substr(0, data.og.url.slice(8).search("/")+8) + imgurl;
      }
      description = data.og.description.length > 250 ? data.og.description.substring(0,250) + "..." : data.og.description;
      knex('resources').insert({
        url: url,
        title: data.og.title,
        description: description,
        image_url: imgurl,
        creator_id: creator,
        subject_id: subject
      }).then(resolve).catch(reject);
    });
  })
}

exports.seed = function (knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2),
        seedResourceFromUrl(knex, 'https://www.livescience.com/g00/33816-quantum-mechanics-explanation.html', 10, 2),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180322181338.htm', 9, 4),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2),
        seedResourceFromUrl(knex, 'https://www.livescience.com/g00/33816-quantum-mechanics-explanation.html', 10, 2),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180322181338.htm', 9, 4),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2)
      ]);
});
};
