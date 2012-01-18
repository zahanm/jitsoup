
var express = require('express');

var server = express.createServer();

server.get('/', function(req, res) {
  res.send('Hello Jitsu\'s world');
});

server.listen(80);
