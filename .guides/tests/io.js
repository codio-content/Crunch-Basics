var tests = require('./testsCommon');

var ret = tests.SimpleOutputTest('/home/codio/workspace/public/io.crunch', [{min: 0, max: 100}], function(inp, vars) {
  return [inp[0]];
});

process.exit(!ret);
