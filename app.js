import express from 'express';

const app=express();

app.get('/', function(req, res){
	response.send('Hello, world!');
}

var port = 5000;

app.listen(port, function(){
	console.log("listening on "+port);
});


