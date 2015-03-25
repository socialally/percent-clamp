'use strict';

function convert(map, source, range) {
  var k, o = {}, t = 0, f = [];
  for(k in map) {
    f.push({fraction: map[k].value, key: k});
    o[k] = {value: Math.floor(map[k].value * range)};
    if(map[k].key) {
      o[k].key = map[k].key;
    }
    t += o[k].value;
  }
  if(t === 0) {
    return o;
  }
  // sort from highest fraction down
  f.sort(function(a, b){ return a.fraction < b.fraction ? 1 : -1});
  var diff = range - t;
  //console.log('diff: ' + diff);
  for(var i = 0;i < Math.abs(diff);i++) {
    k = f[i].key;
    if(diff < 0) {
      o[k].value--
    }else{
      o[k].value++;
    }
  }
  return o;
}

/**
 *  Helper function to convert floating point ratios to
 *  percentage values without rounding errors.
 *
 *  @param source The source object to convert.
 *  @param range The numeric range to convert to, default is 100.
 *  @param decorate A string property name to decorate the source object
 *  with, if a truthy non-string value is used, *percent* is used as the
 *  key.
 */
function percent(source, range, decorate) {
  if(typeof source !== 'object') {
    throw new Error('Invalid percent source object');
  }
  if(decorate && typeof decorate !== 'string' || decorate === undefined) {
    decorate = 'percent';
  }
  range = Math.abs(parseInt(range || 100));
  var k, v;
  var map = {}, o = decorate ? source : ((source instanceof Array) ? [] : {});
  for(k in source) {
    v = source[k];
    if(typeof v === 'number') {
      map[k] = {value: v};
    }else if(typeof v === 'object' && typeof v.ratio === 'number') {
      map[k] = {value: v.ratio, key: 'ratio'};
    }
  }
  var res = convert(map, source, range), z;
  //console.log(res);
  //console.log(source);
  for(k in res) {
    if(!res[k].key) {
      o[k] = res[k].value;
    }else{
      o[k] = o[k] || {};
      for(z in source[k]) {
        //console.log(z);
        o[k][z] = source[k][z];
      }
      o[k][decorate ? decorate : res[k].key] = res[k].value;
    }
  }
  //console.log(o);
  return o;
}

module.exports = percent;
