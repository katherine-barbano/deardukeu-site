var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// //generates captions from instamancer 
// var create=require("instamancer");

// const options= {
//   total: 0,
//   fullAPI: true
// };

// const dataDuke=create.createApi("user", "deardukeu",options);
// const dataUNC=create.createApi("user", "dearunc",options);
// const dataNCSU=create.createApi("user","dearncsu",options);
// const dataAbolishDuke=create.createApi("user","abolishdukeifcandpanhellenic",options);

// var maxPostDuke="";
// var maxLikesDuke=0;
// var maxPostUNC="";
// var maxLikesUNC=0;
// var maxPostNCSU="";
// var maxLikesNCSU=0;

// captions=[];

// (async () => {
//   for await (const post of dataDuke.generator()) {  
//       //prints captions from all posts. captions contained in post.shortcode_media.edge_media_to_caption.edges[0].node.text
//       var count=post.shortcode_media.edge_media_preview_like.count;
//       var caption=post.shortcode_media.edge_media_to_caption.edges[0].node.text;
//       captions.push(caption);
//       if(count>maxLikesDuke)
//       {
//         maxPostDuke=caption;
//         maxLikesDuke=count;
//       }
//   }
//   for await (const post of dataUNC.generator()) {  
//     //prints captions from all posts. captions contained in post.shortcode_media.edge_media_to_caption.edges[0].node.text
//     //console.log(post.shortcode_media.edge_media_to_caption.edges[0].node.text);
//     var count=post.shortcode_media.edge_media_preview_like.count;
//     var caption=post.shortcode_media.edge_media_to_caption.edges[0].node.text;
//     captions.push(caption);
//     if(count>maxLikesUNC)
//     {
//       maxPostUNC=caption;
//       maxLikesUNC=count;
//     }
// }
// for await (const post of dataNCSU.generator()) {  
//   //prints captions from all posts. captions contained in post.shortcode_media.edge_media_to_caption.edges[0].node.text
//   //console.log(post.shortcode_media.edge_media_to_caption.edges[0].node.text);
//   var count=post.shortcode_media.edge_media_preview_like.count;
//   var caption=post.shortcode_media.edge_media_to_caption.edges[0].node.text;
//   captions.push(caption);
//   if(count>maxLikesNCSU)
//   {
//     maxPostNCSU=caption;
//     maxLikesNCSU=count;
//   }
// }
// for await (const post of dataAbolishDuke.generator()) {  
//   //prints captions from all posts. captions contained in post.shortcode_media.edge_media_to_caption.edges[0].node.text
//   //console.log(post.shortcode_media.edge_media_to_caption.edges[0].node.text);
//   captions.push(post.shortcode_media.edge_media_to_caption.edges[0].node.text);
// }
// })();


//end generating captions

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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
