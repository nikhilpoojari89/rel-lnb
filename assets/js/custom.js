/****************** Loader JS ********************/
$(window).on ('load', function (){
    // Site Preloader
    $('#site-preloader').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
});

/****************** Scroll To Top JS ********************/
$(window).on( 'scroll', function(){
    if ($(window).scrollTop() > 600) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});

$(document.body).on('click', '.scrollToTop', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

/****************** Navbar Fixed Header When Scroll JS ********************/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});