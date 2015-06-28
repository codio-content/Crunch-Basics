window.addEventListener('codio-button-custom', function (ev) {
  if (codio) {
    TESTS.RESULT_BUTTON_ID = ev.id;
    
    TESTS.ShowProgress();
    
    $.get(window.location.origin + ':9500/get-crunch-file', {'file': ev.cmd}, function(data, error) {
      // 404 Error
      if (data === '404') {
        TESTS.ShowSysError('Unable to reach server. Please contact support@codio.com.');
        return;
      }
      
      // Select test
      switch (ev.cmd) {
        case 'io.crunch':
          t_io(data);
          break;
        case 'add100.crunch':
          t_add100(data);
          break;
        case 'x-times-y.crunch':
          t_xTimesY(data);
          break;
        case 'abc.crunch':
          t_abc(data);
          break;
        default:
          TESTS.ShowSysError('Test for ' + ev.cmd + ' not yet built.');
          break;
      }
    }).fail(function(err) {
      TESTS.ShowSysError('Server error: ' + err)
    });
  }
});

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

