$(document).ready(function() {
  let $btns = $('.project-area .button-group button');

  $btns.click(function(e) {
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;
  });

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });

  $('.site-main .skill-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1
      },
      560: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // sticky navigation menu

  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      });
    }
  }

  navbarFixed();

  $('.header_area .main-menu .navbar ul.navbar-nav')
    .find('a')
    .click(function() {
      var $href = $(this).attr('href');
      var $anchor = $($href).offset();
      var $newAnchor = $anchor.top - 130;
      window.scrollTo($anchor.left, $newAnchor);
      return false;
    });
});
