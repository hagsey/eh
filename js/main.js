$(function() {
  $("nav").on("click", "li", function() {
    var id = $(this).data("nav"),
        $article = $("main").find("article[data-nav='" + id + "']"),
        $all_articles = $("main").find("article"),
        $closeBox = $article.find(".close"),
        fade_time = 200;

    $all_articles.hide();

    $article.show();

    $closeBox.on("click", function() {
      $all_articles.fadeOut(fade_time);
    });
  });

});