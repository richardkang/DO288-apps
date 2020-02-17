var express = require('express');
app = express();
var msg = process.env.APP_MSG;
app.get('/', function (req, res) {
  res.send('Hello World! '+msg+' \n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

