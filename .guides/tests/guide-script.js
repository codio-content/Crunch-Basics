window.addEventListener('codio-button-custom', function (ev) {
  if (codio) {
    TESTS.RESULT_BUTTON_ID = ev.id;
    
    TESTS.ShowProgress();
    
    $.get(window.location.origin + ':9500/get-crunch-file', {'file': ev.cmd}, function(data, error) {
      // 404 Error
      if (data === '404') {
        TESTS.ShowSysError('Unable to reach server. Please contact support@codio.com');
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

/////////////////
// Tests
/////////////////

//
// io.crunch
//

function t_io(data) {
  RunCrunch(JSON.parse(data).sourceLines, [23], [], function(res) {
    TESTS.CommonTest(res, function() {
      if (TESTS.CheckOutput(res.outputLines, 1)) {
        if (res.outputLines[0].acc !== 23) {
          TESTS.ShowFail('We input 23 but your code output ' + res.outputLines[0].acc + ' instead of 23');
        } else {
          TESTS.ShowSuccess();
        }
      }
    });
  });
}

//
// add100.crunch
//

function t_add100(data) {
  RunCrunch(JSON.parse(data).sourceLines, [100], [], function(res) {
    TESTS.CommonTest(res, function() {
      if (TESTS.CheckOutput(res.outputLines, 1)) {
        if (res.outputLines[0].acc !== 200) {
          TESTS.ShowFail('We input 100 but your code output ' + res.outputLines[0].acc + ' instead of 200');
        } else {
          TESTS.ShowSuccess();
        }
      }
    });
  });
}

//
// add100.crunch
//

function t_10div2(data) {
  RunCrunch(JSON.parse(data).sourceLines, [], [{'name': 'X', 'value': 101}, {'name': 'Y', 'value': 4}], function(res) {
    TESTS.CommonTest(res, function() {
      if (TESTS.CheckOutput(res.outputLines, 1)) {
        if (res.outputLines[0].acc !== 25) {
          TESTS.ShowFail('We input X=101 and Y=4 but your code output ' + res.outputLines[0].acc + ' instead of 25');
        } else {
          TESTS.ShowSuccess();
        }
      }
    });
  });
}

