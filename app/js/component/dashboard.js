define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(dashboard);

  /**
   * Module function
   */

  function dashboard() {
    this.defaultAttrs({
      supported: ".supported",
      tiltLR: ".left-to-right",
      tiltFB: ".front-to-back",
      direction: ".direction",
      acceleration: ".acceleration"
    });

    this.update = function(e, data) {
      this.select('tiltLR').text(Math.round(data.tiltLR));
      this.select('tiltFB').text(Math.round(data.tiltFB));

      if (data.direction) {
        this.select('direction').text(Math.round(data.direction));
      }

      if (data.verticalAcceleration) {
        this.select('acceleration').text(Math.round(data.verticalAcceleration));
      }
    };

    this.supported = function() {
      this.select('supported').text('✔');
    };

    this.unsupported = function() {
      this.select('supported').text('✘');
    };

    this.after('initialize', function () {
      this.on(document, 'orientation-supported', this.supported);
      this.on(document, 'orientation-unsupported', this.unsupported);
      this.on(document, 'orientation-update', this.update);
    });
  }

});
