'use strict';

// ---------------------------------------------------------
// This module registers all the "API" routes of the system.
//
// Routes for other devices such as phone or tablet apps
// to share data and information with our system.
//
// Basically the developer API.
// ---------------------------------------------------------
module.exports = function(app, version) {
  
  // Prefix for all the API routes
  const prefix = '/api/'+version;
	
  // Get all the restaurants available in the system
  app.get(prefix + '/restaurant/all', function(req, res, next) {
     // Call http://localhost:port/api/v1/restaurant/all to see.

     // Sample data. In reality will come from db.
     let sampleData = { restaurants:['restaurant1', 'restaurant2'] };
     
     console.log('Sending restaurants: '+JSON.stringify(sampleData));
     // Send data in JSON format to browser or whoever made the 
     // HTTP call.
     res.send(sampleData);
  });

  // To do: add more API routes..
};
