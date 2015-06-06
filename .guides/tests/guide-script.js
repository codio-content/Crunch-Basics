var gId

window.addEventListener('codio-button-custom', function (ev) {
  
  if (codio) {
    
    gId = ev.id
    cProgress('Checking')
    
    // Remove once tests are done
    cSuccess('Challenge test checks will be available before June 30th, 2015') 
    return
    
    var jqxhr = $.get(window.location.origin + ':9500/get-test-data', function(data, error) {

      // 404 Error
      if(data === '404') {
        cSysError('Unable to reach server. Please contact support@codio.com')
        return
      }      

      // Run specific test
      switch(ev.cmd) {
        case 'io':
          ret = t_io(data)
          break
      }
            
    })
    
    jqxhr.fail(function(err) {
      cSysError('Server error') 
    });   
    
  }
});


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



