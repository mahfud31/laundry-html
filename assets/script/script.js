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

// amount button
$(".quantity-button")
  .off("click")
  .on("click", function () {
    if ($(this).hasClass("quantity-add")) {
      var addValue = parseInt($(this).parent().find("input").val()) + 1;
      $(this).parent().find("input").val(addValue).trigger("change");
    }

    if ($(this).hasClass("quantity-remove")) {
      var removeValue = parseInt($(this).parent().find("input").val()) - 1;
      if (removeValue == 0) {
        removeValue = 1;
      }
      $(this).parent().find("input").val(removeValue).trigger("change");
    }
  });
