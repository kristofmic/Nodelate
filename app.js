var
  config = require('./config'),
  express = require('express'),
  path = require('path'),
  favicon = require('static-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),

  routes = require('./routes'),
  errors = require('./errors'),

  app = express();

// db setup
mongoose.connect(process.env.DB_CONNECTION);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

routes(app);
errors(app);

module.exports = app;
