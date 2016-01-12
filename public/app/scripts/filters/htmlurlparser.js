'use strict';

/**
 * @ngdoc filter
 * @name publickApp.filter:htmlUrlParser
 * @function
 * @description
 * # htmlUrlParser
 * Filter in the publickApp.
 */
angular.module('publickApp')
  .filter('htmlUrlParser', function ($sce) {
    return function (input) {
      return   $sce.trustAsUrl(input);
    };
  });
