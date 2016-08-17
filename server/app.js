var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hey, there...');
});

app.listen(3000, function(){
  console.log('Server is up on port 3000, darling...');
});
