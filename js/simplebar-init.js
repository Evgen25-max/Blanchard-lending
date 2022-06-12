const containerSimplebar = document.querySelectorAll('[data-simplebar]')


containerSimplebar.forEach(
  function(container) {
    new SimpleBar(container, {
      scrollbarMaxSize: 30,
      autoHide: false,
      forceVisible: true|'x'|'y',
  })
}
)
