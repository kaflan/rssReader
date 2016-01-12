'use strict';

describe('Filter: htmlUrlParser', function () {

  // load the filter's module
  beforeEach(module('publickApp'));

  // initialize a new instance of the filter before each test
  var htmlUrlParser;
  beforeEach(inject(function ($filter) {
    htmlUrlParser = $filter('htmlUrlParser');
  }));

  it('should return the input prefixed with "htmlUrlParser filter:"', function () {
    var text = 'angularjs';
    expect(htmlUrlParser(text)).toBe('htmlUrlParser filter: ' + text);
  });

});
