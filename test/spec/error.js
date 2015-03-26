var expect = require('chai').expect
  , percent = require('percent');

describe('Percent:', function() {

  it('should throw error on invalid source object',
    function(done) {
      function fn() {
        percent('');
      }
      expect(fn).throws(Error);
      done();
    }
  );

});
