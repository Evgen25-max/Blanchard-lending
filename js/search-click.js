document.addEventListener("DOMContentLoaded", searchClick);

function laptopClick_add () {
  searchInput.classList.add('search__input-search_active')
  searchCloseBtn.classList.add('search__close-btn_active')
}

function laptopClick_remove () {
  searchInput.classList.remove('search__input-search_active')
  searchCloseBtn.classList.remove('search__close-btn_active')
}


function bigMobile_add () {
  buttonBurger.classList.add('no-opacity')
  headerLogo.classList.add('no-opacity')

  searchInput.classList.add('search__input-search_active')
  searchCloseBtn.classList.add('search__close-btn_active')
}

function bigMobile_remove () {
  searchInput.classList.remove('search__input-search_active')
  searchCloseBtn.classList.remove('search__close-btn_active')
  setTimeout(() => {
    buttonBurger.classList.remove('no-opacity')
    headerLogo.classList.remove('no-opacity');
  }, 500);

}

function mobileClick_add () {
  searchBtn.classList.add('search__btn_active')
  buttonBurger.classList.add('no-opacity')
  headerLogo.classList.add('no-opacity')
  formSearch.classList.add('header__search-mobile_active')

  searchInput.classList.add('search__input-search_active')
  searchCloseBtn.classList.add('search__close-btn_active')
}

function mobileClick_remove () {
  searchBtn.classList.remove('search__btn_active')
  searchInput.classList.remove('search__input-search_active')
  searchCloseBtn.classList.remove('search__close-btn_active')
  formSearch.classList.remove('header__search-mobile_active')
  setTimeout(() => {
    buttonBurger.classList.remove('no-opacity')
    headerLogo.classList.remove('no-opacity');
  }, 300);

}


function searchClick() {
  searchBtn = document.querySelector('.search__btn')
  searchInput = document.querySelector('.search__input')
  searchInput.placeholder = ""
  searchCloseBtn = document.querySelector('.search__close-btn')
  buttonBurger = document.querySelector('.header__burger')
  headerLogo = document.querySelector('.header__logo')
  formSearch = document.querySelector('.header__search-mobile')
  searchBtn.removeEventListener('click', laptopClick_add)
  searchCloseBtn.removeEventListener('click', laptopClick_remove)
  searchBtn.removeEventListener('click', bigMobile_add)
  searchCloseBtn.removeEventListener('click', bigMobile_remove)
  searchBtn.removeEventListener('click', mobileClick_add)
  searchCloseBtn.removeEventListener('click', mobileClick_remove)
  mobileClick_remove()
  if (window.matchMedia("(min-width:901px) and (max-width: 1500px)").matches) {

    searchBtn.addEventListener('click', laptopClick_add)
    searchCloseBtn.addEventListener('click', laptopClick_remove)
  }

  else if (window.matchMedia("(min-width:501px) and (max-width: 900px)").matches) {

    searchBtn.addEventListener('click', bigMobile_add)
    searchCloseBtn.addEventListener('click', bigMobile_remove)
  }

  else if (window.matchMedia("(max-width:500px)").matches) {

    searchBtn.addEventListener('click', mobileClick_add)
    searchCloseBtn.addEventListener('click', mobileClick_remove)
  }
}
