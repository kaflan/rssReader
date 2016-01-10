'use strict';

describe('Service: deleteChannel', function () {

  // load the service's module
  beforeEach(module('publickApp'));

  // instantiate service
  var deleteChannel;
  beforeEach(inject(function (_deleteChannel_) {
    deleteChannel = _deleteChannel_;
  }));

  it('should do something', function () {
    expect(!!deleteChannel).toBe(true);
  });

});
