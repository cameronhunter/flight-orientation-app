define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var Orientation = require('bower_components/flight-orientation/lib/flight-orientation');
  var Dashboard = require('component/dashboard');
  var Parallax = require('component/parallax');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    Dashboard.attachTo('.homescreen');
    Parallax.attachTo('.background');
    Orientation.attachTo(document);
  }

});
