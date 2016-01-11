'use strict';

describe('Controller: DonatCtrl', function () {

  // load the controller's module
  beforeEach(module('publickApp'));

  var DonatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonatCtrl = $controller('DonatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DonatCtrl.awesomeThings.length).toBe(3);
  });
});
