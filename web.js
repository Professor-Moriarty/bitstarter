var express    = require('express');

var app        = express.createServer(express.logger());

var fs         = require('fs');
var infile     = "index.html";
var filebuffer = fs.readFileSync(infile);
var filestr    = filebuffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(filestr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
