'use strict';

describe('Directive: donat', function () {

  // load the directive's module
  beforeEach(module('publickApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<donat></donat>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the donat directive');
  }));
});
