var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.send("hello");
})
.get('/traceur',function(req,res){
	res.sendfile('./test/import.html');
});

app.listen('www.it.com',3030);