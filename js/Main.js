/*------------------------------------------------------------------
[Master Stylesheet]

Project:    Tv - Entertainment Responsive Landing Page
Version:    1.3
Author:	    Iwthemes
Support:    support@iwthemes.com
Portfolio:  https://themeforest.net/user/iwthemes/portfolio?ref=iwthemes

-------------------------------------------------------------------*/

 (function ($) {
    "use strict";

     $(document).ready(function(){
        $('nav ul li a').click(function(){
            var el = $(this).attr('href');
            var elWrapped = $(el);
            scrollToDiv(elWrapped,40);
            return false;
        });
        function scrollToDiv(element,navheight){
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop-navheight;
                $('body,html').animate({
                            scrollTop: totalScroll
                }, 500);
        }
    });

     $(document).ready(function(){
         $('.episodes-carousel').owlCarousel({
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1200:{
                    items:3
                },
                1580:{
                    items:4
                },
            }
        })

        $(".carousel-comments").owlCarousel({
            loop:true,
            nav:false,
            items: 1,
            dots: false,
        }
      );
     });



 })( jQuery );