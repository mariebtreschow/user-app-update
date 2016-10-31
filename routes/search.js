const express = require('express'),
      fs = require('fs'),
      router = express.Router(); //fråga izel om detta

var userStore = require('./../users-store');


router.get('/', (req, res) => {
  res.render('search/new');
});


router.post('/', (req, res) => {
  res.render('/search/' + req.body.query);
});

router.get('/:query', (req, res) => {
  var results = userStore.searchUsers(req.params.query);

res.render('search/show', {results: results});
});

module.exports = router;
