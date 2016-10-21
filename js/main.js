$(function() {
  $("nav > ul > li").on("click", function() {
    var id = $(this).data("nav"),
        $article = $(this).next("article[data-nav='" + id + "']"),
        $all_articles = $("nav").find("article"),
        $others = $all_articles.not($article),
        $all_navs = $("nav").find("li"),
        $closeBox = $article.find(".close"),
        fade_time = 400;

    $all_navs.css({ 'height': '8%'});
    $others.slideUp();


    $article.slideDown();

    $(".close, .left").off().on("click", function() {
      $all_articles.slideUp(1200);
      $all_navs.css({
        'height': '25%',
      });
    });
  });

});