// hover tabs

$(document).ready(function() {
   $("#c-tab-1").css({
     "display":"block"
   })
   var linewidth = 0;
   $(".h-tab").each(function(i, elem) {
     console.log(elem);
     if($(elem).attr("class") == "h-tab") {
       linewidth = linewidth + Number($(elem).css("width").split("px")[0]);
     }
   });
   console.log(linewidth);
   $(".tab-line").css({
     "width":linewidth+"px"
   });
   $(".l-tab").css({
     "width":Number($("#h-tab-1").css("width").split("px")[0])+"px"
   });

   $(".h-tab").hover(function() {
     var href = $(this).attr("cmtab");
     var width = Number($(this).css("width").split("px")[0]);
     console.log(width);

     var hrefarr = href.split("-");
     var num = Number(hrefarr[2]);

     var paddleft = 0;

     for(var i = 1; i < num; i++) {
       paddleft = paddleft + Number($("#h-tab-"+i).css("width").split("px")[0]);
       console.log(paddleft);
     }

     $(".l-tab").css({
       "width":width+"px",
       "marginLeft":paddleft+"px"
     });

     $(".c-tab").css({
       "display":"none"
     });

     $(href).css({
       "display":"block"
     });

   });
 });



// $(document).ready(function() {
//    $("#c-tab-1").css({
//      "display":"block"
//    })
//    var linewidth = 0;
//    $(".h-tab").each(function(i, elem) {
//      console.log(elem);
//      if($(elem).attr("class") == "h-tab") {
//        linewidth = linewidth + Number($(elem).css("width").split("px")[0]);
//      }
//    });
//    console.log(linewidth);
//    $(".tab-line").css({
//      "width":linewidth+"px"
//    });
//    $(".l-tab").css({
//      "width":Number($("#h-tab-1").css("width").split("px")[0])+"px"
//    });
//
//    $(".h-tab").hover(function() {
//      var href = this.href;
//      var width = Number($(this).css("width").split("px")[0]);
//      console.log(width);
//
//      var hrefarr = href.split("-");
//      var num = Number(hrefarr[2]);
//
//      var paddleft = 0;
//
//      for(var i = 1; i < num; i++) {
//        paddleft = paddleft + Number($("#h-tab-"+i).css("width").split("px")[0]);
//        console.log(paddleft);
//      }
//
//      $(".l-tab").css({
//        "width":width+"px",
//        "marginLeft":paddleft+"px"
//      });
//
//      $(".c-tab").css({
//        "display":"none"
//      });
//
//      console.log(href);
//
//      $("#"+href.split("#")[1]).css({
//        "display":"block"
//      });
//    });
//  });



// hamburger menu

$(document).ready(function () {
   var link = $('.menu-link');
   var link_active = $('.menu-link_active');
   var menu = $('.menu');
   var nav_link = $('.menu a');
   var blur = $('.blur');
   var substrate = $('.substrate2');


   link.click(function () {
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
    blur.toggleClass('blur_active');
    substrate.toggleClass('substrate2_active');
   });
   nav_link.click(function () {
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active');
    blur.toggleClass('blur_active');
    substrate.toggleClass('substrate2_active');
   });
   substrate.click(function() {
      link.toggleClass('menu-link_active');
      menu.toggleClass('menu_active');
      blur.toggleClass('blur_active');
      substrate.toggleClass('substrate2_active');
   });

});

// menu tabs

$(document).ready(function() {
   $("#common-tab-1").css({
     "display":"block"
   })
   var lineheight = 0;
   $(".header-tab").each(function(i, elem) {
     if($(elem).attr("class") == "header-tab") {
       lineheight = lineheight + Number($(elem).css("height").split("px")[0]);
     }
   });
   $(".tab-line-menu").css({
     "height":lineheight+"px"
   });
   $(".line-tab").css({
     "height":Number($("#header-tab-1").css("height").split("px")[0])+"px"
   });

   $(".header-tab").hover(function() {
     var href = $(this).attr("ctabid");
     var height = Number($(this).css("height").split("px")[0]);

     var hrefarr = href.split("-");
     var num = Number(hrefarr[2]);

     var paddtop = 0;

     for(var i = 1; i < num; i++) {
       paddtop = paddtop + Number($("#header-tab-"+i).css("height").split("px")[0]);
     }

     $(".line-tab").css({
       "height":height+"px",
       "marginTop":paddtop+"px"
     });

     $(".common-tab").css({
       "display":"none"
     });


     $(href).css({
       "display":"block"
     });
   });
 });


// fixed menu

$(document).ready(function() {
      $(window).scroll(function(){
          if($(this).scrollTop() > $("header").height()){
              $("#l-link").css({
                'background-image': 'url(img/logo_2.png)',
                'background-repeat': 'no-repeat'
              });
              $('.fixed-menu').css("padding-top", "5px");
              $('#phone-menu').css("color", "#000");
              $('#menu-icon').addClass("menu-icon");
              $('.substrate').css("display", "block");
          }
          else if ($(this).scrollTop() < $("header").height()){
              $("#l-link").css({
                'background-image': 'url(img/logo.png)',
                'background-repeat': 'no-repeat'
              });
              $('.fixed-menu').css("padding-top", "20px");
              $('#phone-menu').css("color", "#fff");
              $('#menu-icon').removeClass("menu-icon");
              $('.substrate').css("display", "none");
          }
      });
  });


  
