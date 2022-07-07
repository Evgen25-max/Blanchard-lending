const swiperGallery = new Swiper('.gallery-images__swiper', {

  slideClass: 'swiper-slide-gallery-active',
  pagination: {
    el: ".gallery-images__paginations",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery-images__right-swipe",
    prevEl: ".gallery-images__left-swipe",
  },
  breakpoints: {
    // when window width is >= 320px
    200: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    500: {
      speed: 400,
      spaceBetween: 34,
      slidesPerView: 2,
    },
    1024: {
      speed: 400,
      spaceBetween: 34,
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1201: {
      speed: 400,
      spaceBetween: 50,
      slidesPerView: 3,
    },
  },
});

const swiperPartners = new Swiper(".partners__swiper", {
  slideClass: 'partners__item',
  navigation: {
    nextEl: ".partners-paginator_right",
    prevEl: ".partners-paginator_left",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    500: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
    900: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1700: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,

    },
    // when window width is >= 640px
    2000: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 50,

    },
    3000: {
      slidesPerGroup: 5,
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },


});



const swiperEvents1 = new Swiper(".events__swiper", {
  slideClass: 'events__slide',

    navigation: {
      nextEl: ".events__full-paginator_right",
      prevEl: ".events__full-paginator_left",
      disabledClass : 'events-pagi-disabled',
    },
    on: {
      resize: function () {
        swiperEvents1.pagination.init();
        swiperEvents1.pagination.render();
        swiperEvents1.pagination.update();
      },
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination-events",
          type: 'bullets',
          clickable: true,
          bulletClass: "swiper-events-bullet ",
          bulletActiveClass: "swiper-events-bullet-active",
          horizontalClass: "swiper-events-bullet-horizontal"
        },
      },
      // when window width is >= 480px
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination-events",
          type: 'bullets',
          clickable: true,
          bulletClass: "swiper-events-bullet ",
          bulletActiveClass: "swiper-events-bullet-active",
          horizontalClass: "swiper-events-bullet-horizontal"
        },
      },
      900: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 27,
        pagination: {
          el: ".swiper-pagination-events",
          type: 'bullets',
          clickable: true,
          enable: true,
          bulletClass: "swiper-events-bullet ",
          bulletActiveClass: "swiper-events-bullet-active",
          horizontalClass: "swiper-events-bullet-horizontal"
        },
      },
      1200: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          enabled: false
        },
      },
      // when window width is >= 640px
      2000: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 50,
        pagination: {
          enabled: false
        },
      },
      3000: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          enabled: false
        },
      },
    },



});
