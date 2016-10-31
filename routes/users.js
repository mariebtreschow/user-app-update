const express = require('express'),
      fs = require('fs'),
      router = express.Router();


var userStore = require('./../users-store');

router.post('/', (req, res) => {
  userStore.addUser(req.body);

  res.redirect('/');
});


router.get('/', (req, res) => {
  res.render('users/new');
});


module.exports = router;
