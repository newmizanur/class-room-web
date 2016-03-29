var should = require('should')
  , request = require('supertest')
  , server = require('../app').server
;

describe('GET /', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/')
      .expect(200, done)
    ;
  });
});

describe('GET /foo', function () {
  it('should return a 404 error', function (done) {
    request(server)
      .get('/foo')
      .expect(404, done)
    ;
  });
});



// ===============
// production only
// ===============

if (process.env.NODE_ENV !== 'production') return

describe('GET /public/js/all.js', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/public/js/all.js')
      .expect(200, done)
    ;
  });
});

describe('GET /public/css/all.css', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/public/css/all.css')
      .expect(200, done)
    ;
  });
});
