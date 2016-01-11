'use strict';

/**
 * @ngdoc service
 * @name publickApp.getRss
 * @description
 * # getRss
 * Service in the publickApp.
 */
angular.module('publickApp')
  .service('getRss', function ($http) {
    return {
      get: function(index) {
        return $http.get('/channels/'+ index).success(function(res) {
          var list = angular.copy(res);
          return list;
        });
      }
    };
  });
