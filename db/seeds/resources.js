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
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=X9ZZ6tcxArI', 1, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=h97fXhDN5qE', 2, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=yqRT2urNPgE', 3, 7),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=rCWOdfQ3cwQ', 4, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=bSlqA8nedGQ', 5, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=sQK3Yr4Sc_k', 6, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=3ez10ADR_gM', 7, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=v43ej5lCeBo', 8, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=-9o51nS-wuk', 9, 5),
        seedResourceFromUrl(knex, 'https://www.nytimes.com/2016/02/28/opinion/sunday/the-wrong-way-to-teach-math.html?rref=collection%2Ftimestopic%2FMathematics', 10, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=YECQ5JGNKIc', 1, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=0nCW7K9DWSY', 2, 2),
        seedResourceFromUrl(knex, 'https://www.britannica.com/science/metal-chemistry', 3, 3),
        seedResourceFromUrl(knex, 'https://www.britannica.com/science/hydrate', 4, 3),
        seedResourceFromUrl(knex, 'https://www.ted.com/playlists/306/how_to_spend_your_money', 5, 5),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/how-the-tree-frog-has-redefined-our-view-of-biology-165716397/', 6, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=30KfPtHec4s', 7, 2),
        seedResourceFromUrl(knex, 'https://www.britannica.com/science/oxide', 8, 3),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/when-galaxies-collide-the-fate-of-the-milky-way-118287066/', 9, 2),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=_GaylSuAB90', 10, 2),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/dark-energy-the-biggest-mystery-in-the-universe-9482130/', 9, 2),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=9fxm85Fy4sQ', 8, 4),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=dqxQ3E1bubI', 7, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=rJesac0_Ftw', 6, 6),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/embedded-technologies-power-from-the-people-1090564/', 5, 5),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=x4zz2yH1bLE', 4, 7),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=VvQelzRQe7k', 3, 1),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/smithsonian-institution/two-artists-search-missing-history-180968651/', 2, 7),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/videos/category/future-is-here/lemur-biology-in-the-axis-of-evil-a-schisto/', 1, 4),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180330145340.htm', 2, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=4jISjQvdyhs', 3, 3),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=eIUoIhfupuA', 4, 1),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180308085547.htm', 5, 6),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=AhFjfCdG61Y', 6, 1),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/why-prime-numbers-still-fascinate-mathematicians-180968652/', 7, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=0fKg7e37bQE&t=32s', 8, 6),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=nKeqyB8G3TY', 9, 7),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/unraveling-the-mysteries-of-the-ocean-sunfish-115258763/', 8, 4),
        seedResourceFromUrl(knex, 'https://www.chemistryworld.com/news/iron-rich-rock-helps-oceans-sink-atmospheric-carbon/3008858.article', 7, 3),
        seedResourceFromUrl(knex, 'https://www.ted.com/talks/janet_echelman?referrer=playlist-talks_for_the_fiber_arts_lover', 6, 7),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=Ud9CpGOG1GE', 4, 7),
        seedResourceFromUrl(knex, 'https://www.ted.com/playlists/73/the_global_power_shift', 3, 5),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/when-will-we-reach-end-periodic-table-180957851/', 5, 3),
        seedResourceFromUrl(knex, 'https://www.codecademy.com/', 1, 6),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/innovation/can-new-tech-help-planes-dodge-turbulence-180950369/', 2, 6),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2017/10/171025141124.htm', 3, 6),
        seedResourceFromUrl(knex, 'https://www.sciencedaily.com/releases/2018/03/180326140232.htm', 4, 2),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=dpF_zAiLpvU', 5, 7),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/science-nature/looking-for-neutrinos-natures-ghost-particles-64200742/', 6, 2),
        seedResourceFromUrl(knex, 'https://www.nytimes.com/2017/04/15/opinion/sunday/the-worlds-most-beautiful-mathematical-equation.html?rref=collection%2Ftimestopic%2FMathematics', 7, 1),
        seedResourceFromUrl(knex, 'https://www.youtube.com/watch?v=I-66U_8l37c', 2, 5),
        seedResourceFromUrl(knex, 'https://www.smithsonianmag.com/smithsonian-institution/how-one-museum-curator-bringing-burning-man-out-desert-180968614/', 1, 7),
        seedResourceFromUrl(knex, 'https://www.livescience.com/g00/33816-quantum-mechanics-explanation.html', 2, 2),
        seedResourceFromUrl(knex, 'http://spacenews.com/rocket-lab-sets-date-for-first-commercial-launch/', 3, 6),
        seedResourceFromUrl(knex, 'https://animagraffs.com/how-a-car-engine-works/', 4, 6),
        seedResourceFromUrl(knex, 'https://www.sciencenews.org/article/flying-insects-tell-tales-long-distance-migrations', 5, 4)
      ]);
    })
};
