'use strict';

/**
 * @ngdoc service
 * @name publickApp.getChannel
 * @description
 * # getChannel
 * Service in the publickApp.
 */
angular.module('publickApp')
  .service('getChannels', function($http) {
    return {
      get: function() {
        return $http.get('/getChannels').success(function(res) {
          console.log(res);
          var list = angular.copy(res);
          console.log(res);
          return list;
        });
      }
    };
  });
