const http = require('http');

const server = http.createServer((req,res)=>{
    //여기에 어떻게 응답할 지 적어줍니다.
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
server.listen(8080);
server.on('listening',()=>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
})//이벤트 리스너 활용
server.on('error',(error)=>{
    console.error(error);
});//에러 이벤트 리스너
