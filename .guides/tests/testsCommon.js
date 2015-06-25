var TESTS = {
  RESULT_BUTTON_ID: null,
  
  SimpleOutputTest: function(crunchData, inp, numOutput, expected) {
    switch (crunchData.exitCode) {
      case 0:
        if (TESTS.CheckOutput(crunchData.outputLines, numOutput)) {
          var result = crunchData.outputLines[0].acc;
          if (result !== expected) {
            if (typeof inp[0] === 'Number') {
              TESTS.ShowFailWithInputExplanation(inp, result, expected);
            } else {
              TESTS.ShowFailWithVariableExplanation(inp, result, expected);
            }
          } else {
            TESTS.ShowSuccess();
          }
        }
        break;
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
  ShowFailWithInputExplanation(inputs, result, expected) {
    var output = 'We input ' + inp[0];
    for (var i = 1; i < inputs.length; ++i) {
      output += ' and ' + inp[i];
    }
    output += ' but your code output ' + result + ' instead of ' + expected + '.';
    
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.FAILURE, output);
  },
  ShowFailWithVariableExplanation(variables, result, expected) {
    var output = 'We set variable ' + variable[0].name + ' to ' + variable[0].value;
    for (var i = 1; i < variables.length; ++i) {
      output += ' and variable ' + variable[i].name + ' to ' + variable[i].value;
    }
    output += ' but your code output ' + result + ' instead of ' + expected + '.';
    
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.FAILURE, output);
  },
  ShowSysError(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.INVALID, msg);
  },
  ShowProgress(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.PROGRESS, msg || 'Checking...');
  }
};
