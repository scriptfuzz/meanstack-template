'use strict';

// Importing necesary libraries
const express      = require('express'),
   app             = express(),
   port            = process.env.PORT || 8080,
   path            = require('path'),
   staticFileDir   = path.resolve(__dirname, 'public'),
   mustacheExpress = require('mustache-express'),
   apiVersion      = 'v1';

// Configuration
app.set('port', port);
app.use(express.static(staticFileDir));
// Configure server-side templaing engine
app.engine('html', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Load the API routes.
require('./routes/api-routes.js')(app, apiVersion);

// Load the web site routes.
require('./routes/site-routes.js')(app);

// Start server
app.listen(port, function() {
 console.log('Server started on port: '+port);
});
