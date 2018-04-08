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
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=X9ZZ6tcxArI', 3, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=h97fXhDN5qE', 4, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=yqRT2urNPgE', 4, 7),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=rCWOdfQ3cwQ', 2, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=bSlqA8nedGQ', 5, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=sQK3Yr4Sc_k', 5, 4),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180322181338.htm', 1, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=3ez10ADR_gM', 2, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=v43ej5lCeBo', 2, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=-9o51nS-wuk', 4, 5),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/04/180405093238.htm', 3, 7),
        seedResourceFromUrl(knex, 'https://www.nytimes.com/2016/02/28/opinion/sunday/the-wrong-way-to-teach-math.html?rref=collection%2Ftimestopic%2FMathematics', 4, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=YECQ5JGNKIc', 5, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=0nCW7K9DWSY', 4, 2),
        seedResourceFromUrl(knex, 'https://www.britannica.com/science/metal-chemistry', 7, 3),
        seedResourceFromUrl(knex, 'https://www.britannica.com/science/hydrate', 9, 3),
        seedResourceFromUrl(knex, 'https://www.ted.com/playlists/306/how_to_spend_your_money', 2, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=KdQi3Q1teZU', 6, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=30KfPtHec4s', 5, 2),
        seedResourceFromUrl(knex, 'https://www.britannica.com/science/oxide', 8, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=_GaylSuAB90', 6, 2),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=9fxm85Fy4sQ', 4, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=dqxQ3E1bubI', 5, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=rJesac0_Ftw', 2, 6),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=x4zz2yH1bLE', 6, 7),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180330145340.htm', 3, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=4jISjQvdyhs', 4, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=NI9TLDIPVcs', 3, 5),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180308085547.htm', 2, 6),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=AhFjfCdG61Y', 1, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=0fKg7e37bQE&t=32s', 1, 6),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=nKeqyB8G3TY', 5, 7),
        seedResourceFromUrl(knex, 'https://www.chemistryworld.com/news/iron-rich-rock-helps-oceans-sink-atmospheric-carbon/3008858.article', 4, 3),
        seedResourceFromUrl(knex, 'https://www.ted.com/talks/janet_echelman?referrer=playlist-talks_for_the_fiber_arts_lover', 8, 7),
        seedResourceFromUrl(knex, 'https://www.ted.com/playlists/73/the_global_power_shift', 3, 5),
        seedResourceFromUrl(knex, 'https://www.codecademy.com/', 1, 6),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2017/10/171025141124.htm', 1, 5),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180326140232.htm', 7, 2),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=dpF_zAiLpvU', 7, 7),
        seedResourceFromUrl(knex, 'https://www.nytimes.com/2017/04/15/opinion/sunday/the-worlds-most-beautiful-mathematical-equation.html?rref=collection%2Ftimestopic%2FMathematics', 3, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=I-66U_8l37c', 1, 5),
        seedResourceFromUrl(knex, 'https://www.livescience.com/g00/33816-quantum-mechanics-explanation.html', 1, 2),
        seedResourceFromUrl(knex, 'http://spacenews.com/rocket-lab-sets-date-for-first-commercial-launch/', 2, 6),
        seedResourceFromUrl(knex, 'https://animagraffs.com/how-a-car-engine-works/', 4, 6),
        seedResourceFromUrl(knex, 'https://www.sciencenews.org/article/flying-insects-tell-tales-long-distance-migrations', 1, 4)
      ]);
    })
};
