var express = require('express');
var routes = require('./routes/index');
var path = require('path');
//var router = express.Router();

var bodyParser = require('body-parser');
var cookiePrser = require('cookie-parser');

var app = express();

app.set('port',process.env.PORT||3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use(bodyParser.json());

app.get('/', routes);

app.use(function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function(){
	console.log('Express server listen : http://localhose:'+app.get('port'));
});


