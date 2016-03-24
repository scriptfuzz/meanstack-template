// This module takes yelp data and creates
// a GoogleMap with the nearest restaurants
// highlighted by markers

// Uses the global YELP module
(function (YELP, COORDINATES) {
  'use strict';
  // Todo: Actually use the YELP module
  function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(COORDINATES.latitude, COORDINATES.longitude),
      zoom:5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  };

})(YELP, COORDINATES);
