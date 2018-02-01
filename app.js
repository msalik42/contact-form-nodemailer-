var express = require('express');
var contactController = require('./controller/contactController');

var app = express();

//setup templet engine (ejs)
app.set('view engine','ejs');

//static files
app.use(express.static('/public'));

//fire controller
contactController(app);

app.listen(3000);
console.log('listening to port number 3000');
