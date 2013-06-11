define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');
  var utils = require('flight/lib/utils');

  /**
   * Module exports
   */

  return defineComponent(parallax);

  /**
   * Module function
   */

  function parallax() {

    this.update = function(e, data) {
      var leftToRight = (Math.round(data.tiltLR) * -1);
      var frontToBack = (Math.round(data.tiltFB) * -1);
      this.$node.css({
        "-webkit-transform": "translate3d(" + leftToRight + "px, " + frontToBack + "px, 0)",
        "transform": "translate3d(" + leftToRight + "px, " + frontToBack + "px, 0)"
      });
    };

    this.after('initialize', function () {
      this.on(document, 'orientation-update', utils.throttle(this.update));
    });
  }

});
