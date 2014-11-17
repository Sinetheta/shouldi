var express = require('express');
var app = express();

var router = express.Router();

router.get('/shouldi', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use(router)

app.use(function(req, res){
  res.status(404).json({ message: 'Stai cercando qualcuno? ' });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
