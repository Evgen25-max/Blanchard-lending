const element = document.querySelector('#content-gallery-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false
});


choices.passedElement.element.addEventListener(
  'change',
  function(event) {
    allSwiperGalleryItems = document.querySelector('[slider="gallery"]')
    allSwiperGalleryItems.children.forEach(function(el) {
      el.classList.remove('swiper-slide-gallery-active')
      el.style.marginRight = 'initial'
      el.style.width = 'initial'
    }
    )
    theme = event.detail.value
    themeItems = allSwiperGalleryItems.querySelectorAll(`[class*="${theme}"]`)
    themeItems.forEach(function(el) {
      el.classList.add('swiper-slide-gallery-active')

    })
    swiperGallery.update()
  },
  false,
);
