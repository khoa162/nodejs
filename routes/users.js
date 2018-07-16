var express = require('express');
var router = express.Router();
var db = require('mongoose');

/* GET users listing. */
router.get('/', function(request, response, next) {
  
  res.send(req.query.data);
});

module.exports = router;
