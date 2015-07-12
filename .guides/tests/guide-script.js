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
  tests.SimpleOutputTest(data, [{min: 0, max: 100}, {min: 0, max: 100}, {min: 0, max: 100}], function(inp, vars) {
    return [inp[0] * (inp[1] + inp[2])];
  });
}

function waitForCrunchScript() {
  if (!window.TESTS_COMMON_LOADED) {
    setTimeout(waitForCrunchScript, 100);
    return;
  }
  tests.SetupButtonTest();
}

waitForCrunchScript();

