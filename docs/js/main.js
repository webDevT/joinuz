$(function(){

    $('.contact__btn').click(function(){
        $('.card-content').addClass('active');
        $('.contact-modal').fadeIn();
    })

    $('.back').click(function(){
        $('.card-content').removeClass('active');
        $('.contact-modal').fadeOut();
    })


});