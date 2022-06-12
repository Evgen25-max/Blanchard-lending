
class StylesCards {
  constructor(container) {
      this.container = container;
      this.styles = null;
      this.stylesCards = [];
      this._get_styles = this._getStyles();
  }

  _stylesClick () {
    this.styles.forEach(function(el) {
      el.addEventListener('click', function(event1) {
        var condition
        if (event1.target.closest("li").querySelector('.cards') != undefined) {
          condition = event1.target.closest("li").querySelector('.cards').classList.contains('is-active')
        }
        this.styles.forEach(
          function(style) {
            style.querySelector('.cards').classList.remove('is-active')
            style.querySelector('.styles__triangle').classList.remove('styles__triangle_active')
            style.querySelector('.style-title').classList.remove('style-title_active')
          }.bind(this))

        if (event1.target.closest('.cards')) {
          event1.target.closest('.cards').classList.toggle('is-active')
          event1.target.closest('.styles__item').querySelector('.styles__triangle').classList.add('styles__triangle_active')
          event1.target.closest('.styles__item').querySelector('.style-title').classList.add('style-title_active')
        }
        else if (!condition)  {
          event1.target.closest('.styles__item').querySelector('.styles__triangle').classList.add('styles__triangle_active')
          event1.target.closest('.styles__item').querySelector('.style-title').classList.add('style-title_active')
          var ultarget = event1.target.closest("li").querySelector('.cards')
          ultarget.classList.add('is-active')
        }

      }.bind(this))
    }.bind(this))
  }

  allHide() {
    this.styles.forEach(
      function(style) {
        style.querySelector('.cards').classList.remove('is-active')
        style.querySelector('.styles__triangle').classList.remove('styles__triangle_active')
        style.querySelector('.style-title').classList.remove('style-title_active')
      }.bind(this))
  }

  _getStyles () {
    this.styles = this.container.querySelectorAll('.styles__item')
  }
}

const stylesContainer = document.querySelector('.styles__items')
const styles = new StylesCards(stylesContainer);

styles._stylesClick(styles.stylesCards)


window.onload = function cardsLoad() {
  allCardsPicture = document.querySelectorAll(".cards__card")

  allCardsPicture.forEach(function(el) {
    el.addEventListener('click',function (e) {
      const linear = "linear-gradient(0deg, rgba(194, 131, 243, 0.4), rgba(194, 131, 243, 0.4)), "
      target = e.target
      old = getComputedStyle(target).backgroundImage
      newBackground = linear + old
      e.target.style.backgroundImage = newBackground
      setTimeout(() => { e.target.style.backgroundImage = old; }, 200);
  })
  }
  )
}

