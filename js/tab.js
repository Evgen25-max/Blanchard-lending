window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.country__item').forEach(function(el) {
    el.addEventListener('click', active_step)
  })
})

var authors = {
               "Доменико Гирландайо" : {
                  "src": "./img/catalog/authors/1920/domeniko-girlandayo.jpg",
                  "name": "Доменико Гирландайо",
                  "years": "2 июня 1448 — 11 января 1494.",
                  "description": "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени)."
                }
             }

function active_step(event) {
  document.querySelectorAll('.catalog__content').forEach(function(el) {
    el.classList.add('hidden')
  })
  document.querySelectorAll('.country__icon').forEach(function(el) {
    el.classList.remove('active-tab')
  })
  event.currentTarget.querySelector(".country__icon").classList.add('active-tab')
  document.querySelector(`#${event.currentTarget.getAttribute("data-country")}`).classList.remove('hidden')
  $(`.accordion-${event.currentTarget.getAttribute("data-country")}`).accordion( "refresh" );
}

function active_author(e) {
  document.querySelectorAll('.authors__name').forEach(function(el) {
    el.classList.remove('authors__name_active')
  })
  var authorName = e.target.innerText
  catalog__content = document.querySelectorAll('.catalog__content:not(.hidden)')
  data_author = catalog__content[0].querySelector(".author-article")
  empty_author = catalog__content[0].querySelector(".author-article_empty")
  if (!(authorName in authors)) {
    data_author.classList.add('hidden')
    empty_author.classList.remove('hidden')
  }
  else {
    data_author.querySelector(".author-article__image").src = authors[authorName].src
    data_author.querySelector(".author-article__name").innerHTML = authors[authorName].name
    data_author.querySelector(".author-article__life-years").innerHTML = authors[authorName].years
    data_author.querySelector(".author-article__description").innerHTML = authors[authorName].description
    data_author.classList.remove('hidden')
    empty_author.classList.add('hidden')
  }
  document.querySelectorAll('.authors__text').forEach(function(el) {
    el.classList.remove('authors__name_active')
  })
  e.target.classList.add('authors__name_active')
}
