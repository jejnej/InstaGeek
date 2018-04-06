


function createArticleElement(article) {
  let user = article.user;
  let title = article.title;
  let url = article.articleUrl;
  let image = article.imageUrl;
  let des = article.description;
  let heartClasses = article.likes;
  let average = article.averageRating;
  let ratingClass = article.userRating;

  const articleHTML =

    `<div class = "col-sm">
<div class="card" style="width: 28rem;">
  <a href="${url}"><img class="card-img-top" src="${image}"> </a>
  <div class="card-body">
    <h3>${title}</h3>
    <p class="card-text">${des}</p>
  </div>
 <footer class = "card-footer">
<button>Comment</button>
<div class="icons">
<i class="fas fa-heart ${heartClasses}" data-heart="${article._id}"></i>
   <div class="rating" ${ratingClass}>
  <span data-rating="1">☆</span><span data-rating="2">☆</span><span data-rating="3"> ☆</span><span data-rating="4">☆</span><span data-rating="5">☆</span>
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


  $.get('/all', articles => {
    renderArticles(articles);
  });

  $(".dropdown-item").on("click", function(event) {
    event.preventDefault();
    let subject = $(this);
    let subjectID = subject.attr("data-subjects");

      $.ajax({
        type: "GET",
        url: `/subject/${subjectID}`,
        success: function(articles) {
          $("#main-board").text(subjectID);
          $(".article-container").empty();
          renderArticles(articles);
        }
      });

  });

  //  $("body").on("click", ".fa-star", function(event) {
  //   var button = $(this);
  //   var starID = button.attr("data-rating");
  //   $.ajax({
  //     type: "PUT",
  //     url: `/rating/article:id`,
  //     data: starID.serialize(),
  //     success: data => {

  //     }
  //   });

  // });

  //    $("body").on("click", ".fa-heart", function(event) {
  //   var button = $(this);
  //   var articleID = button.attr("data-heart");
  //   $.ajax({
  //     type: "PUT",
  //     url: `/like/article:id`,
  //     data:
  //     success: data => {

  //     }
  //   });

  // });

});












