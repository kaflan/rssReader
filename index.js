var feedparser = require('ortoo-feedparser');
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var partials = require('express-partials');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/app'));
app.use(partials());
app.use(bodyParser());
app.use(methodOverride());
var urls = [{
  name: 'CNN',
  url: 'http://rss.cnn.com/rss/cnn_topstories.rss'
}, {
  name: 'CNN2',
  url: 'http://rss.cnn.com/rss/cnn_topstories.rss'
}];
app.delete('/delete/:index', function(req, res) {
  var index = req.params.index;
  urls.splice(index, 1);
  res.send(urls);
});

app.put('/put/:index', function(req, res) {
  console.log('put', req.body, '\n', req.params.index);
  var index = req.params.index;
  var data = req.body;
  urls[index] = data;
  console.log(urls);
  res.send(urls);
});


app.get('/channels', function(req, res) {
  console.log('send data', urls);
  res.send(urls);
})

app.get('/channels/:id', function(req, res) {
  console.log('req.params.id', req.params.id, '\n');
  var index = req.params.id;
  var url = urls[index];
  console.log('channel', url['url']);
  feedparser.parseUrl(url).on('article', function(article){
    console.log(article, 'article');
    res.send(article);
  });
})

app.get('/post', function(req, res) {
  // console.log('res',res,'\n' ,'req', req);
});

// app.get('*', function(req, res) {
//   res.sendFile(__dirname + '/public/app/index.html');
// });
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
