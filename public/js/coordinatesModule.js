// This module is responsible for storing the users
// location in the COORDINATES global variable.

var COORDINATES = (function() {
  'use strict';

  var location = {};

  function assignCoordinates(coordinates) {
    location = coordinates;
    return;
  };

  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(function(position) {
      
      var c = {latitude: position.coords.latitude, longitude: position.coords.longitude};
      console.log('position: ' + JSON.stringify(c));

      location = position;
      return;
    });

  } else {
    console.log('Geolocation is not supported by this browser.');
    return location;
  }

}());
