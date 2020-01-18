$(document).ready(function() {
  //Isotope library function to filter out the project content

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

  $('.site-main .skill-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2000,
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

  // function to make smooth scrolling to navagate the website by cllicking navigation bar
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
