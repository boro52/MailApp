var express = require('express');
var router = express.Router();
var parser = require('rss-parser');
rssParser = new parser();
var array = new Array();

router.post('/testowe', function(req, resp, next) {

    ( async () => {
        const test = await rssParser.parseURL(req.body.rssUrl);

        console.log(test);
        test.items.forEach(item => { console.log(item.title + " " + item.content);  array.push(item);})
    })();
    resp.redirect('/');
});

router.post('/addRecord', function(req, resp, next) {
    //var record = { url : }
});

router.post('/removeRecord', function(req, resp, next) {

});

module.exports = router;