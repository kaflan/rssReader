'use strict';

describe('Service: feedUrl', function () {

  // load the service's module
  beforeEach(module('rssApp'));

  // instantiate service
  var feedUrl;
  beforeEach(inject(function (_feedUrl_) {
    feedUrl = _feedUrl_;
  }));

  it('should do something', function () {
    expect(!!feedUrl).toBe(true);
  });

});
