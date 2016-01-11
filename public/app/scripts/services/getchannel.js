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
        return $http.get('/channels').success(function(res) {
          var list = angular.copy(res.data);
          return list;
        });
      }
    };
  });
