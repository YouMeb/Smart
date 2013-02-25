
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/homepage', function(req, res) {
  res.render('homepage');
});
app.get('/7_0', function(req, res) {
  res.render('7_0');
});
app.get('/7_1', function(req, res) {
  res.render('7_1');
});
app.get('/7_2', function(req, res) {
  res.render('7_2');
});
app.get('/testhomepage', function(req, res) {
  res.render('testhomepage');
});
app.get('/9_0carts', function(req, res) {
  res.render('9_0carts');
});
app.get('/9_4carts2', function(req, res) {
  res.render('9_4carts2');
});
app.get('/9_2carts3', function(req, res) {
  res.render('9_2carts3');
});
app.get('/9_3carts4', function(req, res) {
  res.render('9_3carts4');
});
app.get('/9_1carts5', function(req, res) {
  res.render('9_1carts5');
});
app.get('/9_5carts_bonus2', function(req, res) {
  res.render('9_5carts_bonus2');
});
app.get('/9_6carts_bonus3', function(req, res) {
  res.render('9_6carts_bonus3');
});


app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
