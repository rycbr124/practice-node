const http = require('http');

//문자열로 넘어온 쿠키를 객체로 바꾸는 함수
const parseCookies = (cookie = '') =>
                    //기본매개변수, cookie의 기본값을 undefined 대신 ''로 설정
    cookie
        .split(';')
        .map(v=>v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200,{'Set-Cookie':'mycookie=test'});
    res.end('Hello Cookie');
}).listen(8082, () => {
  console.log('8082번 포트에서 서버 대기중입니다!');
});