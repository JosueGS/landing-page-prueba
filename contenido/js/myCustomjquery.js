$(document).ready(function () {
    /*=============== Slide Main ====================*/
    $(".slider_main").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    });

    $(".slide-peopleAbout").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    $(".slide-restaurantMenu").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        adaptiveHeight: true
    });
    
    /*=============== Slide Varios Items ====================*/
    $(".slide-galeria").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 2000,
        autoplay: true,
        respondTo: 'window',
        mobileFirst: true,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 277,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    $(".slide-clientes").slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 2000,
        autoplay: true,
        respondTo: 'window',
        mobileFirst: true,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 277,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
    
    /*=============== Menu Suave ====================*/
    var $doc = $('html, body');
    $('.di-navlist-li a').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
        return false;
    });

    /*===================Sky====================*/
    $('.arribair').click(function () {
        $('body,html').animate({
            scrollTop: '0px'
        }, 2000);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.arribair').slideDown(500);
        } else {
            $('.arribair').slideUp(500);
        }
    });
});