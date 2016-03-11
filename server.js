'use strict';

const express         = require('express');
const app             = express();
const port 	      = process.env.PORT || 3000;

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

// Load the routes
require('./routes/routes.js')(app);

// Start server
app.listen(port, () => {
 console.log('Server started on port: '+port);
});
