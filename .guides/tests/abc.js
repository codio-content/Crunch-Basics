var tests = require('./testsCommon');

var ret = tests.SimpleOutputTest('/home/codio/workspace/public/abc.crunch',
  [{min: 0, max: 100, name: 'A'}, {min: 0, max: 100, name: 'B'}, {min: 0, max: 100, name: 'C'}],
  function(inp, vars) {
    return [vars[0].value * (vars[1].value + vars[2].value)];
  }
);
tests.FlushOutput();

process.exit(!ret);