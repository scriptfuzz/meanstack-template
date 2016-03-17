'use strict';

// -----------------------------------------------
// Registers all the routes of the website itself.
// (User facing URL end points)
// -----------------------------------------------

const yelp = require('../yelp/yelp-client.js');

module.exports = function(app) {
 
 // Get the root web page (landing page).
 app.get('/', (req, res) => {
   
   /*let location = '/search?term=food&location=Tampa';
   let businesses = yelp.search(location);
   console.log('Recieved business: '+JSON.stringify(business));
	*/
   res.render('master', {name: 'Jose'});
 });

 // To do: add more website routes.
};
