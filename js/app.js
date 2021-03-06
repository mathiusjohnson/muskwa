/* Theme Name: Tulsy - Responsive Landing Page Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main Js file of the template
*/

// STICKY
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("nav-sticky");
    } else {
        $(".sticky").removeClass("nav-sticky");
    }
});

// SmoothLink
$('.navbar-nav a, .mouse-down a').on('click', function(event) {
    var $anchor = $(this);
    if ($anchor.length) {
        console.log('checks out');
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    }
});

// scrollspy
$("#navbarCollapse").scrollspy({
    offset: 70
});


// agency Carousel
$("#agency-owl-demo").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
    navigation: true,
    navigationText: ["<i class='mdi mdi-menu-left'></i>", "<i class='mdi mdi-menu-right'></i>"]

});

// construction Carousel
$("#construction-owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 2,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]

});

// startup Carousel
$("#startup-owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 1,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
});

$("#book-owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
});

$("#interior-owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 2,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
});

$("#app-owl-demo").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    singleItem: true,
    autoHeight: true,
    navigation: true,
    navigationText: ["<i class='mdi mdi-arrow-left'></i>", "<i class='mdi mdi-arrow-right'></i>"]

});

$("#owl-app-screenshot").owlCarousel({
    autoPlay: 3000,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]

});

$("#app-client-owl").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items: 3,
    itemsDesktop: [1199, 3],
    itemstablet: [768, 1],
    itemsDesktopSmall: [768, 1],
    stopOnHover: true,
    navigation: true,
    navigationText: ["<i class='mdi mdi-menu-left'></i>", "<i class='mdi mdi-menu-right'></i>"]

});

// WORK
$(window).on('load', function() {
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function() {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});

// MFQ

$('.mfp-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

// CONTACT

$('#contact-form').submit(function() {
    var action = $(this).attr('action');
    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.contact-loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});

// VIDEO

$('.video-play-icon-trigger').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

// TYPED
$(".element").each(function() {
    var $this = $(this);
    $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 100, // typing speed
        backDelay: 3000 // pause before backspacing
    });
});

// SWIPER SLIDER
var swiper = new Swiper('.swiper1', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    initialSlide: 1,
    keyboardControl: true,
    mousewheelControl: false,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    navigation: {
        nextEl: '.swiper-arrow-right',
        prevEl: '.swiper-arrow-left',
    },
    coverflow: {
        rotate: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
        slidesPerView: 3,
    },
})

var industrySwiper = new Swiper('.swiper2', {
    loop: true,
    slidesPerView: 5,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 8
        },
        960: {
          slidesPerView: 3,
          spaceBetween: 8
        },
        720: {
          slidesPerView: 2,
          autoplay: {
            delay: 600,
        },
        },

        200: {
          slidesPerView: 2,
          spaceBetween: 20,
          autoplay: false,
          centeredSlides: true,
        }
    },
    initialSlide: 1,
    keyboardControl: true,
    mousewheelControl: false,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    coverflow: {
        rotate: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
        slidesPerView: 3,
    },
    autoplay: {
        delay: 600,
    },
    speed: 2800,

})

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.highlight').each(function () {
        if (isScrolledIntoView(this) === true) {
            setTimeout(() => {
                $(this).addClass('highlight-transition');
            }, 500);
        }
    });
    $('.highlight-h2').each(function () {
        if (isScrolledIntoView(this) === true) {
            setTimeout(() => {
                $(this).addClass('highlight-transition');
            }, 500);        }
    });
});

  