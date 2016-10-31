const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      pug = require('pug'),
      fs = require('fs');


const userRoutes = require('./routes/users'),
      searchRoutes = require('./routes/search');

var app = express(),
    userStore = require('./users-store');

app.set('view engine', 'pug');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/search', searchRoutes);

app.get('/', (req, res) => {
  res.render('users/index', { users: userStore.getUser() })
});

app.listen(3000, () => {
  console.log('User App update is running on port 3000!!!!!!');
});
