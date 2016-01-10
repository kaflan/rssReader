'use strict';

/**
 * @ngdoc service
 * @name rssApp.feedUrl
 * @description
 * # feedUrl
 * Factory in the rssApp.
 */
angular.module('rssApp')
  .factory('feedUrl', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
