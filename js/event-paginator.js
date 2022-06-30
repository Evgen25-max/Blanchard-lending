
class Paginator {
  constructor(options) {
    this.paginatorItems = document.querySelectorAll(options["container"])
    this.allItemsNum = this.paginatorItems.length
    this.paginatorContainer = document.querySelector(options["paginatorContainer"])
    this.paginatorItem = this._getPaginatorItem(options["paginatorItem"])
    this.paginatorNum = options["paginatorNum"]
    this.paginatorContainer.querySelector(options["paginatorItem"]).classList.remove('.paginator__event_active')
    this.maxHeight = 0
    this.full = options["full"]
    this.leftPaginatorEvents = document.querySelector('#full-paginator_left')
    this.rightPaginatorEvents = document.querySelector('#full-paginator_right')
    this.init()
  }

  _getPaginatorItem(itemClass) {
    var item = this.paginatorContainer.querySelector(itemClass).cloneNode(true)
    item.classList.remove('paginator__event_active')
    return item
  }

  init() {
    this._allClear()
    var countPaginator = 1
    var tempCountPaginator = 1

    this.paginatorItems.forEach(function(elem) {
      if (this.paginatorNum >= countPaginator) {
        elem.setAttribute("paginator", `${tempCountPaginator}`)
      }

      else {
        tempCountPaginator ++
        elem.setAttribute("paginator", `${tempCountPaginator}`)
        countPaginator = 1
      }
      countPaginator ++
    }.bind(this) )


    if (this.full != true) {

      this.rightPaginatorEvents.classList.add('hidden')
      this.leftPaginatorEvents.classList.add('hidden')

      countPaginator = 0
      if (tempCountPaginator > 11) {
        this.paginatorContainer.classList.add("paginator-events_abs")
      }

      var i = 2;
      for (;i <= tempCountPaginator;i++) {
        var li = this.paginatorItem.cloneNode(true)
        li.setAttribute('target', `${i}`)
        this.paginatorContainer.appendChild(li)
      }

      this.allItems = document.querySelectorAll('.event-item')
      this._getMaxHeight()

      this._addClick()
      this._activePaginator(1)
    }
    else {
      this.activePage = 1
      this.allItems = document.querySelectorAll('.event-item')
      this.maxPaginator = Math.ceil(this.allItems.length/this.paginatorNum)
      this._getMaxHeight()
      this._fullAddClick()
    }
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

  _addClick() {
    this.paginatorContainer.querySelectorAll('.paginator__event').forEach(function(el) {
      el.addEventListener("click", this._clickItem.bind(this, el))
    }.bind(this) )
  }

  _fullAddClick() {

    if (this.maxPaginator < 2) {

      this.rightPaginatorEvents.classList.add('hidden')
      return
    }
    this.leftPaginatorEvents.addEventListener("click", this._clickLeft.bind(this))
    this.rightPaginatorEvents.addEventListener("click", this._clickRight.bind(this))
    this.leftPaginatorEvents.classList.add('hidden')
  }

  _clickRight(el) {
    if (this.activePage < this.maxPaginator - 1) {
      this._fullClick(this.activePage + 1)
      this.leftPaginatorEvents.classList.remove('hidden')
    }

    else if (this.activePage = this.maxPaginator - 1) {
      this.rightPaginatorEvents.classList.add('hidden')
      this.leftPaginatorEvents.classList.remove('hidden')
      this._fullClick(this.activePage + 1)
    }

    }

  _clickLeft(el) {
    if (this.activePage > 3) {
      this._fullClick(this.activePage - 1)
      this.rightPaginatorEvents.classList.remove('hidden')
    }

    else if (this.activePage = 2) {
      this.rightPaginatorEvents.classList.remove('hidden')
      this.leftPaginatorEvents.classList.add('hidden')
      this._fullClick(this.activePage - 1)
    }
  }

  _fullClick(page) {
    this.activePage = page
    var articleSelect = document.querySelectorAll(`[paginator="${page}"]`)
    this.allItems.forEach(function(el) {
      el.style.minHeight = this.max_height
      el.style.opacity = "0"
      el.style.display = "none"
    }.bind(this))
    articleSelect.forEach(function(el) {
      el.style.display = "block"
      window.setTimeout(function() {
        el.style.opacity = "1"
      }, 0)
    })
  }


  _clickItem(itemPaginator) {
    var articleNum = itemPaginator.getAttribute('target')
    var articleSelect = document.querySelectorAll(`[paginator="${articleNum}"]`)
    this.allItems.forEach(function(el) {
      el.style.minHeight = this.max_height
      el.style.opacity = "0"
      el.style.display = "none"
    }.bind(this))
    articleSelect.forEach(function(el) {
      el.style.display = "block"
      window.setTimeout(function() {
        el.style.opacity = "1"
      }, 0)
    })



    this._activePaginator(articleNum)
  }

  _activePaginator(num) {
    document.querySelectorAll(".paginator__event").forEach(function(el) {
      el.classList.remove("paginator__event_active")
    })
    this.paginatorContainer.querySelector(`[target="${num}"]`).classList.add("paginator__event_active")
    if ((num > 6) ) {

      this.paginatorContainer.style.left = `-${(num - 5)*10}%`
    }
    else if (num < 6 ) {
      this.paginatorContainer.style.left = "0"
    }

  }
/*
  _activePaginator(num) {
    document.querySelectorAll(".paginator__event").forEach(function(el) {
      el.classList.remove("paginator__event_active")
    })
    this.paginatorContainer.querySelector(`[target="${num}"]`).classList.add("paginator__event_active")
    if ((num > 6) && (num < this.paginatorItems.length - 5)) {
      this.paginatorContainer.style.left = `-${(num - 6)*5.5}%`
    }
    else if (num < 6 ) {
      this.paginatorContainer.style.left = "0"
    }
    else if (num > this.paginatorItems.length - 5 ) {
      this.paginatorContainer.style.left = "-66%"
    }
  }
*/
}


if (window.matchMedia("(max-width: 650px)").matches) {
  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 1,
  });
}

if (window.matchMedia("(min-width:651px) and (max-width: 900px)").matches) {
  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 2,
  });
}

if (window.matchMedia("(min-width:901px) and (max-width: 1500px)").matches) {
  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 3,
  });
}

if (window.matchMedia("(min-width:1501px)").matches) {

  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 3,
    full: true,
  });
}
