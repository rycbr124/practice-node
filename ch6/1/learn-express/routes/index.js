var express = require('express');
var router = express.Router();//라우터 객체

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//클라이언트 응답
});
//next('route') : 라우터에서만 동작,라우터에 연결된 나머지 미들웨어 건너뛰기
// /users/:id : /users/1, users/123 등의 요청시 req.params 객체 안에 담김 ex) req.params.id=123
//와일드 카드 역할이라 일반 라우터보다 뒤에 위치해야 한다.

module.exports = router;
