var assert       = require("assert");
var readmeTester = require("readme-tester");


describe("check-dep", function() {
  it("README", function(done) {
    readmeTester(__dirname+"/..", function(err, assertions) {
      assert(!err);
      done();
    });
  })
})
