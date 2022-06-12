
class SimplePaginator {
  constructor(options) {
    this.paginatorContainer = document.querySelector(options["pagiContainer"])
    this.paginatorItemsSign = options["pagiItem"]
    this.paginatorItems = document.querySelectorAll(this.paginatorItemsSign)
    this.leftPagi = document.querySelector(options["pagiLeft"])
    this.rightPagi = document.querySelector(options["pagiRight"])
    this.pagiNum = options["paginatorNum"]
    this.currentPagi = 1
    this.maxPagi = Math.ceil(this.paginatorItems.length/this.pagiNum)
  }

  _getPaginatorItem(itemClass) {
    var item = this.paginatorContainer.querySelector(itemClass).cloneNode(true)
    item.classList.remove('paginator__event_active')
    return item
  }

  init() {
    this._allHide()
    this._fullAddClick()
  }

  reInit(newNum) {
    this.pagiNum = newNum
    this.currentPagi = 1
    this.paginatorItems = document.querySelectorAll(this.paginatorItemsSign)
    this.maxPagi = Math.ceil(this.paginatorItems.length/this.pagiNum)
    this._allHide()
  }

  _allHide() {
    var tempCountPagi = 1
    this.paginatorItems.forEach(function(elem) {
      elem.setAttribute('target', `${tempCountPagi}`)
      if (tempCountPagi > this.pagiNum) {
        elem.classList.add('hidden')
      }
      else {
        elem.classList.remove('hidden')
      }
      tempCountPagi ++
    }.bind(this) )
  }

  _allClear() {
    while (this.paginatorContainer.children.length > 1) {
      this.paginatorContainer.removeChild(this.paginatorContainer.lastChild);
    }
    this.allItems = document.querySelectorAll('.event-item')
    this.allItems.forEach(function(el) {
      el.style.opacity = "1"
      el.style.display = "block"
    }.bind(this))
    this.leftPaginatorEvents.classList.remove('hidden')
    this.rightPaginatorEvents.classList.remove('hidden')
  }

  _getMaxHeight() {
    var style
    this.allItems.forEach(function(el) {
      el.style.display = "none"
    } )

    this.allItems.forEach(function(el) {
      el.style.display = 'block'
      style = getComputedStyle(el)
      var height = style.height.slice(0,-2)
      if (this.maxHeight < height) {
        this.maxHeight = height
      }
      el.style.display = 'none'
    }.bind(this))

    this.allItems.forEach(function(el) {
      el.style.minHeight = `${this.maxHeight}px`
    }.bind(this) )

    // this.paginatorItems[0].style.display = "block"

    for(var i = 0;i< this.paginatorNum; i++) {
      this.paginatorItems[i].style.display = "block"
    }

  }

  _fullAddClick() {
    this.leftPagi.addEventListener("click", this._clickLeft.bind(this))
    this.rightPagi.addEventListener("click", this._clickRight.bind(this))

  }

  _clickRight(el) {
    if (this.currentPagi < this.maxPagi) {
      this.paginatorItems.forEach(function(elem) {
        elem.classList.add('hidden')
      } )
      for (var i=(this.currentPagi*this.pagiNum + 1);i <= ((this.currentPagi+1)*this.pagiNum);i++) {
        var elem = this.paginatorContainer.querySelector(`[target="${i}"]`)
        if (elem != undefined) {
          elem.classList.remove('hidden')
        }
      }
      this.currentPagi++
    }
  }

  _clickLeft(el) {
    if (this.currentPagi > 1) {
      this.paginatorItems.forEach(function(elem) {
        elem.classList.add('hidden')
      } )
      for (var i=((this.currentPagi - 2)*this.pagiNum + 1);i <= ((this.currentPagi-1)*this.pagiNum);i++) {
        var elem = this.paginatorContainer.querySelector(`[target="${i}"]`)
        if (elem != undefined) {
          elem.classList.remove('hidden')
        }
      }
      this.currentPagi--
    }
  }
}

function getPagi () {
  if (window.matchMedia("(max-width: 650px)").matches) {
    _paginatorNum = 1
  }

  if (window.matchMedia("(min-width:651px) and (max-width: 900px)").matches) {
    _paginatorNum = 2
  }

  if (window.matchMedia("(min-width:901px) and (max-width: 1500px)").matches) {
    _paginatorNum = 2
  }

  if (window.matchMedia("(min-width:1501px)").matches) {
    _paginatorNum = 3
  }

  const pagiPartners = new SimplePaginator({
    pagiContainer: this.pagiContainer,
    pagiItem: this.pagiItem,
    pagiLeft: this.pagiLeft,
    pagiRight: this.pagiRight,
    paginatorItem: this.paginatorItem,
    paginatorNum: _paginatorNum,
  });
  return pagiPartners
}

pagiPart = getPagi(
  pagiContainer = ".partners__items",
  pagiItem = ".partners__item",
  pagiLeft = ".partners-paginator_left",
  pagiRight = ".partners-paginator_right",
  paginatorItem = ".paginator__event",
  )


pagiPart.init()

allLogo = document.querySelectorAll('.partners__link')
allLogo.forEach(function(elem) {
  elem.addEventListener("mouseover", activateLogo)
} )

allLogo.forEach(function(elem) {
  elem.addEventListener("mouseout", deactivateLogo)
} )

function activateLogo(el) {
  dd = el.currentTarget.querySelector('picture').children
  dd.forEach(function(elem) {
    var source = elem.srcset

    if (source != "") {
      source = source.slice(0,-4) + '__active.svg'
      elem.srcset = source
    }
    else {
      temp_width = getComputedStyle(elem).width
      source = elem.src.slice(0,-4) + '__active.svg'
      elem.src = source
      elem.style.width = temp_width
    }
  } )
}

function deactivateLogo(el) {
  dd = el.currentTarget.querySelector('picture').children
  dd.forEach(function(elem) {
    var source = elem.srcset

    if (source != "") {
      source = source.slice(0,-12) + '.svg'
      elem.srcset = source
    }
    else {
      temp_width = getComputedStyle(elem).width
      source = elem.src.slice(0,-12) + '.svg'
      elem.src = source
      elem.style.width = temp_width
    }
  } )
}
