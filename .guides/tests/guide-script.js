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

TESTS.SetupButtonTest();

