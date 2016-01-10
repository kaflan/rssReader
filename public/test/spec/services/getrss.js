'use strict';

describe('Service: getRss', function () {

  // load the service's module
  beforeEach(module('publickApp'));

  // instantiate service
  var getRss;
  beforeEach(inject(function (_getRss_) {
    getRss = _getRss_;
  }));

  it('should do something', function () {
    expect(!!getRss).toBe(true);
  });

});
