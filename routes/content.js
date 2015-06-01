
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// Play a sound command
router.get('/c1', function(req, res) {
  var data = {}
  data.success = true
  data.msg = 'Well done!!'
  console.log(data)
  res.send (data)
});


module.exports = router;
