var express = require('express');
var app = express();

var router = express.Router();

router.get('/shouldi', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use(router)

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic happens on port ' + port);
