document.addEventListener("DOMContentLoaded", allLoad);

function allLoad() {
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          center: [55.758468, 37.601088],
          zoom: 14.2,
          controls: [],
          suppressMapOpenBlock: true
      });
      var eduAdress = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/contacts/maps_point.svg',
        iconImageSize: [20, 20],
      })
      if (window.matchMedia("(min-width:1501px)").matches) {
      myMap.controls.add('zoomControl', {
        position: {
            top: '267px',
            right: '19px'
        },
        size: 'small'
    }
    )
    myMap.controls.add('geolocationControl', {
      position: {
        top: '358px',
        right: '19px'
    },
  }
  )
}





    myMap.geoObjects.add(eduAdress);

  }
}


