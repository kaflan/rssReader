'use strict';

/**
 * @ngdoc filter
 * @name publickApp.filter:htmlParser
 * @function
 * @description
 * # htmlParser
 * Filter in the publickApp.
 */
angular.module('publickApp')
  .filter('htmlParser', function ($sce) {
    return function (input) {
      return  $sce.trustAsHtml(input);
    };
  });
