// This script is responsible for 
// tests the HTTP routes.

const request = require('supertest');

describe('loading express', function() {

  // Instantiate the server
  var server;

  beforeEach(function() {
  	// Remove cache
  	delete require.cache[require.resolve('../server.js')];
  	server = require('../server.js');
  });

  afterEach(function(done) {
  	server.close(done);
  });

  it('responds to /', function testSlash(done) {
  	request(server)
  		.get('/')
  		.expect(200, done);
  });

  it('404 everything else', function testPath(done) {
  	console.log('test 404');
  	request(server)
  		.get('/foo/bar')
  		.expect(404, done);
  });

});