var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! This is the Node App!');
});
app.listen(8080, function () {
});
