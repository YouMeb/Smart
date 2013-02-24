
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
app.get('/referenceitem', function(req, res) {
  res.render('referenceitem');
});
app.get('/referenceitem1', function(req, res) {
  res.render('referenceitem1');
});
app.get('/testhomepage', function(req, res) {
  res.render('testhomepage');
});
app.get('/carts', function(req, res) {
  res.render('carts');
});
app.get('/carts2', function(req, res) {
  res.render('carts2');
});
app.get('/carts3', function(req, res) {
  res.render('carts3');
});
app.get('/carts4', function(req, res) {
  res.render('carts4');
});
app.get('/carts5', function(req, res) {
  res.render('carts5');
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
