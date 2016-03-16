// -----------------------------------
// Encapsulates calls to the yelp api
// -----------------------------------

const http = require('http');

module.exports = function() {

 let options = {
  host: 'https://api.yelp.com/',
  path: '/v2/',
  port: 80,
  method: 'GET'
 };

 let callback = function(response) {

   let result = '';

   response.on('data', (chunk) => {
     result += chunk;
   });

   response.on('end', () => {
     console.log(result);
     return result;
   });
 };

 return {
   search: (location) => { 
     console.log('Seaching yelp for restaurants: '+location);
     return http.request(options, callback);
   }
  };

};
