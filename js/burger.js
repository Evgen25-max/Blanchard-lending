document.addEventListener("DOMContentLoaded", readyBurger);

burgerBtn = document.querySelector('.header__burger')
targetMenu = document.querySelector('.burger-nav_hidden')
entranceLink = document.querySelector('.header__entrance')

function readyBurger() {
  burgerBtn.addEventListener('click', function() {
    document.querySelectorAll('section').forEach(function(el) {
      el.classList.toggle('no-active')
    })
    targetMenu.classList.toggle('burger-nav_hidden')
    burgerBtn.classList.toggle('burger_cross')
    entranceLink.classList.toggle('header__entrance_mobile')
  })
}

function handleTabletChange(e) {
  if (e.matches) {
    targetMenu.classList.add('burger-nav_hidden')
    burgerBtn.classList.remove('burger_cross')
    entranceLink.classList.remove('header__entrance_mobile')
    searchClick()
  }
}

function handleMiddleChange(e) {
  if (e.matches) {
    searchClick()
  }
}

document.querySelectorAll('.burger-nav__link').forEach(function(el) {
  el.addEventListener('click', () => {
    document.querySelectorAll('section').forEach(function(el) {
      el.classList.remove('no-active')
      targetMenu.classList.add('burger-nav_hidden')
      burgerBtn.classList.remove('burger_cross')
      entranceLink.classList.remove('header__entrance_mobile')
    })
  })
} )


mediaQueryMobile = window.matchMedia("(max-width: 500px)")
mediaQueryMiddleMobile = window.matchMedia("(min-width:501px) and (max-width: 650px)")
mediaQueryBigMobile = window.matchMedia('(min-width:651px) and (max-width: 900px)')
mediaQueryLaptop = window.matchMedia('(min-width:901px) and (max-width: 1200px)')
mediaQueryDesktop = window.matchMedia("(min-width: 1201px)")

mediaQueryMobile.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 1, pagSimple: 1});
mediaQueryMiddleMobile.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 2, pagSimple: 1});
mediaQueryBigMobile.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 2, pagSimple: 2});
mediaQueryLaptop.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 3, pagSimple: 2});
mediaQueryDesktop.addEventListener("change", handleTabletChange);

entranceLink
