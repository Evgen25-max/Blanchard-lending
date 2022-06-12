document.addEventListener("DOMContentLoaded", readyBurger);

function readyBurger() {
  burgerBtn = document.querySelector('.header__burger')
  targetMenu = document.querySelector('.burger-nav_hidden')
  entranceLink = document.querySelector('.header__entrance')
  burgerBtn.addEventListener('click', function() {
    targetMenu.classList.toggle('burger-nav_hidden')
    burgerBtn.classList.toggle('burger_cross')
    entranceLink.classList.toggle('header__entrance_mobile')
  })
}
