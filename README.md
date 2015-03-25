Table of Contents
=================

* [Percent Clamp](#percent-clamp)
  * [Install](#install)
  * [Developer](#developer)
    * [Test](#test)
    * [Start](#start)
    * [Cover](#cover)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Spec](#spec)
    * [Instrument](#instrument)
    * [Readme](#readme)
  * [License](#license)

Percent Clamp
=============

Clamp normalized percentage values (0-1) to the sum of 100 regardless of rounding errors.

## Install

```
npm i percent-clamp --save
```

## Developer

Developer workflow is via [gulp](http://gulpjs.com) but should be executed as `npm` scripts to enable shell execution where necessary.

### Test

Run the headless test suite using [phantomjs](http://phantomjs.org):

```
npm test
```

To run the tests in a browser context open [test/index.html](https://github.com/socialally/percent-clamp/blob/master/test/index.html) or use the server `npm start`.

### Start

Serve the test files from a web server with:

```
npm start
```

### Cover

Run the test suite and generate code coverage:

```
npm run cover
```

### Lint

Run the source tree through [eslint](http://eslint.org):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Spec

Compile the test specifications:

```
npm run spec
```

### Instrument

Generate instrumented code from `lib` in `instrument`:

```
npm run instrument
```

### Readme

Generate the project readme file (requires [mdp](https://github.com/freeformsystems/mdp)):

```
npm run readme
```

## License

Everything is [MIT](http://en.wikipedia.org/wiki/MIT_License). Read the [license](https://github.com/socialally/percent-clamp/blob/master/LICENSE) if you feel inclined.

Generated by [mdp(1)](https://github.com/freeformsystems/mdp).

[node]: http://nodejs.org
[npm]: http://www.npmjs.org
[gulp]: http://gulpjs.com
[phantomjs]: http://phantomjs.org
[browserify]: http://browserify.org
[eslint]: http://eslint.org
[sa-test]: https://github.com/socialally/sa-test
[mdp]: https://github.com/freeformsystems/mdp
