'use strict';

const express      = require('express'),
   app             = express(),
   port            = process.env.PORT || 9000,
   path            = require('path'),
   staticFileDir   = path.resolve(__dirname, 'public'),
   apiVersion      = 'v1';

// Configuration
app.set('port', port);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(staticFileDir));
app.set('views', staticFileDir + '/views/');


// Load the API routes.
require('./routes/api-routes.js')(app, apiVersion);

// Load the web site routes.
require('./routes/site-routes.js')(app);

//For any other route send index
app.all('/*', function(req, res, next){
 res.sendFile('index.html', {root: __dirname +'/public/views/'});
});

// Start server
const server = app.listen(port, () => {
 console.log('Server started on port: '+port);
});

// Export the server as a module.
module.exports = server;
