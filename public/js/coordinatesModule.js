// This module is responsible for storing the users
// location in the COORDINATES global variable.
if (navigator.geolocation) {
  
  navigator.geolocation.getCurrentPosition(function(position) {
   'use strict';
    
    var coords = { latitude: position.coords.latitude, 
                   longitude: position.coords.longitude }
    console.log(position.coords);
    console.log('latitude = '+ position.coords.latitude);
    console.log('longitude = '+ position.coords.longitude);
  
    var mapProp = {
      center: new google.maps.LatLng(coords.latitude, coords.longitude),
      zoom:15, // street level
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var marker = new google.maps.Marker({
      position: {lat: coords.latitude, lng: coords.longitude},
      map: map,
      label: 'Y',
      draggable: false,
      animation: google.maps.Animation.DROP
    });

    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    marker.setMap(map);
    console.log('Completed map initialization.');

    YELP.fetch(coords, function(result) {
      // TODO: Iterate through data and add the marker in the restaurant locations
    });
  
  });

} else {
  console.log('Geolocation is not supported by this browser.');
}
