(function($) {
  "use strict";

  let bodyElm = document.bodyElm || document.documentElement;
  let langBtn = document.querySelectorAll('.changeLang');
  langBtn.forEach(singleBtn => {
    if (localStorage.getItem('langs')) {
        bodyElm.classList.add('rtlVrs')
        singleBtn.dataset.lang = "arabic";
        singleBtn.innerHTML = "English";
    }else{ 
        bodyElm.classList.remove('rtlVrs')
    }
  }) 
  window.addEventListener('click', (e) => {
      if (e.target.classList.contains('changeLang')) {
          if (e.target.dataset.lang == "english") {
              e.target.dataset.lang = "arabic";
              e.target.innerHTML = "English";
              localStorage.setItem('langs', "arabic")
          }else if (e.target.dataset.lang == "arabic") {
              e.target.dataset.lang = "english";
              e.target.innerHTML = "Arabic";
              localStorage.removeItem('langs')
          }  
      }
      if (localStorage.getItem('langs')) {
          bodyElm.classList.add('rtlVrs')
      }else{ 
          bodyElm.classList.remove('rtlVrs')
      }
  })



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
    // rtl: true,
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
