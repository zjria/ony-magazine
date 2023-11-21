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
        centerMode: true,
        variableWidth: false,
        adaptiveHeight: true,
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>'

    });

    $('.slider-right-section').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        centerMode: true,
        variableWidth: false,
        adaptiveHeight: true,
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        // prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-right"></i></button>'

    });
});


