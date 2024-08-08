  /*--------------------- Copyright (c) 2024 -----------------------
[Master Javascript]
Project: Project Name
Version: 1.0.0
-------------------------------------------------------------------*/
(function ($) {
    "use strict";
  
    // Ready Function
    jQuery(document).ready(function ($) {
      var $this = $(window);



      // Fixed Header
      $(window).scroll(function(){
        if ($(window).scrollTop() >= 50) {
            $('.nav_class').addClass('fixed');
        }
        else {
            $('.nav_class').removeClass('fixed');
        }
      });

      
    });
  })();
