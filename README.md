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


## Why?
You may want to include an optional dependencies, for example we could include [keytar](https://www.npmjs.com/package/keytar) optionally and only attempt to store passwords in the keychain if installed.

You can see an example of that [here](https://github.com/orangemug/encrypt-conf/blob/d20f3aaf2738ec445363b8707daea225aeb4157a/lib/password-manager.js#L5-L7)



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
