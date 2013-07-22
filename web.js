var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
var buf = new Buffer(256);
var datafile = "index.html";
buf = fs.readFileSync (datafile);
text = buf.toString();
response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
