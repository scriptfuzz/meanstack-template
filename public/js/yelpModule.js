// This module provides a global object
// with operations for finding Yelp data.
var YELP = (function(window, $, apiVersion) {
  'use strict';

  var yelp = {
    fetch: function (coordinates, callback) {
      // coordinates - must contain latitude & longitude properties
      $.ajax({
        url: '/api/'+ apiVersion +'/restaurant/all',
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
}(window, $, 'v1'));
