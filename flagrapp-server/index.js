var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Twitter = require('twitter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
//Vamos criar um twitter senão cada postagem vai no meu nome
var client = new Twitter({
    "consumer_key": "ZecuEql8VjfO8JR8UgqijrdFx",
    "consumer_secret": "FR7Bwjm6QzCcL94HyoRqUasq4QPLruYUMPAYl62mMnxhu3c31P",
    "access_token_key": "177197255-UIfvD8I7aA3OPwTjIWvgISlVfhxUGoGWGrVhRlQa",
    "access_token_secret": "RlaMvDafQLZEDiCG8SbEJXYLB8dLTGbk2Tf8PsmmYjnTt"
});

var router = express.Router();

router.get('/timeline', function(req, res) {
	//screen_name=foraPT
	var params = req.query
	client.get('statuses/user_timeline', params, function(error, tweets, response){
	  if (error) {
		res.json({type:'error', message:error});
	  } else {
		res.json({type:'success', message:tweets}); 
	  }	  
	});
});

router.post('/publish', function(req, res) {
	//status=Texto que será publicado
	var params = req.query
	client.post('statuses/update', params, function(error, tweets, response){
	  if (error) {
		res.json({type:'error', message:error});
	  } else {
		res.json({type:'success', message:tweets}); 
	  }	  
	});
});

app.use('/twitter', router);
app.listen(3000);
console.log("Servidor rodando!");