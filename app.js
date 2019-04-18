var createError = require('http-errors');
var express = require('express');
var io = require('socket.io')();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.socket=io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var mapSocket = io.of('/map-namespace');
var videoSocket =io.of('/videos-namespace');

mapSocket.on('connection', function(socket){
  socket.on('start canto 1', function(data){
    videoSocket.emit('start canto 1');
  });

  socket.on('start canto 5', function(data){
    videoSocket.emit('start canto 5');
  });

  socket.on('start canto 28', function(data){
    videoSocket.emit('start canto 28');
  });

  socket.on('start canto 34', function(data){
    videoSocket.emit('start canto 34');
  });

  socket.on('pause', function(data){
    videoSocket.emit('pause');
  });

})

module.exports = app;
