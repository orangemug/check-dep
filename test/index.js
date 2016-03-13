var assert       = require("assert");
var readmeTester = require("readme-tester");

readmeTester(__dirname+"/..", function(err, assertions) {
  assert(!err);
});
