var express= require('express');
var bodyParser = require('body-parser');
var server=express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });



server.set('view engine','ejs');
server.get('/',function(req,res){
res.render('contact',{qs:req.query});

});

server.get('/msg/:who/:to/:mssg',urlencodedParser, function (req, res) {
res.render('msg',{qs: req.params});
console.log(req.params.who);

});
server.post('/msg',urlencodedParser, function (req, res) {
res.render('msg',{qs: req.body});

});

server.listen(3000);
console.log('made it');
