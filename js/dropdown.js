class DropdownGallery {
  constructor(options) {
    this.dropAttribute = options["dropAttr"]
    this.dropItemsAttribute = options["dropItemsAttr"]
    var dropdownItems= this._init((this.dropAttribute))
    this._close()
  }

  _init(attr) {
    var dropdownAll = document.querySelectorAll(`[${attr}]`)
    dropdownAll.forEach(function(e) { this._click(e)}.bind(this))
    return dropdownAll
  }

  _close() {
    document.querySelector('.gallery__gallery-dropdown').addEventListener('click', function(e)
      {
      if (e.target == document.querySelector('.gallery__gallery-dropdown')) {
        dropdownGalleryClose.click()
      }
      }
      )
  }

  _click(el) {
    el.addEventListener("click", function() {
      var idDrop = el.getAttribute(`${this.dropAttribute}`)
      if (idDrop != undefined) {
        var dropdownData = document.querySelector(`[${this.dropItemsAttribute}="${idDrop}"]`)
        if (dropdownData != undefined) {
          dropdownData.classList.add('item-drop-gallery_active')
          document.querySelector(".gallery__gallery-dropdown").classList.add("gallery-dropdown__active")
          document.querySelector('body').classList.add('body_no-scroll')
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
