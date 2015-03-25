var expect = require('chai').expect
  , percent = require('percent');

describe('Percent:', function() {

  it('should convert zero values (array of numbers)',
    function(done) {
      expect(percent).to.be.a('function');
      var src = [0, 0, 0];
      var res = percent(src);
      expect(res).to.be.an('array');
      expect(res).to.equal(src);
      var t = 0;
      res.map(function(value) {
        t += value;
      })
      expect(t).to.eql(0);
      done();
    }
  );

  it('should convert equal percentage ratios (array of numbers)',
    function(done) {
      expect(percent).to.be.a('function');
      var src = [0.333, 0.333, 0.333];
      var res = percent(src);
      expect(res).to.be.an('array');
      expect(res).to.equal(src);
      var t = 0;
      res.map(function(value) {
        t += value;
      })
      expect(t).to.eql(100);
      done();
    }
  );

  it('should convert to alternative range (array of numbers)',
    function(done) {
      expect(percent).to.be.a('function');
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

  it('should convert percentage ratios (array of objects)',
    function(done) {
      expect(percent).to.be.a('function');
      var src = [{ratio: 0.13626332, category: 'a'},
        {ratio: 0.47989636, category: 'b'},
        {ratio: 0.09596008, category: 'c'},
        {ratio: 0.28788024, category: 'd'}];
      var res = percent(src);
      expect(res).to.be.an('array');
      expect(res).to.equal(src);
      var t = 0;
      res.map(function(value) {
        t += value.ratio;
      })
      expect(t).to.eql(1);
      // check extraneous properties
      for(var i = 0;i < res.length;i++) {
        expect(res[i].category).to.eql(src[i].category);
      }
      done();
    }
  );

  it('should convert percentage ratios (object of objects)',
    function(done) {
      expect(percent).to.be.a('function');
      var src = {a: {ratio: 0.13626332},
        b: {ratio: 0.47989636},
        c: {ratio: 0.09596008},
        d: {ratio: 0.28788024}};
      var res = percent(src);
      expect(res).to.be.an('object');
      expect(res).to.equal(src);
      var t = 0, value;
      var keys = Object.keys(res);
      keys.map(function(key) {
        value = res[key];
        t += value.ratio;
      })
      expect(t).to.eql(1);
      expect(keys).to.eql(Object.keys(src));
      done();
    }
  );

  it('should decorate existing source (object of objects)',
    function(done) {
      expect(percent).to.be.a('function');
      var src = {a: {ratio: 0.13626332},
        b: {ratio: 0.47989636},
        c: {ratio: 0.09596008},
        d: {ratio: 0.28788024}};
      var res = percent(src, null, true);
      expect(res).to.be.an('object');
      // same objects
      expect(res).to.equal(src);
      //console.log(res);
      var t = 0, value;
      var keys = Object.keys(res);
      keys.map(function(key) {
        value = res[key];
        t += value.percent;
      })
      expect(t).to.eql(100);
      expect(keys).to.eql(Object.keys(src));
      done();
    }
  );

  it('should constrain to 100 from 101 (array of objects)',
    function(done) {
      var src = [
        {
          "count": 10,
          "ratio": 0.63,
          "key": 1
        },
        {
          "count": 6,
          "ratio": 0.38,
          "key": 2
        }
      ];
      var res = percent(src, null, true);
      // same objects
      expect(res).to.equal(src);
      var t = 0, value;
      res.forEach(function(item) {
        t += item.percent;
      })
      expect(t).to.eql(100);
      done();
    }
  );

  it('should constrain to 100 from 98 (array of objects)',
    function(done) {
      var src = [
        {
          "count": 10,
          "ratio": 0.62,
          "key": 1
        },
        {
          "count": 6,
          "ratio": 0.36,
          "key": 2
        }
      ];
      var res = percent(src, null, true);
      // same objects
      expect(res).to.equal(src);
      var t = 0, value;
      res.forEach(function(item) {
        t += item.percent;
      })
      expect(t).to.eql(100);
      done();
    }
  );

});
