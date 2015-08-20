var tests = require('./testsCommon');

var ret = tests.SimpleOutputTest('/home/codio/workspace/public/add100.crunch', [{min: 0, max: 100}], function(inp, vars) {
  return [inp[0] + 100];
});
tests.FlushOutput();

process.exit(!ret);
