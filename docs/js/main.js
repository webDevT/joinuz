$(function(){

    $('.contact__btn').click(function(){
        $('.card-content').addClass('active');
        $('.contact-modal').fadeIn();
    })

    $('.back').click(function(){
        $('.card-content').removeClass('active');
        $('.contact-modal').fadeOut();
    })

    jQuery(function($){
        $(document).mouseup(function (e){ 
          var div = $(".modal-content"); 
          var div2 = $(".contact-modal  ");
          var div3 = $('.card-content')
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) {
            div2.fadeOut();
            div3.removeClass('active');
      
          }
        });
      });

      jQuery(function($){
        $(document).mouseup(function (e){ 
          var div = $(".qr-modal__content"); 
          var div2 = $(".qr-modal");
        
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) {
            div2.fadeOut();
          
      
          }
        });
      });

      $('.modal-item--qr').click(function(){
        $('.qr-modal').fadeIn();
      })

      $('.modal-item--mail').click(function(){
        $('.mail-modal').fadeIn();
      })

      jQuery(function($){
        $(document).mouseup(function (e){ 
          var div = $(".mail-modal__content"); 
          var div2 = $(".mail-modal");
        
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) {
            div2.fadeOut();
          
      
          }
        });
      });
      
      
      


});