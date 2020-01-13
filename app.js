const resize = document.getElementById("resize");
function hideResize() {
  resize.style.background = "black";
}
window.onload = hideResize(resize);

// navigation starts here
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});
$("#resize ul li a").click(function() {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});
$(".close-btn").click(function() {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});
$(function() {
  $(document).scroll(function() {
    var $nav = $(".nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
new WOW().init();
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

var sickPrimary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: "cubic-bezier(.84, 0, .08, .99)",
  asNavFor: ".text-slider",
  centerMode: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next")
};
var sickSecondary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: "cubic-bezier(.84, 0, .08, .99)",
  asNavFor: ".image-slider",
  prevArrow: $(".prev"),
  nextArrow: $(".next")
};
$(".image-slider").slick(sickPrimary);
$(".text-slider").slick(sickSecondary);

const text = document.getElementById("text");
const word = text.getElementsByTagName("span");

let i = 0;

function rotator() {
  word[i].style.display = "none";
  i = (i + 1) % word.length;
  word[i].style.display = "initial";
}
setInterval(rotator, 800);
