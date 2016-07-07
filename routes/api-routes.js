'use strict';

// ---------------------------------------------------------
// This module registers all the "API" routes of the system.
//
// Routes for other devices such as phone or tablet apps
// to share data and information with our system.
//
// Basically the developer API. 
// 
// AngularJS will handle client side routes or 
// webpage endpoints. Thus, we only need to serve the index 
// page and angular-router will take care of the rest.
//
// ---------------------------------------------------------

// Add the yelp node.js module
var Yelp = require('yelp');

// Instiate a yelp object from the module
var yelp = new Yelp({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 token: process.env.TOKEN,
 token_secret: process.env.TOKEN_SECRET
});

module.exports = function(app, version) {
  
  // Prefix string for all the API routes
  // Helpful for versioning our api backend url routes
  var prefix = '/api/'+version;
	
  // -------------------------------------------------------
  // Root page serves the index page
  // -------------------------------------------------------
  app.get('/', function(req, res ,next){
    res.render('index.html');
  });

  // -------------------------------------------------------
  // Get all the restaurants available in the system
  // -------------------------------------------------------
  app.get(prefix + '/restaurant/all', function(req, res) {
    
     // build a longitude and latitude object as the yelp api expects
     var ll = req.query.latitude  + ',' + req.query.longitude;
     console.log('ll: '+ll);

     // Make a search in yelp
     yelp.search({ term: 'food', ll: ll }).then(function(data){

          console.log('Recieved this from yelp: \n' +JSON.stringify(data));
          // Send the data to the client
          res.send(data);

        }).catch(function(err) {
          // Print error if found.
          console.error(err);
        });
  }); // end of get /api/v1/restaurant/all route

  
  // To do: add more API routes here...
  

  // -------------------------------------------------------
  // For any other route, not previoously registered send index
  // -------------------------------------------------------
  app.all('/*', function(req, res, next){
   res.sendFile('index.html', {root: __dirname +'/public/views/'});
  });

}; // end of node.js module
