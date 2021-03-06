var fs     = require("fs");
var path   = require("path");
var pkgUp  = require("pkg-up");
var semver = require("semver");
var path = require("path");


module.exports = function(moduleName, version) {
  // Allow for relative require checks
  if(moduleName.match(/^\.{1,2}\//)) {
    moduleName = path.join(path.dirname(module.parent.filename), moduleName);
  }

  var modPath;
  try {
    modPath = require.resolve(moduleName);
  } catch(err) {
    return false;
  }

  var pkgPath = pkgUp.sync(
    path.dirname(modPath)
  );

  var pkg = JSON.parse(
    fs.readFileSync(pkgPath).toString()
  );

  return semver.satisfies(pkg.version, version);
}
