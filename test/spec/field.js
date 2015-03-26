var expect = require('chai').expect
  , percent = require('percent');

describe('Percent:', function() {

  it('should use custom property field',
    function(done) {
      expect(percent).to.be.a('function');
      var src = {a: {ratio: 0.13626332},
        b: {ratio: 0.47989636},
        c: {ratio: 0.09596008},
        d: {ratio: 0.28788024},
        e: {}};
      var res = percent(src, null, 'val');
      expect(res).to.be.an('object');
      // same objects
      expect(res).to.equal(src);
      var t = 0, value;
      var keys = Object.keys(res);
      keys.map(function(key) {
        value = res[key];
        t += value.val ? value.val : 0;
      })
      expect(t).to.eql(100);
      expect(keys).to.eql(Object.keys(src));
      done();
    }
  );

});
