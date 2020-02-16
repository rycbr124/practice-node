var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');//cookie-parser와 express-session 사용, 뒤에 위치해야 함

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();//express 패키지 호출,해당 변수에 각종 기능 연결

//set 메서드 활용, 익스프레스 앱 설정
// view engine setup
app.set('views', path.join(__dirname, 'views'));//res.render메서드의 기준 폴더
app.set('view engine', 'pug');

//커스텀 미들웨어
app.use(function(req,res,next){
  console.log(req.url,'저도 미들웨어입니다');
  next();//미들웨어 안에서 반드시 호출해줘야 다음 미들웨어로 넘어간다.
});
//

app.use(logger('dev'));//short,dev : 개발시, common,combined : 배포시
app.use(express.static(path.join(__dirname, 'public')));//정적 파일 제공,최대한 위쪽에 배치해서 쓸데없는 미들웨어 작업 방지
app.use(express.json());//JSON형식
app.use(express.urlencoded({ extended: false }));//주소 형식으로 데이터 전송
//extended false : querystring모듈 사용, true : qs 모듈 사용(내장x,npm 패키지)
app.use(cookieParser('secret code'));//해석된 쿠키들은 req.cookies객체에 담김
//cookieParser('문자열') : 문자열을 키로 사용해서 서명된(암호화된) 쿠키 복호화

//express-session 연결
//인자로 세션에 대한 설정을 받음
//req 객체 안에 req.express 객체 생성
//req.session.destroy() : 세션 한번에 삭제
//req.sessionID : 현재 세션 ID
app.use(session({
  resave:false,//요청이 왔을 때 수정사항과 상관없이 세션을 다시 저장할지 여부
  saveUninitialized:false, //세션에 저장할 내역이 없더라도 세션을 다시 저장할지
  secret:'secret code', //cookie-parser의 비밀키,필수항목,cookieParser의 비밀키와 같게 설정
  cookie:{//세션쿠키 설정
    httpOnly:true,//클라이언트에서 쿠키를 확인하지 못하도록 하는 코드
    secure:false,//https가 아닌 환경에서 사용가능
  },
}));

//connect-flash
app.use(flash());

//라우팅 미들웨어
//첫 번째 인자로 특정 주소를 받음
app.use('/', indexRouter);
app.use('/users', usersRouter);
//use 대신 get,post,put,patch,delete 사용가능
/**
 * app.get('/',function(req,res,next){
 *  console.log('GET 메서드 / 주소 요청시에 실행')
 *  next();
 * })
 * app.post ...
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//일반적으로 미들웨어 중 제일 아래에
//에러 핸들링 미들웨어를 추가하지 않으면 익스프레스가 자체적으로 에러 처리
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //req.app.get(키) : app객체 접근해서 set한 값 가져오기

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;//app 모듈화
