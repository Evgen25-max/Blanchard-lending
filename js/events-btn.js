function eventsShow() {
  var noActiveItems, activeItems, numItem
  var count = 0

  if (window.matchMedia("(max-width: 650px)").matches) {
    numItem = 1
  }
  else if (window.matchMedia("(max-width: 900px)").matches) {
    numItem = 2
  }

  else {
    numItem = 3
  }
  allItemsNum = document.querySelectorAll('.event-item').length
  activeItems = document.querySelectorAll(`.event-item:nth-child(-n + ${numItem})`)
  noActiveItems = document.querySelectorAll(`.event-item:nth-child(n + ${numItem + 1})`)
  if (!(noActiveItems.length == 0)) {
    var lineNum = Math.floor(allItemsNum/numItem)
    var noMarginBottomItem = allItemsNum - lineNum*numItem
    activeItems.forEach(function(active) {
      active.style.marginBottom = "50px"
    } )
    noActiveItems.forEach(function(item) {
      count ++
      if ((count < noActiveItems.length) && (allItemsNum - count - activeItems.length) >= (noMarginBottomItem)) {
        item.style.marginBottom = "50px"
      }
      item.style.display = "block"
      window.setTimeout(function() {
        item.style.opacity = "1"
      }, 0)
    } )
  }
}


