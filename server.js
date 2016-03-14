'use strict'

const express         = require('express');
const app             = express();
const port 	      = process.env.PORT || 8080;

const path            = require('path');
const publicPath      = path.resolve(__dirname, 'public');
const mustacheExpress = require('mustache-express');

// Configuration
app.set('port', port);
app.use(express.static(publicPath));
// Configure server-side templaing engine
app.engine('html', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const version = 'v1';
// Load the API routes.
require('./routes/api-routes.js')(app, version);

// Load the Web site routes.
require('./routes/site-routes.js')(app);

// Start server
app.listen(port, function() {
 console.log('Server started on port: '+port);
});
