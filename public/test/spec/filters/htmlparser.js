'use strict';

describe('Filter: htmlParser', function () {

  // load the filter's module
  beforeEach(module('publickApp'));

  // initialize a new instance of the filter before each test
  var htmlParser;
  beforeEach(inject(function ($filter) {
    htmlParser = $filter('htmlParser');
  }));

  it('should return the input prefixed with "htmlParser filter:"', function () {
    var text = 'angularjs';
    expect(htmlParser(text)).toBe('htmlParser filter: ' + text);
  });

});
