// This module provides a global object
// with operations for finding Yelp data.

var YELP = (function(window, $, coordinates) {

  var contextArray = window.location.hostname.split('.');
  var context = (contextArray.length == 1 ? contextArray[0] : contextArray[1]);

  function fetchDataByCoordinates() {
    // Todo: Fix this here...
    $.ajax({
      url: context + '/api/v1/yelp',
      type: 'GET',
      data: coordinates,
      success: function(data) {
        console.log('Recieved from yelp: ' + JSON.stringify(data));
        return data;
      },
      error: function(error) {
        console.log('Error fetching yelp data.');
      }
    });

  };

  var yelp = {
    fetch: fetchDataByCoordinates()
  }

  return yelp;
}());
