'use strict';

/**
 * @ngdoc service
 * @name publickApp.deleteChannel
 * @description
 * # deleteChannel
 * Service in the publickApp.
 */
angular.module('publickApp')
  .service('deleteChannel', function ($http) {
    return {
      delete: function(index){
        return $post('/delete', index).success(function(res){
          var list = angular.copy(res);
          console.log(res);
          return list;
        });
      }
    }
  });
