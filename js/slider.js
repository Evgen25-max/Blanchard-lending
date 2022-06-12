
class GalleryImages {
  constructor(container) {
      this.paintingSrc = [
        './img/gallery/gallery-article/painting//1.jpg',
        './img/gallery/gallery-article/painting//2.jpg',
        './img/gallery/gallery-article/painting//3.jpg',
        './img/gallery/gallery-article/painting//4.jpg',
        './img/gallery/gallery-article/painting//5.jpg',
        './img/gallery/gallery-article/painting//6.jpg',
        './img/gallery/gallery-article/painting//7.jpg',
        './img/gallery/gallery-article/painting//8.jpg',
        './img/gallery/gallery-article/painting//9.jpg',
        './img/gallery/gallery-article/painting//10.jpg',
        './img/gallery/gallery-article/painting//11.jpg',
        './img/gallery/gallery-article/painting//12.jpg'
      ]
      this.paintingAlt = [
        'painting 1',
        'painting 2',
        'painting 3',
        'painting 4',
        'painting 5',
        'painting 6',
        'painting 8',
        'painting 9',
        'painting 10',
        'painting 11',
        'painting 12',
      ]
      this.paintingDrop = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12']
      this.drawningSrc = [
        './img/gallery/gallery-article/drawing//1.jpg',
        './img/gallery/gallery-article/drawing//2.jpg',
        './img/gallery/gallery-article/drawing//3.jpg',
        './img/gallery/gallery-article/drawing//4.jpg',
        './img/gallery/gallery-article/drawing//5.jpg',
        './img/gallery/gallery-article/drawing//6.jpg',
      ]
      this.drawningAlt = [
        'drawing 1',
        'drawing 2',
        'drawing 3',
        'drawing 4',
        'drawing 5',
        'drawing 6',
      ]
      this.drawningDrop = ['13', '14', '15', '16', '17', '18']
      this.sculptureSrc = [
        './img/gallery/gallery-article/sculpture//1.jpg',
        './img/gallery/gallery-article/sculpture//2.jpg',
        './img/gallery/gallery-article/sculpture//3.jpg',
        './img/gallery/gallery-article/sculpture//4.jpg',
        './img/gallery/gallery-article/sculpture//5.jpg',
        './img/gallery/gallery-article/sculpture//6.jpg',
      ]
      this.sculptureAlt = [
        'sculpture 1',
        'sculpture 2',
        'sculpture 3',
        'sculpture 4',
        'sculpture 5',
        'sculpture 6',
      ]
      this.sculptureDrop = ['25', '26', '27', '28', '29', '30']

      this.theme = 'painting'
      this.paginator = document.querySelector('.paginator__page')
      this.ulNode = document.querySelector('.gallery-images__items')
      this.liNode = document.querySelector('.gallery-images__item')
      this.resolution = null
      this.pagItems = null
      this.pages = 1
      this.lastPage = null
      this.items = 0
      this.count = 0
      this.imageItems = null
    }

  _getSrc() {
    this.imageItems.forEach (function(e) {
      if (this.count < this.items) {
        e.src = this[this.theme + 'Src'][this.count].replace("//", "/" + this.resolution + "/")
        e.alt = this[this.theme + 'Alt'][this.count]
        e.setAttribute("dropdownId", this[this.theme + 'Drop'][this.count])
        this.count ++
      }
      else {
        e.src = ""
        e.alt = ""
      }
    }.bind(this))
  }

  init() {
    this.imageItems = document.querySelectorAll('.gallery-images__img')
    this.items = this[this.theme + 'Src'].length
    this.lastPage = Math.ceil(this[this.theme + 'Src'].length / this.pagItems)
    this._getSrc()
    this.paginator.innerHTML=this.pages + " / " + this.lastPage
  }

  initTree() {

    var lis = this.ulNode.querySelectorAll('.gallery-images__item');
    for(var i=0; i < lis.length - 1; i++) {
        this.ulNode.removeChild(lis[i]);
    }

    if (window.matchMedia("(max-width: 500px)").matches) {
      this.pagItems = 1
      this.resolution = "320"
    }

    else if (window.matchMedia("(max-width: 900px)").matches) {
      this.pagItems = 2
      this.resolution = "768"
    }
    else if (window.matchMedia("(max-width: 1500px)").matches) {
      this.pagItems = 2
      this.resolution = "1024"
    }
    else {
      this.pagItems = 3
      this.resolution = "1920"
    }
    var tempLi = this.pagItems

    while (tempLi > 1) {
      this.ulNode.appendChild(this.liNode.cloneNode(true));
      tempLi --
    }
    this.pages = 1
    this.count = 0
    this.init()
    if (window.matchMedia("(max-width: 500px)").matches) {
      swipe(this.imageItems[0], { maxTime: 1000, minTime: 1, maxDist: 350,  minDist: 6 });
      this.imageItems[0].addEventListener("swipe", function(e) {
        if (e.detail.dir === "left") {
            galerySwipe.next()
          }
        else if (e.detail.dir == "right") {
           galerySwipe.previous()
          }
      });
    }
    this._click()
  }

  _click() {
    document.querySelectorAll(".gallery-images__article").forEach(function(item) {
      item.addEventListener("click", function(el){
        var dropId = el.target.querySelector('img').getAttribute('dropdownid')
        var dropdownData = document.querySelector(`[dropdownid\-gallery="${dropId}"]`)
        if (dropdownData != undefined) {
          dropdownData.classList.add('item-drop-gallery_active')
          document.querySelector(".gallery__gallery-dropdown").classList.add("gallery-dropdown__active")
        }
      })
    })

  }
  next() {
    if (this.pages < this.lastPage) {
      this._getSrc()
      this.pages ++
      this.paginator.innerHTML=this.pages + " / " + this.lastPage
    }
  }

  previous() {
    if (this.pages != 1) {
      this.count = (this.pages -2) * this.pagItems
      this._getSrc()
      this.pages --
      this.paginator.innerHTML=this.pages + " / " + this.lastPage
    }
  }
}

const galerySwipe = new GalleryImages();
galerySwipe.initTree()

function handleTabletChange(e) {
  if (e.matches) {
    galerySwipe.initTree()
    pagiPart.reInit(3)
  }
  if (e.matches) {
    const paginatorEvents = new Paginator({
      container: ".event-item",
      paginatorContainer: ".paginator-events",
      paginatorItem: ".paginator__event",
      paginatorNum: 3,
      full: true,
    });
  }
}

function handleMiddleChange(e) {
  if (e.matches) {
    pagiPart.reInit(this.pagSimple)
    const paginatorEvents = new Paginator({
      container: ".event-item",
      paginatorContainer: ".paginator-events",
      paginatorItem: ".paginator__event",
      paginatorNum: this.pagNum,
    });
  }
}
/*
if (window.matchMedia("(max-width: 550px)").matches) {
  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 1,
  });
}

if (window.matchMedia("(min-width:550px) and (max-width: 768px)").matches) {
  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 2,
  });
}

if (window.matchMedia("(min-width:769px) and (max-width: 1024px)").matches) {
  const paginatorEvents = new Paginator({
    container: ".event-item",
    paginatorContainer: ".paginator-events",
    paginatorItem: ".paginator__event",
    paginatorNum: 3,
  });
}
*/

mediaQueryMobile = window.matchMedia("(max-width: 500px)")
mediaQueryMiddleMobile = window.matchMedia("(min-width:501px) and (max-width: 650px)")
mediaQueryBigMobile = window.matchMedia('(min-width:651px) and (max-width: 900px)')
mediaQueryLaptop = window.matchMedia('(min-width:901px) and (max-width: 1500px)')
mediaQueryDesktop = window.matchMedia("(min-width: 1501px)")

mediaQueryMobile.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 1, pagSimple: 1});
mediaQueryMiddleMobile.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 2, pagSimple: 1});
mediaQueryBigMobile.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 2, pagSimple: 2});
mediaQueryLaptop.addEventListener("change", {handleEvent: handleMiddleChange, pagNum: 3, pagSimple: 2});
mediaQueryDesktop.addEventListener("change", handleTabletChange);


// обработка свайпов

