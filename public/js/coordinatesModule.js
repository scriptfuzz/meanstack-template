// This module is responsible for storing the users
// location in the COORDINATES global variable.
if (navigator.geolocation) {
  
  navigator.geolocation.getCurrentPosition(function(position) {
   'use strict';
    
    var coords = { latitude: position.coords.latitude, 
                   longitude: position.coords.longitude };
    console.log('latitude = '+ position.coords.latitude);
    console.log('longitude = '+ position.coords.longitude);
  
    var mapProp = {
      center: new google.maps.LatLng(coords.latitude, coords.longitude),
      zoom:13, // street level
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // Create current location marker
    var marker = new google.maps.Marker({
      position: {lat: coords.latitude, lng: coords.longitude},
      map: map,
      label: 'Y',
      draggable: false,
      animation: google.maps.Animation.DROP
    });

    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    marker.setMap(map);

    // Fetch restuarant data from yelp
    // and draw it in the map
    YELP.fetch(coords, function(data) {
    
      var businesses = data.businesses || [];
      // 1. Iterate through data and add the marker in the restaurant locations
      businesses.forEach(function(business) {
        // 2. collect their name, lat & lng
        var name = business.name,
           coords = business.location.coordinate;
        
        var businessMarker = new google.maps.Marker({
          position: {lat: coords.latitude, lng: coords.longitude},
          map: map,
          draggable: false,
          animation: google.maps.Animation.Drop
        });
        // 3. create a marker in the map for it
        businessMarker.setMap(map);

	// 4. create an entry in the list of restaurants.
	$('#restaurants').append('<li class="list-group-item">' + name + '</li>');
      });

      console.log('Completed map initialization with markers.');
    });
  
  });

} else { // No geolocation :(
  console.log('Geolocation is not supported by this browser.');
}
