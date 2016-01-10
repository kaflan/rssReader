'use strict';

describe('Service: getChannel', function () {

  // load the service's module
  beforeEach(module('publickApp'));

  // instantiate service
  var getChannel;
  beforeEach(inject(function (_getChannel_) {
    getChannel = _getChannel_;
  }));

  it('should do something', function () {
    expect(!!getChannel).toBe(true);
  });

});
