let $dropdownBtn = $(".navbar-toggler");
let $dropdownItems = $(".collapse");
console.log($dropdownBtn);

console.log($dropdownItems);

$dropdownBtn.click(function () {
  $dropdownItems.toggle();
  console.log();
});

// scroll to top
//scrollTop returns vertical position of element
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#scroll-to-top").fadeIn();
    } else {
      $("#scroll-to-top").fadeOut();
    }
  });
  $("#scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});

// Navigation smooth scroll

$("header nav a").on("click", function (e) {
  e.preventDefault();

  const href = $(this).attr("href");

  $("html, body").animate({ scrollTop: $(href).offset().top }, 500);
});

//

$("button").on("click", function () {
  $(this).toggleClass("is-active");
});
