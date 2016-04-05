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

    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    console.log('Completed map initialization.');

    YELP.fetch(coords, function(result) {
      console.log(JSON.stringify(result));
    });
  
  });

} else {
  console.log('Geolocation is not supported by this browser.');
}
