# check-dep
Check if a dependency exists and satisfies a semver

[![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/check-dep.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/check-dep.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/check-dep/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#experimental
[circleci]:  https://circleci.com/gh/orangemug/check-dep
[dm-prod]:   https://david-dm.org/orangemug/check-dep
[dm-dev]:    https://david-dm.org/orangemug/check-dep#info=devDependencies


## Install

    npm install orangemug/check-dep


## Usage

```js
    var checkDep = require("check-dep");

    var exists = checkDep("pkg-up", "^1.0.0");
    assert.equal(exists, true);

    var notExists = checkDep("keytar", "^3.0.0");
    assert.equal(notExists, false);
```

## Test
To run the tests

    npm test


## License
[MIT](LICENSE)
