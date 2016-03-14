'use strict';

// ---------------------------------------------------------
// This module registers all the "API" routes of the webapp
// (Routes for other devices such as phone or tablet apps).
// ---------------------------------------------------------
module.exports = function(app, version) {
  
  // Prefix for all the API routes
  const prefix = '/api/'+version;
	
  // Get all the restaurants available in the system
  app.get(prefix + '/restaurant/all', function(req, res, next) {
    
     let sampleData = { restaurants:['restaurant1', 'restaurant2'] };
     
     console.log('Sending restaurants: '+JSON.stringify(sampleData));
     
     res.send(sampleData);
  });

  // To do: add more API routes..
};
