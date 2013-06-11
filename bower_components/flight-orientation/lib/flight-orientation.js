define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(flightOrientation);

  /**
   * Module function
   */

  function flightOrientation() {

    this.orientation = function(e) {
      this.trigger('orientation-update', this.orientationData(e.originalEvent));
    };

    this.orientationData = function(data) {
      if (this.isMozilla) {
        return {
          tiltLR: data.x * 90,
          tiltFB: data.y * -90,
          direction: null, // Not provided by MozOrientation
          verticalAcceleration: data.z
        }
      } else {
        return {
          tiltLR: data.gamma,
          tiltFB: data.beta,
          direction: data.alpha,
          verticalAcceleration: null // Not provided by DeviceOrientation
        }
      }
    };

    this.after('initialize', function () {
      var supported = window.DeviceOrientationEvent || window.OrientationEvent;
      if (supported) {
        this.isMozilla = window.OrientationEvent;

        this.trigger('orientation-supported');
        this.on(window, 'deviceorientation MozOrientation', this.orientation);
      } else {
        this.trigger('orientation-unsupported');
      }
    });
  }

});
