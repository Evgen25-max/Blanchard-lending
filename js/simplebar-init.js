window.onload = function cardsLoad() {
  const containerSimplebar = document.querySelectorAll('.dropdown__simplebar')
  containerSimplebar.forEach(
    function(container) {
      new SimpleBar(container, {
        scrollbarMaxSize: 30,
        autoHide: false,
    })
  }
  )

  const burgerNavSimplebar = document.querySelector('.burger-nav__simplebar')
  new SimpleBar( burgerNavSimplebar, {
    scrollbarMaxSize: 30,
    autoHide: false,
  })
};
