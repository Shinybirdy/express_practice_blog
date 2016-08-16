var express = require('express');
var app = express();

// app.get('/', function(request, response) {
//     response.send("This would be some HTML");
// });

app.get('/', function(req, res) {
    res.sendFile('np./views/index.html');
});

app.get('/about', function(req, res) {
    res.sendFile('./public/views/about.html');
});

app.get('/article', function(req, res) {
    res.sendFile('./public/views/article.html');
});
app.listen(3000);
