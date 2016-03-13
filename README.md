# check-dep
Check if a dependency exists and satisfies a semver


## Install

    npm install orangemug/check-dep


## Usage

    var checkDep = require("check-dep");

    var exists = checkDep("pkg-up", "^1.0.0");
    assert.equal(exists, true);

    var notExists = checkDep("keytar", "^3.0.0");
    assert.equal(notExists, false);


## Test
To run the tests

    npm test


## License
[MIT](LICENSE)
