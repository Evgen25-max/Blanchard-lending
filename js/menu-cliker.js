class StylesCards {
  constructor(container) {
      this.container = container;
      this.stylesCards = [];
      this.stylesTitle = this._getStyles();
  }

  _stylesClick () {
    this.stylesTitle.forEach(function(el) {
      el.addEventListener('click', function(elem) {
        this.stylesTitle.forEach(function (e) {
          if (el != e) {
            e.closest(".style__style-title").classList.remove('style-is-active')
            e.closest("li").querySelector(".styles__dropdown").classList.remove('is-active')
          }
        })

        elem.target.closest(".style__style-title").classList.toggle('style-is-active')
        elem.target.closest("li").querySelector(".styles__dropdown").classList.toggle('is-active')
      }.bind(this))
    }.bind(this))
  }

  _getStyles () {
    return this.container.querySelectorAll('.style-title')
  }
  _allHide() {
    this.stylesTitle.forEach(function (e) {
      e.closest(".style__style-title").classList.remove('style-is-active')
      e.closest("li").querySelector(".styles__dropdown").classList.remove('is-active')
    })
  }
}

const stylesContainer = document.querySelector('.styles__items')
const styles = new StylesCards(stylesContainer);

styles._stylesClick(styles.stylesCards)


