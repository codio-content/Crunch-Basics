
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// Play a sound command
router.get('/get-test-data', function(req, res) {

  fs.readFile('/home/codio/workspace/test-data.json', 'utf8', function (err, data) {
    if (err) {
      console.log('Cannot access file')
    }
    else {
      console.log('OK:' + data)
      res.send(data)
    }
  })
  
  
});


module.exports = router;
