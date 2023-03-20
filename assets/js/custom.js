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


/****************** Login Dropdown Mobile JS ********************/
// For profile icon click
$('#profile-icon').on('click', function () {
    $('.innerListMob').toggleClass('active');
});


/****************** Header JS ********************/
$("header .prime-navbar .prime-menu .dropdown_Menu span.downArrow_Nav").click(
    function(event) {
    if ($(".innerList").is(":visible")) {
        $(".innerList").slideUp({ duration: 500 });
        $(
        "header .prime-navbar .prime-menu .dropdown_Menu span.downArrow_Nav"
        ).removeClass("upArrow_Nav");
    }
    if (
        $(this)
        .next(".innerList")
        .is(":visible")
    ) {
        $(this)
        .next(".innerList")
        .slideUp({ duration: 500 });
        $(
        "header .prime-navbar .prime-menu .dropdown_Menu span.downArrow_Nav"
        ).removeClass("upArrow_Nav");
    } else {
        $(this)
        .next(".innerList")
        .slideDown({ duration: 500 });
        $(this).addClass("upArrow_Nav");
    }
    }
);

/****************** Mobile Menu Open/Close JS ********************/
$("#nav-icon").click(function() {
    var x = document.getElementById("mytopnav");
    if (x.className === "navbar__menu--ul") {
        x.className += " responsive";
    } else {
        x.className = "navbar__menu--ul";
    }
    $(this).toggleClass("open");
    $(".prime-navbar").toggleClass("headerDown");
});