var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routersCtrl/router');
var app = express();


app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname+"/public"));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(app.get('port'), function () {
	console.log('le serveur tourne sur le port 3000')
});
