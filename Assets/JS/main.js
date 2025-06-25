/* slider */
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


/* modal */
$('#openModal').on('click', () => {
    $('#modal-bg').removeClass('hidden');
    $('#modal').removeClass('-translate-y-[1000px]');
    $('#modal').addClass('top-1/2 -translate-y-1/2');
});

$('#modal-bg').on('click', () => {
    $('#modal-bg').addClass('hidden');
    $('#modal').addClass('-translate-y-[1000px]');
    $('#modal').removeClass('top-1/2 -translate-y-1/2');
});







