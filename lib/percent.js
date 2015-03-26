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
 *  This method modifies the existing source object in place adding a
 *  *percent* field to the nested objects based on the values either numbers
 *  of and object with a *ratio* field.
 *
 *  This method does not recurse, only top-level fields are used.
 *
 *  Pass arrays of numbers:
 *
 *  ```
 *  percent([0.33,0.33,0.33]);
 *  ```
 *
 *  Or objects with a ratio field:
 *
 *  ```
 *  percent({a:{ratio: 0.33}, b: {ratio: 0.33}, c: {ratio: 0.33}});
 *  ```
 *
 *  @param source The source object to convert.
 *  @param range The numeric range to convert to, default is 100.
 *  @param field A field used to decorate the source object,
 *  default is *percent*.
 */
function percent(source, range, field) {
  if(typeof source !== 'object') {
    throw new Error('Invalid percent source object');
  }
  console.log('field: ' + field);
  if(field && typeof field !== 'string' || field === undefined) {
    field = 'percent';
  }
  range = Math.abs(parseInt(range || 100));
  var k, v, res, map = {}, o = source;
  // build intermediary map of values to pass to convert()
  for(k in source) {
    v = source[k];
    if(typeof v === 'number') {
      map[k] = {value: v};
    }else if(typeof v === 'object' && typeof v.ratio === 'number') {
      map[k] = {value: v.ratio, key: 'ratio'};
    }
  }
  res = convert(map, source, range);
  // re-assign to source object from conversion result
  for(k in res) {
    if(!res[k].key) {
      o[k] = res[k].value;
    }else{
      o[k][field] = res[k].value;
    }
  }
  return o;
}

module.exports = percent;
