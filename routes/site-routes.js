'use strict';

// -----------------------------------------------
// Registers all the routes of the website itself.
// (User facing URL end points)
// -----------------------------------------------

const Yelp = require('yelp');

const yelp = new Yelp({
 consumer_key: process.env.CONSUMER_KEY,
 consumer_secret: process.env.CONSUMER_SECRET,
 token: process.env.TOKEN,
 token_secret: process.env.TOKEN_SECRET
});

module.exports = function(app) {

 // Get the root web page (landing page).
 app.get('/', (req, res) => {

   yelp.search({ term: 'food', location: 'Tampa'})
     .then((data) => {
        console.log('Recieved this from yelp: \n' +JSON.stringify(data));
        res.render('master', {name: 'Jose'});
      })
      .catch((err) => {
        console.error(err);
      });
 });

 // To do: add more website routes.
};
