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
    getChannels.get().then(function(res){
      $scope.rss = angular.copy(res);
    });

    $scope.click = false;
    $scope.showFeed = function() {
      console.log($scope.url);
      feedUrl.post($scope.url).then(function(res) {
        $scope.rss = res;
      });
    };
    $scope.showRss = function(index) {
      getRss.get(index).then(function(res) {
        console.log(res);
      });
    };
    $scope.removeRss = function(index) {
      deleteChannel.delete(index).then(function(res) {
        console.log(res);
      });
    };
    $scope.editRss = function(index, item) {
      $scope.click = !$scope.click;
      console.log(item, index, 'click');
      editChannel.edit(index, $scope.item);
      return true;
    };

  });
