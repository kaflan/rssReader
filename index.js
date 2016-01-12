var FeedParser = require('feedparser');
var request = require('request');
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var partials = require('express-partials');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public/app'));
// app.use(partials());
// app.use(bodyParser());
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


app.get('/channels/:id', function(req, res) {
  console.log('req.params.id', req.params.id, '\n');
  var index = req.params.id;
  var url = urls[index];
  console.log('channel', url['url']);
  var mainRequest = request(url['url']);
  var feedparser = new FeedParser();
  mainRequest.on('error', function(error) {
    // handle any request errors
  });
  mainRequest.on('response', function(res) {
    var stream = this;

    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

    stream.pipe(feedparser);
  });
  feedparser.on('readable', function() {
    // This is where the action is!
    var stream = this;
    var meta = this.meta
    var item;
    var arr = [];
    while (item = stream.read()) {
      arr.push(item);
      console.log(item, 'item' , '\n');
    }
      res.send(arr);
  });
});


app.get('/channels', function(req, res) {
  res.send(urls);
});

app.get('/post', function(req, res) {
  // console.log('res',res,'\n' ,'req', req);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
