var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var urls = new Array();
var rssData = new Array();
var rssDataToDisplay = new Array();
var parser = require('rss-parser');
rssParser = new parser();

var url = "mongodb://localhost:27017/test";

router.get('/',async function(req, res, next) {
    res.render('index', { title: 'Express', dataToDisplay : rssDataToDisplay, items : urls});
});

router.post('/addNewUrl', function(req, resp, next) {
    ( async () => {
        urls.push(req.body.rssUrl);
        const dataFromUrl = await rssParser.parseURL(req.body.rssUrl);
        await dataFromUrl.items.forEach(item => {rssData.push(item);})
        resp.redirect('/');
    })();
});

router.post('/displayMail', function(req, resp, next) {
    rssDataToDisplay = rssData;
    resp.redirect('/');
});

router.post('/addRecord', function(req, resp, next) {

});

router.post('/removeRecord', function(req, resp, next) {

});

module.exports = router;
