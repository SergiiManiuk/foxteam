
document.addEventListener( 'DOMContentLoaded', function () {          
  new Splide( '#customers', {
      type     : 'loop',
      // autoWidth: true,
      rewind: false,
      perPage: 4,
      pagination: false,
      breakpoints: {
          1270: {
              perPage: 3
          },
      }
  } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {          
  new Splide( '#testimonials', {
      type     : 'loop',
      autoWidth: true
  } ).mount();
} );


// (function($) {
//   $(function() {
//     $("ul.report-tabs__caption").on("click", "li:not(.active)", function() {
//       $(this)
//         .addClass("active")
//         .siblings()
//         .removeClass("active")
//         .closest("div.report-tabs")
//         .find("div.report-tabs__content")
//         .removeClass("active")
//         .eq($(this).index())
//         .addClass("active");

//         $("div.report-image")
//             .find("img")
//             .removeClass("active")
//             .eq($(this).index())
//             .addClass("active");
//     });
//   });
// })(jQuery);

// $(document).ready(function($) {
//     $('.stellarnav').stellarNav({
//         breakpoint: 1280
//     }); 
//     $('#indexBanner').owlCarousel({
//         margin: 0,
//         nav: false,
//         responsiveClass: true,
//         animateOut: 'slideOutUp',
//         animateIn: 'slideInUp',
//         mouseDrag: false,
//         touchDrag: false,
//         items: 1,
//         autoplay: true,
//         loop: true,
//         autoplayTimeout: 15000,
//         autoplayHoverPause: true
//     })

//     $('.slider-brand').owlCarousel({
//       margin: 0,
//       nav: true,
//       responsiveClass:true,
//       loop: true,
//       items : 5,
//       dots: false, 
//       responsive: {
//         0: {
//           items: 1
//         },
//         560: {
//           items: 2
//         },
//         769: {
//           items: 3
//         },
//         1100: {
//           items: 4
//         },
//         1300: {
//           items: 4 
//         }
//       }
//     })

//     var slideDef = $('.slider-default');
//       slideDef.each(function(){
//           $(this).owlCarousel({
//             margin: 0,
//             nav: true,
//             responsiveClass:true,
//             loop: true,
//             items : 3,
//             margin: 30, 
//             stagePadding: 5,
//             nav: true,
//             dots: false,
//             responsive: {
//               0: {
//                 items: 1
//               },
//               720: {
//                 items: 2
//               },
//               1000: {
//                 items: 3
//               }
//             }
//           });
//         });

//     var $videosYoutube = $("iframe[src*='//www.youtube.com']");
//     $videosYoutube.each(function () {
//         $(this)
//             .addClass('embed-responsive-item')
//             .wrap('<div class="embed-responsive embed-responsive-16by9"/>');
//     });

//     var sliderShare = $("iframe[src*='//www.slideshare.net']");
//     sliderShare.each(function () {
//         $(this)
//             .addClass('embed-responsive-item')
//             .wrap('<div class="embed-responsive embed-responsive-1by1"/>');
//     });  

// });

