'use strict';

// -----------------------------------------------
// Registers all the routes of the website itself.
// (User facing URL end points)
// -----------------------------------------------
module.exports = function(app) {
 
 // Get the root web page (landing page).
 app.get('/', function(req, res, next){
   res.render('master', {name: 'Jose'});
 });

 // To do: add more website routes.
};
