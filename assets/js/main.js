(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
 
  // owlCarousel
  $(".testimonials").owlCarousel({
    loop: true,
    margin: 30,
    items:3,
    center: true,
    navText: [
      '<i class="fas fa-long-arrow-left"></i>',
      '<i class="fas fa-long-arrow-right"></i>'
    ],
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        center: false
      },
      767: {
        items: 2,
        center: false
      },
      992: {
        items:3
      }
    }
  }); 
 
})(jQuery);
