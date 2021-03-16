var express = require('express');
var router = express.Router();
var mongo = require('mongodb');

var url = "mongodb://localhost:27017/test";

/* GET home page. */
router.get('/', async function(req, res, next) {

  const printPage = async () =>
      (
        new Promise((resolve, reject) =>
        {
          res.render('index', { title: 'Express' });
          //resolve();
        })
      )
  await printPage();

});

module.exports = router;
