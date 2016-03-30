// This module is responsible for storing the users
// location in the COORDINATES global variable.

if (navigator.geolocation) {
    
  var res = navigator.geolocation.getCurrentPosition(function(position) {
   'use strict';

    var c = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };

    console.log('position: ' + JSON.stringify(c));
    
    function initialize() {
      var mapProp = {
        center: new google.maps.LatLng(c.latitude, c.longitude),
        zoom:5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    };

    google.maps.event.addDomListener(window, 'ready', initialize);
    console.log('Completed map initialization.'); 
  });

} else {
  console.log('Geolocation is not supported by this browser.');
}
