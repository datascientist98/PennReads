var express = require('express');
var routes = require('./routes/routes.js');
var app = express();
app.use(express.urlencoded());

app.get('/', routes.get_main);

app.listen(8080);
console.log('Server running on port 8080. Now open http://localhost:8080/ in your browser!');