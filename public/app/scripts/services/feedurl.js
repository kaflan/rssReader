'use strict';

/**
 * @ngdoc service
 * @name publickApp.feedUrl
 * @description
 * # feedUrl
 * Factory in the publickApp.
 */
angular.module('publickApp')
  .factory('feedUrl', function ($http) {
    return {
      post: function (dat) {
        return $http.post('/post', dat).success(function(res){
          var list = angular.copy(res);
          return list;
        });
      }
    };
  });
