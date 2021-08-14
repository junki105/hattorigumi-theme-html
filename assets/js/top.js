const swiper = new Swiper('.hero-swiper-container', {
  loop: true,
  speed: 3000,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-hero',
  },

});
const swiper_business = new Swiper('.business-swiper-container', {
  loop: true,
  speed: 500,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-business',
    prevEl: '.swiper-button-prev-business',
  },


});
const swiper_business_text = new Swiper('.text-swiper-container', {
  loop: true,
  speed: 500,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-business',
    prevEl: '.swiper-button-prev-business',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-text',
  }

});
const swiper_work = new Swiper('.swiper-container-work', {
  loop: true,
  speed: 500,
  spaceBetween: 40,
  slidesPerView: 2.8, 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-work',
    prevEl: '.swiper-button-prev-work',
  }

});