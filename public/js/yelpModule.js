// This module provides a global object
// with operations for finding Yelp data.
var YELP = (function(window, $, coordinates, apiVersion) {
  'use strict';

  var yelp = {
    fetch: function (callback) {
      // Todo: Fix this here...
      $.ajax({
        url: '/api/'+ apiVersion +'/yelp',
        type: 'GET',
        data: coordinates,
        success: function(data) {
          console.log('Recieved from yelp: ' + JSON.stringify(data));
          callback(data);
        },
        error: function(error) {
          console.log('Error fetching yelp data.');
          callback(error);
        }
      });
    }
  };

  return yelp;
}(window, $, COORDINATES, 'v1'));
