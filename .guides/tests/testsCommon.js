var TESTS = {
  RESULT_BUTTON_ID: null,
  
  CommonTest: function(result, successCallback) {
    switch (result.exitCode) {
      case 0:
        successCallback();
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
  
  ShowSuccess(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.SUCCESS, msg || 'Well done!!');
  },
  ShowFail(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.FAILURE, msg);
  },
  ShowSysError(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.INVALID, msg);
  },
  ShowProgress(msg) {
    codio.setButtonValue(TESTS.RESULT_BUTTON_ID, codio.BUTTON_STATE.PROGRESS, msg || 'Checking...');
  }
};
