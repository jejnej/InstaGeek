$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});


const articleData = {
  "user": {
    "name": "Newton",
    },
 "resourceURL": {
    "url": "https://www.google.ca/"
  },
"title": "Hello This is a Title",
  "Description": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
"created_at": 1461116232227,
"imageURL": "https://images.unsplash.com/photo-1502787530428-11cf61d6ba18?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee60964c06a30ae7596dce9f7380a391&auto=format&fit=crop&w=800&q=60"

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

function createArticleElement(article) {
  let user =  article.user.name;
  let resourceURL = article.resourceURL.url;
  let title = article.title;
  let description = article.description.text;
  let dateCreated = article.created_at;
  let heartClasses = article.liked ? 'liked' : '';

  const resourceHTML =

`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${imgURl}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text"> ${description} </p>
    </div>
  <footer>
<div>
<p class="date">${dateCreated}</p>
</div>
<div class="icons">
<i class="fas fa-heart ${heartClasses}"></i>
   </div>
 </footer>
</div>
</div>`

  return resourceHTML;
}







});









