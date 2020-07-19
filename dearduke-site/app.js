var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//generates captions from instamancer 
var create=require("instamancer");
const options= {
  total: 0,
  fullAPI: true
};

const data=create.createApi("user", "deardukeu",options);

(async () => {
  for await (const post of data.generator()) {  
      //prints captions from all posts. captions contained in post.shortcode_media.edge_media_to_caption.edges[0].node.text
      console.log(post.shortcode_media.edge_media_to_caption.edges[0].node.text);
  }
})();
//end generating captions



var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

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

module.exports = app;
