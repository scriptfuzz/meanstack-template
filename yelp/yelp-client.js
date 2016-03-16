// -----------------------------------
// Encapsulates calls to the yelp api
// -----------------------------------

const http = require('http');

module.exports = function() {

 return {
   search: (location) => { 
    console.log('Seaching yelp for restaurants');
   }
  };

};
