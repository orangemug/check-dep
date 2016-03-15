var assert       = require("assert");
var readmeTester = require("readme-tester");
var checkDep = require("../");


describe("check-dep", function() {
  it("README", function(done) {
    readmeTester(__dirname+"/..", function(err, assertions) {
      assert(!err);
      done();
    });
  })

  it("valid semver", function() {
    var exists = checkDep("pkg-up", "*");
    assert.equal(exists, true);
  });

  it("invalid semver", function() {
    var exists = checkDep("pkg-up", "^1.1.0");
    assert.equal(exists, false);
  });

  it("non-existing module", function() {
    var exists = checkDep("foo", "*");
    assert.equal(exists, false);
  });

  it("valid relative module", function() {
    var exists = checkDep("../", "*");
    assert.equal(exists, true);
  });

  it("valid relative module", function() {
    var exists = checkDep("../non-exist", "*");
    assert.equal(exists, false);
  });

  it("invalid json relative module", function() {
    var exists = checkDep("../non-exist", "*");
    assert.equal(exists, false);
  });

})
