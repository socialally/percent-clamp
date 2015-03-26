var expect = require('chai').expect
  , percent = require('percent');

describe('Percent:', function() {

  it('should convert using alternative range',
    function(done) {
      var src = [0.333, 0.333, 0.333];
      var res = percent(src, 50);
      expect(res).to.be.an('array');
      expect(res).to.equal(src);
      var t = 0;
      res.map(function(value) {
        t += value;
      })
      expect(t).to.eql(50);
      done();
    }
  );

});
