const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {//마스터 프로세스,요청이 들어오면 워커 프로세스에 분배
  console.log(`마스터 프로세스 아이디: ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }
  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    //cluster.fork();//워커가 종료될 때 마다 새롭게 생성
  });
} else {//워커 프로세스,실질적인 요청처리
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Cluster!</p>');
    /**
     //요청이 들어올 때 마다 1초후에 서비스 종료
     setTimeout(() => {
         process.exit(1);
        }, 1000);
  */
  }).listen(8085);

  console.log(`${process.pid}번 워커 실행`);
}