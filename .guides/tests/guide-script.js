var gId

window.addEventListener('codio-button-custom', function (ev) {
  
  if (codio) {
    
    gId = ev.id
    cProgress('Checking')

    
    var jqxhr = $.get(window.location.origin + ':9500/get-crunch-file', {'file': ev.cmd}, function(data, error) {

      // 404 Error
      if(data === '404') {
        cSysError('Unable to reach server. Please contact support@codio.com')
        return
      }      

     
      // Select test
      switch(ev.cmd) {
        case 'io.crunch':
          t_io(data)
          break
        case 'add100.crunch':
          t_add100(data)
          break        
        case '10-div-2.crunch':
          t_10div2(data)
          break           
        default:
          cSysError('test for ' + ev.cmd + ' not yet built.')          
          break
      }
      
                  
    })
    
    jqxhr.fail(function(err) {
      cSysError('Server error') 
    })   
    
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
    switch (res.exitCode) {
      case 0:
        if(res.outputLines.length == 0) {
          cFail('We could not find any output')
        }
        else if (res.outputLines.length > 1) {
          cFail('More outputs were detected than expected') 
        }
        else if (res.outputLines[0].acc != 23) {
          cFail ('We input 23 but your code output ' + res.outputLines[0].acc + ' instead of 23')
        }
        else {
          cSuccess('Well done!!')
        }
        break
      case 1:
        cFail('Unable to set the required DAT variables. Have you added them?')
        break
      case 2:
        cFail('There are more input statements in your code than expected.')
        break
      case 3:
        cFail('There are not as many input statements in your code as we expected.')
        break
    }
    return
  })
  
}

//
// add100.crunch
//

function t_add100(data) {

  RunCrunch(JSON.parse(data).sourceLines, [100], [], function(res) {
    switch (res.exitCode) {
      case 0:
        if(res.outputLines.length == 0) {
          cFail('We could not find any output')
        }
        else if (res.outputLines.length > 1) {
          cFail('More outputs were detected than expected') 
        }
        else if (res.outputLines[0].acc != 200) {
          cFail ('We input 100 but your code output ' + res.outputLines[0].acc + ' instead of 200')
        }
        else {
          cSuccess('Well done!!')
        }
        break
      case 1:
        cFail('Unable to set the required DAT variables. Have you added X and Y (not x and y)?')
        break
      case 2:
        cFail('There are more input statements in your code than expected.')
        break
      case 3:
        cFail('There are not as many input statements in your code as we expected.')
        break
    }
    return
  })
  
}

//
// add100.crunch
//

function t_10div2(data) {

  RunCrunch(JSON.parse(data).sourceLines, [], [{'name': 'X', 'value': 101}, {'name': 'Y', 'value': 4}], function(res) {
    switch (res.exitCode) {
      case 0:
        if(res.outputLines.length == 0) {
          cFail('We could not find any output')
        }
        else if (res.outputLines.length > 1) {
          cFail('More outputs were detected than expected') 
        }
        else if (res.outputLines[0].acc != 25) {
          cFail ('We input X=101 and Y=4 but your code output ' + res.outputLines[0].acc + ' instead of 25')
        }
        else {
          cSuccess('Well done!!')
        }
        break
      case 1:
        cFail('Unable to set the required DAT variables. Have you added them?')
        break
      case 2:
        cFail('There are more input statements in your code than expected.')
        break
      case 3:
        cFail('There are not as many input statements in your code as we expected.')
        break
    }
    return
  })
  
}


//////////////////////////////////////////
// Utility Functions for icons and messages
//////////////////////////////////////////

function cSuccess(msg) {
    codio.setButtonValue(gId, codio.BUTTON_STATE.SUCCESS, msg)
}

function cFail(msg) {
  codio.setButtonValue(gId, codio.BUTTON_STATE.FAILURE, msg)
}

function cSysError(msg) {
  codio.setButtonValue(gId, codio.BUTTON_STATE.INVALID, msg)
}

function cProgress(msg) {
  codio.setButtonValue(gId, codio.BUTTON_STATE.PROGRESS, msg)
}



