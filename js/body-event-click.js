document.addEventListener('click', function(e) {
  if (!(e.target.closest('.styles__items') || e.target.closest('.cards'))) {
    styles._allHide()
    if (e.target.closest('.authors__name')) {active_author(e)}
    if (e.target.className == 'events__button') { eventsShow() }
  }
});

document.querySelectorAll('.centuries__title').forEach(function(el) {
  el.tabIndex = '0'
})


var dropdownGalleryClose = document.querySelector('.gallery-dropdown__close')
dropdownGalleryClose.addEventListener('click', function(el) {
  document.querySelectorAll(".gallery-dropdown__item-drop-gallery").forEach(function(e) {
    e.classList.remove('item-drop-gallery_active')
  })
  document.querySelector(".gallery__gallery-dropdown").classList.remove("gallery-dropdown__active")
  document.querySelector('body').classList.remove('body_no-scroll')
})
