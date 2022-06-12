const element = document.querySelector('#content-gallery-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false
});


choices.passedElement.element.addEventListener(
  'change',
  function(event) {
    galerySwipe.theme = event.detail.value
    galerySwipe.pages = 1
    galerySwipe.count = 0
    galerySwipe.init()
  },
  false,
);
