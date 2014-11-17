var express = require('express');
var app = express();
var chooseRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

var router = express.Router();

var answers = require('./answers.json');
router.get('/shouldi', function(req, res) {
  var answer = chooseRandom(answers);
  res.json(answer);
});

app.use(router)

app.use(function(req, res){
  res.status(404).json({ message: 'Stai cercando qualcuno? ' });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
