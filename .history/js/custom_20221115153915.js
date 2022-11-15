

// js code for footer starts from here
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// js code for footer ends from here

// header sticky
window.onscroll = function() {myFunction()};

var header = document.getElementById("my-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// header sticky end

// scroll to top of the page
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".scrolltop:hidden").stop(true, true).fadeIn();
  } else {
    $(".scrolltop").stop(true, true).fadeOut();
  }
});
$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({ scrollTop: $(".top").offset().top }, "1000");
    return false;
  });
});
