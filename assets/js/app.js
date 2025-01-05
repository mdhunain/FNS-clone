$('.cardOwlSlider').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    slideSpeed : 2000,
    autoplaySpeed:2000,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})