'use strict';

describe('Service: editChennel', function () {

  // load the service's module
  beforeEach(module('publickApp'));

  // instantiate service
  var editChennel;
  beforeEach(inject(function (_editChennel_) {
    editChennel = _editChennel_;
  }));

  it('should do something', function () {
    expect(!!editChennel).toBe(true);
  });

});
