ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.9398806677677,30.33193647360036],
        zoom: 16,
        controls: []
      },{
        suppressMapOpenBlock: true
      },{
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(([59.94077427553936,30.325949783079135]), {
  
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/pin.svg',
        iconImageSize: [218, 142],
        iconImageOffset: [-235, -40]
      });
    myMap.geoObjects.add(myPlacemark);
  });