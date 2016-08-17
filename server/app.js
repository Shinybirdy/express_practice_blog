// var express = require('express');
// var app = express();
//
// app.get('/', function(req, res){
//   res.send('hey, there...');
// });
//
// app.listen(3000, function(){
//   console.log('Server is up on port 3000, darling...');
// });


//Server
//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// BASE SETUP
//================================================================

//call needed packages
var express = require('express');
var app = express(); //defines app using express
var bodyParser = require('body-parser');

//configure app to use bodyParser()
//this lets us get data from a POST
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//set the port
var port = process.env.PORT || 8080;

//routes for API
//=============================================================

var router = express.Router();

router.get('/', function(req, res){
  res.json({message:'hey, there...'});
});

//more API routes will go here

//REGISTER OUR ROUTES
//all routes prefixed with /API
app.use('/api', router);
app.listen(port);
console.log('Server is up on port 8080, darling...');
