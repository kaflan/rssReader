'use strict';

describe('Controller: D3Ctrl', function () {

  // load the controller's module
  beforeEach(module('publickApp'));

  var D3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    D3Ctrl = $controller('D3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(D3Ctrl.awesomeThings.length).toBe(3);
  });
});
