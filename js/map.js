ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.9384,30.3300],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        },
        {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.9386,30.3231], {
            hintContent: 'HTMLAcademy'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [218, 142],
            iconImageOffset: [-10, -52]
        });

    myMap.geoObjects.add(myPlacemark);
});
