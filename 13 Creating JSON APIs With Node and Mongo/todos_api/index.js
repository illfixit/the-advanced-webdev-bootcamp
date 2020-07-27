var express = require('express'),
  app = express();

app.get('/', function (req, res) {
  res.send('HI THERE FROM EXPRESS!!!');
});

app.get('/happy', function (req, res) {
  res.send(':)');
});

var process = {};
process.env = { PORT: 5500 };

app.listen(process.env.PORT, function () {
  console.log('Hello World!', process.env.PORT);
});
