# flight-orientation

A [Flight](https://github.com/twitter/flight) component for device orientation.

## Installation

```bash
bower install --save flight-orientation
```
## Example

```javascript
define(['flight-orientation'], function(Orientation) {

  Orientation.attachTo(document);

  // Listen for device orientation updates
  $(document).on('orientation-update', function(e, orientation) {
    console.log(e, orientation);
  });

  // Listen for device support
  $(document).on('orientation-supported', function() {
    console.log('Device supports orientation!');
  });

  // Listen for unsupported devices
  $(document).on('orientation-unsupported', function() {
    console.log('Device doesn't support orientation :(');
  });
});
```

## Development

Development of this component needs [Bower](http://bower.io), and ideally
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
