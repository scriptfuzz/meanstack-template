'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 9000,
    path = require('path'),
    staticFileDir = path.resolve(__dirname, 'public'),
    version = 'v1';

// Configuration
app.set('port', port);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Serve static files e.g. hmtl,css,js
app.use(express.static(staticFileDir));
app.set('views', staticFileDir + '/views/');

// Register all backend url endpoints 
require('./routes/api-routes.js')(app, version);

// Start server
var server = app.listen(port, function() {
    console.log('Server started on port: ' + port);
});

// Export the server as a module.
module.exports = server;
