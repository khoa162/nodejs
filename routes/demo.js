var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const datastore = require('../database/mongoose');
const models = require('../database');
datastore.mongodb(mongoose);
const DataTransfer = mongoose.model('DataTransfer');
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.distance);
  DataTransfer.dataTransfer(parseInt(req.query.distance)).then(rs => {	  
	  res.success = 'true';
	  res.status(200).json(rs)
  }) 
});

module.exports = router;
