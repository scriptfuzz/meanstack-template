'use strict';

var cluster = require('cluster'),
    cpus    = require('os').cpus().length;

if (cluster.isMaster) {
  
  for (var i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker '+ worker.process.pid + ' died');
  });

} else {

   // Run the server
   require('./server.js');
}
