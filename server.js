var express = require('express');
var app = express();
var chooseRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

//Our single endpoint
var router = express.Router();
var answers = require('./answers.json');
router.get('/shouldi', function(req, res) {
  var answer = chooseRandom(answers);
  res.json(answer);
});
app.use(router)

//404 any other requests
app.use(function(req, res){
  res.status(404).json({ message: 'Stai cercando qualcuno? ' });
});

//Fire up server
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
