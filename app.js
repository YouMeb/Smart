
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

app.get('/', function(req, res) {
  res.render('homepage');
});
app.get('/homepage', function(req, res) {
  res.render('homepage');
});
app.get('/1_0', function(req, res) {
  res.render('1_0');
});
app.get('/6_0', function(req, res) {
  res.render('6_0');
});
app.get('/6_1', function(req, res) {
  res.render('6_1');
});
app.get('/6_2', function(req, res) {
  res.render('6_2');
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
app.get('/8', function(req, res) {
  res.render('8');
});
app.get('/10_2', function(req, res) {
  res.render('10_2');
});
app.get('/10_2_1', function(req, res) {
  res.render('10_2_1');
});
app.get('/10_3', function(req, res) {
  res.render('10_3');
});
app.get('/10_3_1', function(req, res) {
  res.render('10_3_1');
});
app.get('/10_4_1', function(req, res) {
  res.render('10_4_1');
});
app.get('/10_4_2', function(req, res) {
  res.render('10_4_2');
});
app.get('/10_4_3', function(req, res) {
  res.render('10_4_3');
});
app.get('/10_4_4', function(req, res) {
  res.render('10_4_4');
});
app.get('/10_4_5', function(req, res) {
  res.render('10_4_5');
});
app.get('/10_4_6', function(req, res) {
  res.render('10_4_6');
});
app.get('/10_5', function(req, res) {
  res.render('10_5');
});
app.get('/10_6', function(req, res) {
  res.render('10_6');
});
app.get('/10_7', function(req, res) {
  res.render('10_7');
});
app.get('/10_7_1', function(req, res) {
  res.render('10_7_1');
});
app.get('/11', function(req, res) {
  res.render('11');
});
app.get('/12_0', function(req, res) {
  res.render('12_0');
});
app.get('/404', function(req, res) {
  res.render('404');
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
app.get('/login', function(req, res) {
  res.render('login');
});
app.get('/tpl1', function(req, res) {
  res.render('tpl1');
});
app.get('/tpl2', function(req, res) {
  res.render('tpl2');
});
app.get('/tpl3', function(req, res) {
  res.render('tpl3');
});
app.get('/tpl4', function(req, res) {
  res.render('tpl4');
});
app.get('/tpl5', function(req, res) {
  res.render('tpl5');
});
app.get('/tpl6', function(req, res) {
  res.render('tpl6');
});
app.get('/tpl7', function(req, res) {
  res.render('tpl7');
});
app.get('/tpl8', function(req, res) {
  res.render('tpl8');
});
app.get('/tpl9', function(req, res) {
  res.render('tpl9');
});
app.get('/tpl10', function(req, res) {
  res.render('tpl10');
});
app.get('/1_0temp', function(req, res) {
  res.render('1_0temp');
});
app.get('/1_1temp', function(req, res) {
  res.render('1_1temp');
});
app.get('/3_0temp', function(req, res) {
  res.render('3_0temp');
});
app.get('/3_1temp', function(req, res) {
  res.render('3_1temp');
});
app.get('/4_0temp', function(req, res) {
  res.render('4_0temp');
});
app.get('/7_0testbyphil', function(req, res) {
  res.render('7_0testbyphil');
});
app.get('/testheaderpage', function(req, res) {
  res.render('testheaderpage');
});
app.get('/4_1_1temp', function(req, res) {
  res.render('4_1_1temp');
});
app.get('/4_1_2temp', function(req, res) {
  res.render('4_1_2temp');
});
app.get('/4_2temp', function(req, res) {
  res.render('4_2temp');
});
app.get('/4_2_2temp', function(req, res) {
  res.render('4_2_2temp');
});
app.get('/5_0temp', function(req, res) {
  res.render('5_0temp');
});
app.get('/4_2_1temp', function(req, res) {
  res.render('4_2_1temp');
});
app.get('/5_1temp', function(req, res) {
  res.render('5_1temp');
});
app.get('/2_0temp', function(req, res) {
  res.render('2_0temp');
});
app.get('/2_1temp', function(req, res) {
  res.render('2_1temp');
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
