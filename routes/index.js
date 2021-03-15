var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

var url = "mongodb://localhost:27017/test";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-data', function (req, resp, next) {

});

router.post('/testowe', function(req, resp, next) {
  console.log(req.body);
  resp.send(req.body.fname);
});

router.post('/insert', function(req, resp, next) {

});

router.post('/insert', function(req, resp, next) {

});

module.exports = router;
