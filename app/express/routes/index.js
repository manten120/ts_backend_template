var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('routes/index');
});

module.exports = router;
