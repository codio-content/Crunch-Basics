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
        case '10-div-2.crunch':
          t_10div2(data);
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
  RunCrunch(JSON.parse(data).sourceLines, [23], [], function(res) {
    TESTS.SimpleOutputTest(res, [23], 1, 23);
  });
}

function t_add100(data) {
  var inp = TESTS.GetRandomIntegerArray(1);
  RunCrunch(JSON.parse(data).sourceLines, inp, [], function(res) {
    TESTS.SimpleOutputTest(res, inp, 1, 100 + inp[0]);
  });
}

function t_xTimesY(data) {
  var inp = TESTS.GetRandomIntegerArray(2);
  RunCrunch(JSON.parse(data).sourceLines, inp, [], function(res) {
    TESTS.SimpleOutputTest(res, inp, 1, inp[0] * inp[1]);
  });
}

function t_abc(data) {
  var inp = TESTS.GetRandomIntegerArray(3);
  RunCrunch(JSON.parse(data).sourceLines, [9, 100, 7], [], function(res) {
    TESTS.SimpleOutputTest(res, inp, 1, inp[0] * (inp[1] + inp[2]));
  });
}

function t_10div2(data) {
  var inp = TESTS.GetRandomIntegerArray(2);
  var variables = [{name: 'X', value: inp[0]}, {name: 'Y', value: inp[1]}];
  RunCrunch(JSON.parse(data).sourceLines, [], variables, function(res) {
    TESTS.SimpleOutputTest(res, variables, 1, Math.floor(inp[0] / inp[1]));
  });
}

