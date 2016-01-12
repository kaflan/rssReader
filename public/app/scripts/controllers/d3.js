'use strict';

/**
 * @ngdoc function
 * @name publickApp.controller:D3Ctrl
 * @description
 * # D3Ctrl
 * Controller of the publickApp
 */
angular.module('publickApp')
  .controller('D3Ctrl', function($scope, feedUrl, getChannels, deleteChannel, editChannel, getRss) {
    // console.log('lunch', D3Ctrl);
    getChannels.get().then(function(res){
      $scope.channels = angular.copy(res.data);
      console.log($scope.channels);
    });
    $scope.showFeed = function() {
      console.log($scope.url, 'feedUrl');
      feedUrl.post($scope.url).then(function(res) {
        $scope.channels = angular.copy(res);
      });
    };
    $scope.showChannel = function(index) {
      console.log('click');
      getRss.get(index).then(function(res) {
        console.log('icome', res.data);
      });
    };
    $scope.removeChannel = function(index) {
      deleteChannel.delete(index).then(function(res) {
        $scope.channels = angular.copy(res.data);
      });
    };
    $scope.editChannel = function(index, name, url) {
      $scope.click = !$scope.click;
      if(!$scope.click){
          console.log({name: name, url: url}, 'click2');
            editChannel.edit(index, {name: name, url: url}).then(function(res){
              console.log('work', res);
              $scope.channels = angular.copy(res.data);
            });
      }
      return true;
    };

  });
