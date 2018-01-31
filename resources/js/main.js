$(document).ready(function() {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  let lastScrollTop = 0;
  $(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    if (scrollTop >= lastScrollTop + 50) {
      const navbarHeight = $('nav').css('height');
      $('nav').animate({top: "-" + navbarHeight}, 150);
      lastScrollTop = scrollTop;
    } else if (lastScrollTop >= scrollTop + 50) {
      $('nav').animate({top: "0"}, 150);
      lastScrollTop = scrollTop;
    }
  });
});
