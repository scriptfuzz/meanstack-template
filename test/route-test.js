// This script is responsible for 
// tests the HTTP routes.

const request = require('supertest');

describe('loading express', () => {

  // Instantiate the server
  var server;

  beforeEach(() => {
  	// Remove cache
  	delete require.cache[require.resolve('../server.js')];
  	server = require('../server.js');
  });

  afterEach((done) => {
  	server.close(done);
  });

  it('responds to /', (done) => {
  	request(server)
  		.get('/')
  		.expect(200, done);
  });

  it('404 everything else', (done) => {
  	console.log('test 404');
  	request(server)
  		.get('/foo/bar')
  		.expect(404, done);
  });

});