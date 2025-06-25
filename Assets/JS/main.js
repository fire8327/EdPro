const mainSwiper = new Swiper('.mainSwiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.pagination-swiper',
        clickable: true,
    },
    navigation: {
        nextEl: '.next-swiper',
        prevEl: '.prev-swiper',
    }
});