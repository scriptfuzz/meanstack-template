// This module is responsible for storing the users
// location in the COORDINATES global variable.

var COORDINATES = (function () {
  'use strict';

  var location = {};

  function getCoordinates(position) {
    console.log('location: ' + JSON.stringify(location));
    location = { latitude: position.coords.latitude, longitude: position.coords.longitude };
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCoordinates);
  } else {
    console.log('Geolocation is not supported by this browser.');
    location = 'Could not getl location';
  }

  return location;

}());
