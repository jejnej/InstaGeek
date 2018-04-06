$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for (user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});


const article = [

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },


  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",
    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  },

  {
    "user": "jody",
    "title": "Science is Great",
    "imageUrl": "https://images.unsplash.com/photo-1497197952040-45d5388447e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88666296af0342fcd67258d6e9531df&auto=format&fit=crop&w=800&q=60",

    "articleUrl": "https://www.sciencedaily.com/releases/2018/04/180404133532.htm",
    "description": "This article is amazing. It's about absolutely nothing",
    "likes": 5,
    "averageRating": 4,
    "userRating": 4

  }




]




function createArticleElement(article) {
  let user = article.user;
  let title = article.title;
  let url = article.articleUrl;
  let image = article.imageUrl;
  let des = article.description;
  let heartClasses = article.likes;
  let average = article.averageRating;
  let ratingClass = article.userRating;
  console.log(article);
  const articleHTML =

    `<div class = "col-sm">
<div class="card" style="width: 28rem;">
  <a href="${url}"><img class="card-img-top" src="${image}"> </a>
  <div class="card-body">
    <h3>${title}</h3>
    <p class="card-text">${des}</p>
  </div>
 <footer class = "card-footer">
<div class="icons">
<i class="fas fa-heart ${heartClasses}"></i>
   <div class="rating">
   <i class="far fa-star ${ratingClass}"></i>
   <i class="far fa-star"></i>
   <i class="far fa-star"></i>
   <i class="far fa-star"></i>
   <i class="far fa-star"></i>
<p>Rating: ${average}</p>
 </div>
  </div>
 </footer>
</div>`

  return articleHTML;
}

function renderArticles(articles) {
  var row = "";
  for (var i = 0; i < articles.length; i++) {
    if (i % 4 === 0) {
      row = $("<div/>").addClass("row");
    }
    row.prepend(createArticleElement(articles[i]));
    if (i % 4 === 3) {
      $(".article-container").prepend(row);
    }
  }
  if (articles.length % 4 !== 0) {
    $(".article-container").prepend(row)
  }
}


jQuery(document).ready(function($) {
  tab = $('.tabs h3 a');

  tab.on('click', function(event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    tab_content = $(this).attr('href');
    $('div[id$="tab-content"]').removeClass('active');
    $(tab_content).addClass('active');
  });



  renderArticles(article);

});








