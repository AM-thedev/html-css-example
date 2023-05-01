const options = {
  // Navigation arrows
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.75,
  spaceBetween: 16,
  //effect: 'coverflow',
  //watchOverflow: true,
  //loopedSlides: 2,
  //centeredSlidesBounds: true,
  on: {
    beforeDestroy: function () {
      console.log('swiper about to be destroyed');
    },
    destroy: function () {
      console.log('swiper destroyed');
    },
    beforeInit: function(swiper){
      let container = swiper.el.children[0];
      let slides = container.querySelectorAll('.swiper-slide');
      while(slides.length < 4) {
        slides.forEach(function(element){
          let clone = element.cloneNode(true);
          clone.classList.add('u-hiddenDesktop');
          container.appendChild(clone);
          slides = container.querySelectorAll('.swiper-slide');
        });
      }
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
};

let swiperEvents = new Swiper('.c-swiper--events', options)
let swiperTopics = new Swiper('.c-swiper--topics', options)
let swiperArticles = new Swiper('.c-swiper--articles', options)

const swiperDesktopMode = window.matchMedia("(min-width: 768px)");
const swiperMobileMode = window.matchMedia("(max-width: 767px)");
document.addEventListener( 'DOMContentLoaded', function() {
  if (swiperDesktopMode.matches) {
    swiperEvents.destroy(true, true)
    swiperTopics.destroy(true, true)
    swiperArticles.destroy(true, true)
  }
})
swiperDesktopMode.addEventListener('change', function(e) {
  if (swiperDesktopMode.matches) {
    swiperEvents.destroy(true, true)
    swiperTopics.destroy(true, true)
    swiperArticles.destroy(true, true)
  }
  if (swiperMobileMode.matches) {
    swiperEvents = new Swiper('.c-swiper--events', options)
    swiperTopics = new Swiper('.c-swiper--topics', options)
    swiperArticles = new Swiper('.c-swiper--articles', options)
  }
})
