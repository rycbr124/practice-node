var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {// users/ 로 get 요청 시
  res.send('respond with a resource');
});

module.exports = router;
