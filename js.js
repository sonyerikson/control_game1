$(document).ready(function(){
    // СМЕНА ШРИФТОВ
    $(".name").addClass('namechange');
    $(".sun1").click(function(){
		$(this).css("background-color","white");
        $(".sun").css("background-color","#FF4B00");
        $(".namechange").css("animation-play-state","paused");
	});
	$(".sun").click(function(){
		$(this).css("background-color","white");
        $(".sun1").css("background-color","#FF4B00");
        $(".namechange").css("animation-play-state","running");
	});
    // СМЕНА ШРИФТОВ

    // КНОПКИ ИНФО
    $(".buttom1").click(function(){
        $(".buttom2, .start").css("display","none");
        $(".extext1, .extext11").css("display","block");
        $(".photo").addClass('animate-me');
        setTimeout(function() {
            $(".photo").removeClass('animate-me');
            $(".photo").addClass('photonew');
          }, 790);
	});
    function close() {
    $(".buttom2, .start").css("display","block");
    $(".extext1, .extext11, .extext2, .extext21").css("display","none");
    $(".photo").addClass('animate-me1');
    setTimeout(function() {
        $(".photo").removeClass('animate-me1');
        $(".photo").removeClass('photonew');
      }, 790);
    }
    $(".extext11, .extext21").click(close);
    $(".buttom2").click(function(){
        $(".start").css("display","none");
        $(".extext2, .extext21").css("display","block");
        $(".photo").addClass('animate-me');
        setTimeout(function() {
            $(".photo").removeClass('animate-me');
            $(".photo").addClass('photonew');
          }, 790);
	});
    // КНОПКИ ИНФО

    // КНОПКА СТАРТ & СМЕНА СТРАНИЦЫ
    $(".start").hover(function (){
        $(".start").toggleClass('startblack');
        $(".text3").toggleClass('text3w');
      });
    $(".start").click(function(){
        $('body,html').animate({
            scrollTop:0
        }, 900);
        $(".sun").css("z-index","-1");
        $(".sun").css("background-color","#FF4B00");
        $(".sun1").css("background-color","white");
        setTimeout(function() {
            $(".photo").addClass('exp');
            $(".name").addClass('animate-name');
            $(".animate-name").css("animation-play-state","running");
            $(".alldark").addClass('animate-all');
            $(".buttom1, .buttom2, .start, .photo").css("display","none");
            $(".main").css("height","1150");
            $('.back2').fadeIn(1100);
            $(".sun").addClass('animate-sun');
            $(".sunb").css("display","block");
          }, 800); 
          setTimeout(function() {
            $(".sun1").css("display","none");
          }, 1000);    
          setTimeout(function() {
            $(".frame, .start1").fadeIn(300);
          }, 2200); 
	});
    // КНОПКА СТАРТ & СМЕНА СТРАНИЦЫ

    // СМЕНА ФОНА
    $(".sunb").click(function(){
        if($(".back2").css('display') == 'block'){
          $(".back2").css("display","none");
          $(".back3").css("display","block");
          $(".sun").css("background-color","white");
        }
          else if ( $(".back3").css('display') == 'block'){
            $(".back3").css("display","none");
            $(".sun").css("opacity","0");
            $(".back1, .moon").css("display","block");
          }
          else if ( $(".back1").css('display') == 'block'){
            $(".back1, .moon").css("display","none");
            $(".back4").css("display","block");
            $(".sun").css("opacity","1");
            $(".sun").css("background-color","black"); 
          }
          else if ( $(".back4").css('display') == 'block'){
            $(".back4").css("display","none");
            $(".back2").css("display","block");
            $(".sun").css("background-color","#FF4B00"); 
          }})
    // СМЕНА ФОНА

    // ПЕРЕХОД К ВЫБОРУ БЛОКА
    $(".start1").hover(function (){
      $(".start1").toggleClass('startblack1');
      $(".text3").toggleClass('text3w1');
    });
  $(".start1").click(function(){
      $('body,html').animate({
          scrollTop:315
      }, 900);
      $(".frame, .start1, .sunb").fadeOut(300);
      $(".sun, .moon").css("opacity","0");
      $(".alldark").removeClass('animate-all');
      $(".alldark").addClass('animatesmall');
      setTimeout(function() {
        $(".frame11, .txt").fadeIn(300);
        if($(".back3").css('display') == 'block'){
          $(".txt").css("color","black");
          $(".txt").css("font-family","FactorA-Medium");
        }
        $(".vector1, .vector2, .vector3").css("display","block");
      }, 1500); 
      })
    // ПЕРЕХОД К ВЫБОРУ БЛОКА

    // ВЫБОР БЛОКА
    $(".vector1").hover(function (){
      $(".name3").fadeToggle(200);
    });
    $(".vector2").hover(function (){
      $(".name2").fadeToggle(200);
    });
    $(".vector3").hover(function (){
      $(".name1").fadeToggle(200);
    });
    // ВЫБОР БЛОКА

    // ПЕРЕХОД ПЕРВЫЙ БЛОК
    $(".start1").hover(function (){
      $(".start1").toggleClass('startblack');
      $(".text3").toggleClass('text3w');
    });
   $(".vector1").click(function(){
      $(".alldark, .vector1, .vector2, .vector3, .name1, .name2, .name3, .frame11, .txt, .name").css("display","none");
      $(".name3").css("opacity","0");
      $(".vector1").css("mix-blend-mode","darken");
      $(".vector1").css("filter","grayscale(1)");
       $(".room1").css("display","block");
       $(".sun, .moon").css("opacity","1");
       $(".sun").addClass('animate-sun2');
       $(".moon").addClass('animate-moon');
       $('body,html').animate({
        scrollTop:0}, 800);
        setTimeout(function() {
          $(".main").css("height","807");
        },800); 
        setTimeout(function() {
          $(".start12, .frame-r1").fadeIn(300);
        }, 1200); 
     })
     // ПЕРЕХОД ПЕРВЫЙ БЛОК

     // ИЗМЕНЕНИЕ ЦВЕТА МЕБЕЛИ
      $(".bed1, .bed2, .bed3, .carpet, .sofa, .vend").click(function(){
        if ( $(this).css('opacity') == '0'){
          $(this).toggleClass('show');
          $(this).css("opacity","1");
        }
          else if ( $(this).hasClass('show')){
            $(this).toggleClass('ddark');
            $(this).removeClass('show');
          }
          else if ( $(this).hasClass('ddark')){
            $(this).css("opacity","0");
            $(this).removeClass('ddark');
          } })
          $(".start12").hover(function (){
            $(".start12").toggleClass('startblack2');
            $(".text3").toggleClass('text3w2');
          });
      // ИЗМЕНЕНИЕ ЦВЕТА МЕБЕЛИ

      // КНОПКА НАЗАД
      $(".start12").click(function(){
        $(".alldark, .vector1, .vector2, .vector3, .frame11, .txt, .name").css("display","block");
        $(".name3").css("opacity","0");
       $(".main").css("height","1149");
        $('body,html').animate({
            scrollTop:315
        }, 900);
        $(".frame, .start1, .start12, .frame-r1, .sunb, .room1, .frame21, .room2").fadeOut(300);
        $(".sun, .moon").css("opacity","0");
        $(".alldark").removeClass('animate-all');
        $(".alldark").addClass('animatesmall');
        setTimeout(function() {
          $(".frame11, .txt").fadeIn(300);
          if($(".back3").css('display') == 'block'){
            $(".txt").css("color","black");
            $(".txt").css("font-family","FactorA-Medium");
          }
          $(".vector1, .vector2, .vector3").css("display","block");
        }, 1500); 
        })
        // КНОПКА НАЗАД

        // ПЕРЕХОД ВТОРОЙ БЛОК
        $(".vector2").click(function(){
          $(".alldark, .vector1, .vector2, .vector3, .name1, .name2, .name3, .frame11, .txt, .name").css("display","none");
          $(".name2").css("opacity","0");
          $(".frame21, .room2").fadeIn(300);
          $(".vector2").css("mix-blend-mode","darken");
          $(".vector2").css("filter","grayscale(1)");
           $(".room2d, .room2l, .nbuttom").css("display","block");
           $(".sun, .moon").css("opacity","1");
           $(".sun").addClass('animate-sun2');
           $(".moon").addClass('animate-moon');
           $('body,html').animate({
            scrollTop:0}, 800);
            setTimeout(function() {
              $(".main").css("height","907");
            },800); 
            setTimeout(function() {
              $(".start12, .frame21").fadeIn(300);
            }, 1200); 
         })
         // ПЕРЕХОД ВТОРОЙ БЛОК

         // ВТОРОЙ БЛОК
         $(".nbuttom").click(function(){
          $(".ctrl, .lamp, .comp, .floor1").fadeIn(300);
          $(".room2l").fadeOut(1800);
         })
         $(".ctrl2").click(function(){
          $(".ctrl").fadeOut(300);
         })
         $(".lamp2").click(function(){
          $(".lamp").fadeOut(300);
         })
         $(".comp").click(function(){
          $(".comp").fadeOut(300);
         })
         $(".floor1").click(function(){
          $(".lamp").fadeOut(300);
         })
         // ВТОРОЙ БЛОК

         // ТРЕТИЙ БЛОК
         $(".vector3").click(function(){
          $(".alldark, .vector1, .vector2, .vector3, .name1, .name2, .name3, .frame11, .txt, .name").css("display","none");
          $(".name1").css("opacity","0");
          $(".backkk, .table").fadeIn(300);
            setTimeout(function() {
              $(".start31").fadeIn(300);
            }, 1200); 
         })
         $(".start31").hover(function (){
          $(".start31").toggleClass('startblack4');
          $(".text3").toggleClass('text3w4');
        });
         // ТРЕТИЙ БЛОК

             // КНОПКА НАЗАД
      $(".start31").click(function(){
        $(".alldark, .vector1, .vector2, .vector3, .frame11, .txt, .name").css("display","block");
        $(".name3").css("opacity","0");
        $(".backkk, .table").fadeOut(300);
       $(".main").css("height","1149");
        $('body,html').animate({
            scrollTop:315
        }, 900);
        $(".frame, .start1, .start12, .frame-r1, .sunb, .room1, .frame21, .room2").fadeOut(300);
        $(".sun, .moon").css("opacity","0");
        $(".alldark").removeClass('animate-all');
        $(".alldark").addClass('animatesmall');
        setTimeout(function() {
          $(".frame11, .txt").fadeIn(300);
          if($(".back3").css('display') == 'block'){
            $(".txt").css("color","black");
            $(".txt").css("font-family","FactorA-Medium");
          }
          $(".vector1, .vector2, .vector3").css("display","block");
        }, 1500); 
        })
        // КНОПКА НАЗАД




  })