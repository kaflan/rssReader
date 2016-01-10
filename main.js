var feedparser = require('ortoo-feedparser');
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var partials = require('express-partials');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(partials());
app.use(bodyParser());
app.use(methodOverride());
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/app/index.html');
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
