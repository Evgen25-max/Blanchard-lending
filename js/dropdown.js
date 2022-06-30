
class DropdownGallery {
  constructor(options) {
    this.dropAttribute = options["dropAttr"]
    this.dropItemsAttribute = options["dropItemsAttr"]
    var dropdownItems= this._init((this.dropAttribute))
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

  _init(attr) {
    var dropdownAll = document.querySelectorAll(`[${attr}]`)
    dropdownAll.forEach(function(e) { this._click(e)}.bind(this))
    return  dropdownAll
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

  _click(el) {
    el.addEventListener("click", function() {
      var idDrop = el.getAttribute(`${this.dropAttribute}`)
      if (idDrop != undefined) {
        var dropdownData = document.querySelector(`[${this.dropItemsAttribute}="${idDrop}"]`)
        if (dropdownData != undefined) {
          dropdownData.classList.add('item-drop-gallery_active')
          document.querySelector(".gallery__gallery-dropdown").classList.add("gallery-dropdown__active")
        }
      }
    }.bind(this)
    )

  }

}


const galerySwipe = new DropdownGallery({
  dropAttr: "dropdown_id",
  dropItemsAttr: "dropdownid\-gallery"
});
