export const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 5,
    // centeredSlides: true,
    breakpoints: {
        // when window width is >= 1500px
        1500: {
          slidesPerView: 3,
        },
        // when window width is >= 1000px
        1050: {
          slidesPerView: 2,
        },
        720: {
          slidesPerView: 1,
        },
      },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});