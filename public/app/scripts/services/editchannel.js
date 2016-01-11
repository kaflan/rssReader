'use strict';

/**
 * @ngdoc service
 * @name publickApp.editChennel
 * @description
 * # editChennel
 * Service in the publickApp.
 */
angular.module('publickApp')
  .service('editChannel', function ($http) {
    return{
      edit: function(index, data){
        return $http.put('/put/'+ index, data).then(function(res){
          console.log(res);
          var list = angular.copy(res);
          return list;
        });
      }
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
