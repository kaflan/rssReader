'use strict';

/**
 * @ngdoc overview
 * @name publickApp
 * @description
 * # publickApp
 *
 * Main module of the application.
 */
angular
  .module('publickApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // controller: 'D3Ctrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
