'use strict';

// ---------------------------------------------------------
// This module registers all the "API" routes of the system.
//
// Routes for other devices such as phone or tablet apps
// to share data and information with our system.
//
// Basically the developer API.
// ---------------------------------------------------------

const Yelp = require('yelp');

const yelp = new Yelp({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 token: process.env.TOKEN,
 token_secret: process.env.TOKEN_SECRET
});

module.exports = function(app, version) {
  
  // Prefix for all the API routes
  const prefix = '/api/'+version;
	
  // Get all the restaurants available in the system
  app.get(prefix + '/restaurant/all', (req, res) => {
    
     var ll = req.query.latitude  + ',' + req.query.longitude;
     console.log('ll: '+ll);

     yelp.search({ term: 'food', ll: ll })
       .then((data) => {
          console.log('Recieved this from yelp: \n' +JSON.stringify(data));
          res.send(data);
        })
        .catch((err) => {
          console.error(err);
        });
  });

  // To do: add more API routes..
};
