(function () {
  'use strict';

  var location = {};

  function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(location.latitude, location.longitude),
      zoom:5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  };

  function getCoordinates(position) {
    location = { latitude: position.coords.latitude, longitude: position.coords.longitude };
    console.log('location: ' + JSON.stringify(location));
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoordinates);
    google.maps.event.addDomListener(window, 'load', initialize);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

})();
