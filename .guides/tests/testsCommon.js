var TESTS = {
  RESULT_BUTTON_ID: null,
  
  SimpleOutputTest: function(crunchData, inp, vars, numOutput, expected) {
    RunCrunch(JSON.parse(crunchData).sourceLines, inp, vars, function(res) {
      if (TESTS.CheckExitCode(res.exitCode) && TESTS.CheckOutput(res.outputLines, numOutput)) {
        var result = res.outputLines[0].acc;
        if (result !== expected) {
          TESTS.ShowFailWithExplanation(inp, vars, result, expected);
        } else {
          TESTS.ShowSuccess();
        }
      }
    });
  },
  
  CheckExitCode: function(exitCode) {
    switch (exitCode) {
      case 0:
        return true;
      case 1:
        TESTS.ShowFail('Unable to set the required DAT variables. Have you added them?');
        break;
      case 2:
        TESTS.ShowFail('There are more input statements in your code than expected.');
        break;
      case 3:
        TESTS.ShowFail('There are not as many input statements in your code as we expected.');
        break;
      case 4:
        TESTS.ShowFail('An error occurred during the execution of your program.');
        break;
    }
    return false;
  },
  
  CheckOutput: function(output, numLines) {
    if (output.length === 0) {
      TESTS.ShowFail('We could not find any output.');
    } else if (output.length > numLines) {
      TESTS.ShowFail('More outputs were detected than expected.');
    } else {
      return true;
    }
    return false;
  },
  
  GetRandomIntegerArray: function(length) {
    var result = [];
    for (var i = 0; i < length; ++i) {
      result.push(Math.floor(Math.random() * 1000));
    }
    return result;
  },
  
  ShowSuccess(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.SUCCESS, msg || 'Well done!!');
  },
  ShowFail(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.FAILURE, msg);
  },
  ShowFailWithExplanation(inputs, variables, result, expected) {
    var output = '';
    if (inputs.length) {
      output += 'We input ' + inputs[0];
      for (var i = 1; i < inputs.length; ++i) {
        output += ' and ' + inputs[i];
      }
      output += '.  ';
    }
    if (variables.length) {
      output += 'We set variable ' + variables[0].name + ' to ' + variables[0].value;
      for (var i = 1; i < variables.length; ++i) {
        output += ' and variable ' + variables[i].name + ' to ' + variables[i].value;
      }
      output += '.  ';
    }
    output += 'Your code output ' + result + ' instead of ' + expected + '.';
    
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.FAILURE, output);
  },
  ShowSysError(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.INVALID, msg);
  },
  ShowProgress(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.PROGRESS, msg || 'Checking...');
  }
};
