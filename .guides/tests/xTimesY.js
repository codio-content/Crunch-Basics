var tests = require('./testsCommon');

var ret = tests.SimpleOutputTest('/home/codio/workspace/public/xTimesY.crunch', [{min: 0, max: 100}, {min: 0, max: 100}], function(inp, vars) {
  return [inp[0] * inp[1]];
});

process.exit(!ret);
