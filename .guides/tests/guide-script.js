function t_io(data) {
  TESTS.SimpleOutputTest(data, [{min: 0, max: 100}], function(inp, vars) {
    return [inp[0]];
  });
}

function t_add100(data) {
  TESTS.SimpleOutputTest(data, [{min: 0, max: 100}], function(inp, vars) {
    return [inp[0] + 100];
  });
}

function t_sub(data) {
  TESTS.SimpleOutputTest(data, [{min: 0, max: 100}, {name: 'myNumber', min: 0, max: 100}], function(inp, vars) {
    var var0 = vars[0].value;
    return [inp[0] - var0];
  });
}

function t_xTimesY(data) {
  TESTS.SimpleOutputTest(data, [{min: 0, max: 100}, {min: 0, max: 100}], function(inp, vars) {
    return [inp[0] * inp[1]];
  });
}

function t_abc(data) {
  TESTS.SimpleOutputTest(data, [{min: 0, max: 100}, {min: 0, max: 100}, {min: 0, max: 100}], function(inp, vars) {
    return [inp[0] * (inp[1] + inp[2])];
  });
}

var test = false;

function waitForCrunchScript() {
  if (!window.CRUNCH_COMMON_LOADED || !test) {
    test = true;
    setTimeout(waitForCrunchScript, 100);console.log('waiting');
    return;
  }console.log('ok loaded');
  TESTS.SetupButtonTest();
}

waitForCrunchScript();

