var express = require('express')
  , routes  = require('./routes');
  
var app = express();
var oneDay = 86400000;

app.use(express.compress());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.set('view engine', 'hbs');

app.get('/', routes.index);

app.listen(3000);
