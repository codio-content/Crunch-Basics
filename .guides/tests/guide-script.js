
window.addEventListener('codio-button-custom', function (ev) {
  
  if (codio) {
    codio.setButtonValue(ev.id, codio.BUTTON_STATE.PROGRESS, 'Checking');
    
    var jqxhr = $.get(window.location.origin + ':9500/' + ev.cmd, function(data, error) {
      
      console.log("Data:" + data);

      // 404 Error
      if(data === '404') {
        codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, 'Unable to locate test on server');
        return
      }      
      
      // System Error
      if(data.sysError) {
        codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, data.msg);        
        return
      }
      // Success     
      if(data.success) {
        codio.setButtonValue(ev.id, codio.BUTTON_STATE.SUCCESS, data.msg);
        return
      }
      // Failed Test
      if(!data.success) {
        codio.setButtonValue(ev.id, codio.BUTTON_STATE.FAILURE, data.msg);
        return
      }
      
    });
    
    jqxhr.fail(function() {
      codio.setButtonValue(ev.id, codio.BUTTON_STATE.INVALID, 'Server error'); 
    });    
    
  }
});

