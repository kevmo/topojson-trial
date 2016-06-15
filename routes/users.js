var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/countries/:country', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
