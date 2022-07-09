$(document).ready(function () {
    $('.banner').not('.slick-initialized').slick({
        // centerMode: true,
        lazyLoad: 'progressive',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});

$(".menu-toggle-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});
