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

    $scope.rss = [];
    getChannels.get().then(function(res){
      $scope.channels = angular.copy(res.data);
    });
    $scope.showFeed = function() {
      feedUrl.post($scope.url).then(function(res) {
        $scope.channels = angular.copy(res);
      });
    };
    $scope.showChannel = function(index) {
      getRss.get(index).then(function(res) {
        $scope.rss = angular.copy(res.data);
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
    };
    $scope.showNews = function(title, description, image, url){
      $scope.massage = !$scope.massage;
      $scope.item = {
        title: title,
        description: description,
        image: image,
        url: url
      };
    }
  });
