// Navbar section
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
});


// banner slick
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>'

    });

    $('.banner-slide-posts-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: false,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',
    });

    $('.slide-post').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        prevArrow: '<button class="slide-arrow prev-arrow">Previous Post</button>',
        nextArrow: '<button class="slide-arrow next-arrow">Next Post</button>',

    });


});


