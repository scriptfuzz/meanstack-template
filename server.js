const http = require('http');
const port = 8080;

const server = http.createServer(function(req, res) {
  console.log('Recieved request: '+req.method+ ' '+req.url );
  res.end('<!DOCTYPE html>'
	  +'<html lang="en">'
	  +'<head>'
	  +'<meta charset="utf-8">'
	  +'</head>'
	  +'<body>'
	  +'<h1>Welcome to What2Eat</h1>'
	  +'</body>'
	  +'</html>'); 
});

server.listen(port, function() {
 console.log('Server started on port: '+port); 
});
