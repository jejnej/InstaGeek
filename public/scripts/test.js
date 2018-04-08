console.log("hello")

  $("#commentSubmit").on("submit", function(event) {
    debugger
    event.preventDefault();
    let article = ($this);
    let articleID = article.attr("data-comment");

      $.ajax({
        type: "POST",
        data: $("#commentSubmit").serialize(),
        url: `/resource/${articleID}/comment`,
        success: function(data) {

         renderComments(data);
        }
      });
 });
