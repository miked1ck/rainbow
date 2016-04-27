var express = require('express');
var app = express();

// Serve static shit
app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/components/'));
app.get("/", function(req, res) {
   res.sendfile('./src/index.html')
});

// Run it
app.listen(8080, function () {
  console.log('Rainbow server is listening at http://localhost:8080');
});
