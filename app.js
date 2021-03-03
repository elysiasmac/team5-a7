
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);

//login route
app.get('/', function (req, res) {
  res.render("index");
});

//login route 
app.get('/index', function (req, res) {
  res.render("index");
});

// homepage
app.get('/homepage', function (req, res) {
  res.render("homepage");
});

//current session route 
app.get('/currentsession', function (req, res) {
  res.render('currentsession');
});

//past session selector route
app.get('/pastsession_selector', function (req, res) {
  res.render('pastsession_selector');
});

//past session overview route
app.get('/pastsession_overview', function (req, res) {
  res.render('pastsession_overview');
});

//past session details route
app.get('/pastsession_details', function (req, res) {
  res.render('pastsession_details');
});

//reflections route
app.get('/reflections', function (req, res) {
  res.render('reflections');
});

//sessionsummary route
app.get('/sessionsummary', function (req, res) {
  res.render('sessionsummary');
});

//insights route
app.get('/insights', function (req, res) {
  res.render('insights');
});

//timer route
app.get('/timer', function (req, res) {
  res.render('timer');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
