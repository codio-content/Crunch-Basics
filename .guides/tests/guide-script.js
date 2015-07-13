var tests = null;

function t_io(data) {
  tests.SimpleOutputTest(data, [{min: 0, max: 100}], function(inp, vars) {
    return [inp[0]];
  });
}

function t_add100(data) {
  tests.SimpleOutputTest(data, [{min: 0, max: 100}], function(inp, vars) {
    return [inp[0] + 100];
  });
}

function t_sub(data) {
  tests.SimpleOutputTest(data, [{min: 0, max: 100}, {name: 'myNumber', min: 0, max: 100}], function(inp, vars) {
    var var0 = vars[0].value;
    return [inp[0] - var0];
  });
}

function t_xTimesY(data) {
  tests.SimpleOutputTest(data, [{min: 0, max: 100}, {min: 0, max: 100}], function(inp, vars) {
    return [inp[0] * inp[1]];
  });
}

function t_abc(data) {
  tests.SimpleOutputTest(data,
    [{min: 0, max: 100, name: 'A'}, {min: 0, max: 100, name: 'B'}, {min: 0, max: 100, name: 'C'}],
    function(inp, vars) {
      return [vars[0].value * (vars[1].value + vars[2].value)];
    });
}

function waitForCrunchScript() {
  if (!window.TESTS_COMMON) {
    setTimeout(waitForCrunchScript, 100);
    return;
  }
  tests = window.TESTS_COMMON;
  tests.SetupButtonTest();
}

waitForCrunchScript();

