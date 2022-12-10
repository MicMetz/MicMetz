var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();


var indexRouter   = require('./routes/index');
var usersRouter   = require('./routes/users');
const helmet      = require("helmet");
const compression = require("compression");

var app = express();
app.use(helmet());
app.use(compression()); // Compress all routes

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const dev_db_url =
          "mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true";
const mongoDB = process.env.MONGODB_URI || dev_db_url;


function compileEjsTemplate(name, template) {
    const compiledTemplate = ejs.compile(template, {
        client: true,
        outputFunctionName: name
    });
    return function compileEjsTemplate(req, res, next) {
        res.locals.compiledEjsTemplates = res.locals.compiledEjsTemplates || {};
        res.locals.compiledEjsTemplates[name] = compiledTemplate.toString();
        return next();
    };
}



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
