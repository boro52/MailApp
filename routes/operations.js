var express = require('express');
var router = express.Router();

router.post('/testowe', function(req, resp, next) {
    console.log(req.body);
    alert("Udalo sie");
    resp.redirect('/');
});

router.post('/addRecord', function(req, resp, next) {

});

router.post('/removeRecord', function(req, resp, next) {

});

module.exports = router;