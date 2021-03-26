var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var array = new Array();
var parser = require('rss-parser');
rssParser = new parser();

var url = "mongodb://localhost:27017/test";

/* GET home page. */
router.get('/',async function(req, res, next) {

    const fun = async function(){ res.render('index', { title: 'Express', tasks : array}); };
  // const printPage = async () =>
  //     (
  //       new Promise((resolve, reject) =>
  //       {
  //         res.render('index', { title: 'Express' });
  //         //resolve();
  //       })
  //     )
    //odpytaj baze danych
    //printpage(dane)
  await fun();

});

router.post('/testowe', function(req, resp, next) {

    ( async () => {
        const test = await rssParser.parseURL(req.body.rssUrl);

        console.log(test);
        test.items.forEach(item => { console.log(item.title + " " + item.content);  array.push(item);})
    })();
    //().then(()=>{resp.redirect('/');});
    resp.redirect('/');
});

router.post('/addRecord', function(req, resp, next) {
    //var record = { url : }
});

router.post('/removeRecord', function(req, resp, next) {

});

module.exports = router;
