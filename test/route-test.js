// This script is responsible for 
// tests the HTTP routes.

var request = require('supertest');

describe('loading express', function(){

  // Instantiate the server
  var server;

  beforeEach(function(){
  	// Remove cache
  	delete require.cache[require.resolve('../backend/server.js')];
  	server = require('../backend/server.js');
  });

  afterEach(function(done){
  	server.close(done);
  });

  it('responds to /', function(done){
  	request(server)
  		.get('/')
  		.expect(200, done);
  });

  it('Everything else should return index', function(done){
  	console.log('test 200 index');
  	request(server)
  		.get('/foo/bar')
  		.expect(200, done);
  });

});
