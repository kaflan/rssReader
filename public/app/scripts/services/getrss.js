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
        return $http.get('/getRss/'+ index).success(function(res) {
          console.log(res);
          var list = angular.copy(res);
          console.log(res);
          return list;
        });
      }
    };
  });
