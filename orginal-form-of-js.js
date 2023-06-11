var SliderSS = $('#slider-ss');
          var specialsuggest = $('#product-special-suggest');
          var bestsellers = $('#bestsellers');
          var news = $('#news');


          var owlobject = {
            rtl:true,
            dots:false,
            margin : 10 ,
            responsive : {
              0 :{
                items : 1
              },
              600 : {
                items : 3
              },
              1000 : {
                items : 4
              },
              1200 : {
                items : 6
              }
            }
          }


          specialsuggest.owlCarousel({
            rtl:true,
            dots:false,
            margin : 10 ,
            responsive : {
              0 :{
                items : 1
              },
              600 : {
                items : 3
              },
              1000 : {
                items : 4
              },
              1200 : {
                items : 6
              }
            }
          })
        
          bestsellers.owlCarousel({
            rtl:true,
            dots:false,
            margin : 10 ,
            responsive : {
              0 :{
                items : 1
              },
              600 : {
                items : 3
              },
              1000 : {
                items : 4
              },
              1200 : {
                items : 6
              }
            }
          })

          news.owlCarousel({
            rtl:true,
            dots:false,
            margin : 10 ,
            responsive : {
              0 :{
                items : 1
              },
              600 : {
                items : 3
              },
              1000 : {
                items : 4
              },
              1200 : {
                items : 6
              }
            }
          })


          SliderSS.owlCarousel({
              rtl:true,
              items:1,
              loop:true,
              autoplay:true,
              autoplayTimeout:3000,
              autoplayHoverPause:true
          });


          $('#best-sellers-next').click(function() {
            BestSeller.trigger('next.owl.carousel');
          });

          $('#best-sellers-prev').click(function() {
            BestSeller.trigger('prev.owl.carousel');
          });

          $('#open-login-box').click(function(){
             $('.login').addClass('login-show');
             $('body').addClass('stop-scorolling');
          }
          )
          $('#close-login-box').click(function(){
             $('.login').removeClass('login-show');
             $('body').removeClass('stop-scorolling');
          }
          )
          $('.login').click(function(e){
            if(e.target !== this)
              return;

            $('.login').removeClass('login-show');
            $('body').removeClass('stop-scrolling');
          });
