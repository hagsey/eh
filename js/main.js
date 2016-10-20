$(function() {
  $("nav").on("click", "li", function() {
    var id = $(this).data("nav"),
        $article = $(this).next("article[data-nav='" + id + "']"),
        $all_articles = $("nav").find("article"),
        $all_navs = $("nav").find("li"),
        $closeBox = $article.find(".close"),
        fade_time = 400;

    $all_navs.css({ 'height': '8%'});
    $all_articles.slideUp();


    $article.slideToggle();

    $(".close, .left").off().on("click", function() {
      $all_articles.slideUp(1200);
      $all_navs.css({
        'height': '24.5%',
      });
    });
  });

});