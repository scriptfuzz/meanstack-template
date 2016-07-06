'use strict';

var express        = require('express'),
   app             = express(),
   port            = process.env.PORT || 9000,
   path            = require('path'),
   staticFileDir   = path.resolve(__dirname, 'public');

// Configuration
app.set('port', port);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(staticFileDir));
app.set('views', staticFileDir + '/views/');

// Register an express route
app.get('/', function(req, res ,next){
	res.render('index.html');
});

//For any other route send index
app.all('/*', function(req, res, next){
 res.sendFile('index.html', {root: __dirname +'/public/views/'});
});

// Start server
var server = app.listen(port, function() {
 console.log('Server started on port: '+port);
});

// Export the server as a module.
module.exports = server;
