var tests = require('./testsCommon.js');

var ret = tests.SimpleOutputTest('/home/codio/workspace/public/sub.crunch', [{min: 0, max: 100}, {name: 'myNumber', min: 0, max: 100}], function(inp, vars) {
  var var0 = vars[0].value;
  return [inp[0] - var0];
});
tests.FlushOutput();

process.exit(!ret);
