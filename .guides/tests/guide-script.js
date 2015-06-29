function t_io(data) {
  var inp = TESTS.GetRandomIntegerArray(1);
  TESTS.SimpleOutputTest(data, inp, [], inp);
}

function t_add100(data) {
  var inp = TESTS.GetRandomIntegerArray(1);
  TESTS.SimpleOutputTest(data, inp, [], [100 + inp[0]]);
}

function t_xTimesY(data) {
  var inp = TESTS.GetRandomIntegerArray(2);
  TESTS.SimpleOutputTest(data, inp, [], [inp[0] * inp[1]]);
}

function t_abc(data) {
  var inp = TESTS.GetRandomIntegerArray(3);
  TESTS.SimpleOutputTest(data, inp, [], [inp[0] * (inp[1] + inp[2])]);
}

TESTS.SetupButtonTest();

