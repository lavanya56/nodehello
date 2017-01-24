var mocha = require('mocha');
var expect  = require("chai").expect;
var request = require("request");
describe("testing sample api", function() {
describe("testing sample apiw", function() {
  var url = "http://localhost:4000";
    it("returns status 200", function() {
      request(url, function(error, response, body) {
		  console.log(response.statusCode+""+body);
        expect(response.statusCode).should.equal(200);
		expect(body).should.equal("hello world");
      });
    });
  
 
 });
})