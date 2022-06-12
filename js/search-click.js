document.addEventListener("DOMContentLoaded", searchClick);

function searchClick() {
  searchBtn = document.querySelector('.search__btn')
  searchInput = document.querySelector('.search__input')
  searchInput.placeholder = ""
  searchCloseBtn = document.querySelector('.search__close-btn')
  buttonBurger = document.querySelector('.header__burger')
  headerLogo = document.querySelector('.header__logo')
  formSearch = document.querySelector('.header__search-mobile')
  if (window.matchMedia("(min-width:901px) and (max-width: 1500px)").matches) {

    searchBtn.addEventListener('click', function(el) {
      searchInput.classList.add('search__input-search_active')
      searchCloseBtn.classList.add('search__close-btn_active')
    })

    searchCloseBtn.addEventListener('click', function(el) {
      searchInput.classList.remove('search__input-search_active')
      searchCloseBtn.classList.remove('search__close-btn_active')
    })
  }

  else if (window.matchMedia("(min-width:501px) and (max-width: 900px)").matches) {

    searchBtn.addEventListener('click', function(el) {
      buttonBurger.classList.add('no-opacity')
      headerLogo.classList.add('no-opacity')

      searchInput.classList.add('search__input-search_active')
      searchCloseBtn.classList.add('search__close-btn_active')
    })

    searchCloseBtn.addEventListener('click', function(el) {
      searchInput.classList.remove('search__input-search_active')
      searchCloseBtn.classList.remove('search__close-btn_active')
      setTimeout(() => {
        buttonBurger.classList.remove('no-opacity')
        headerLogo.classList.remove('no-opacity');
      }, 500);

    })
  }
  else if (window.matchMedia("(max-width:500px)").matches) {

    searchBtn.addEventListener('click', function(el) {
      searchBtn.classList.add('search__btn_active')
      buttonBurger.classList.add('no-opacity')
      headerLogo.classList.add('no-opacity')
      formSearch.classList.add('header__search-mobile_active')

      searchInput.classList.add('search__input-search_active')
      searchCloseBtn.classList.add('search__close-btn_active')
    })

    searchCloseBtn.addEventListener('click', function(el) {
      searchBtn.classList.remove('search__btn_active')
      searchInput.classList.remove('search__input-search_active')
      searchCloseBtn.classList.remove('search__close-btn_active')
      formSearch.classList.remove('header__search-mobile_active')
      setTimeout(() => {
        buttonBurger.classList.remove('no-opacity')
        headerLogo.classList.remove('no-opacity');
      }, 300);

    })
  }
}
