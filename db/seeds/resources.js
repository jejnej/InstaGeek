var ogParser = require("og-parser");

seedResourceFromUrl = function (knex, id, url, creator, subject) {
  return new Promise(function (resolve, reject) {
    ogParser(url, function (error, data) {
      let imgurl = data.og.image.url;
      if (imgurl[0] === '/') {
        imgurl = data.og.url.substr(0, data.og.url.slice(8).search("/")+8) + imgurl;
      }
      description = data.og.description.length > 250 ? data.og.description.substring(0,250) + "..." : data.og.description;
      knex('resources').insert({
        id: id,
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
        seedResourceFromUrl(knex, 1, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 2, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2),
        seedResourceFromUrl(knex, 3, 'https://www.livescience.com/g00/33816-quantum-mechanics-explanation.html', 10, 2),
        seedResourceFromUrl(knex, 4, 'https://www.sciencedaily.com/releases/2018/03/180322181338.htm', 9, 4),
        seedResourceFromUrl(knex, 5, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 6, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2),
        seedResourceFromUrl(knex, 7, 'https://www.livescience.com/g00/33816-quantum-mechanics-explanation.html', 10, 2),
        seedResourceFromUrl(knex, 8, 'https://www.sciencedaily.com/releases/2018/03/180322181338.htm', 9, 4),
        seedResourceFromUrl(knex, 9, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 4, 7),
        seedResourceFromUrl(knex, 10, 'https://www.usmagazine.com/entertainment/news/roseanne-slammed-for-mocking-fresh-off-the-boat-black-ish/', 5, 2)
      ]);
});
};
