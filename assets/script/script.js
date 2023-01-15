// toggle sidebar
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

// navbar blur
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-page");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() - 20);
  });
});
