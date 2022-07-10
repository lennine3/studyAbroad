$(document).ready(function () {
    $('.banner').not('.slick-initialized').slick({
        // centerMode: true,
        lazyLoad: 'progressive',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        rows: 0,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }]
    });
});

$(".menu-toggle-btn").click(function () {
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});
