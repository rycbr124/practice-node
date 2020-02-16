const crypto = require('crypto');

console.log('base64: ',crypto.createHash('sha512').update('비밀번호').digest('base64'));
//createHash(알고리즘) : 사용할 해시 알고리즘. md5(취약점),sha1(취약점),sha256,sha512
//update(문자열) : 변환할 문자열
//digest(인코딩) : 인코딩 할 알고리즘 . base64,hex,latin1 base64가 결과 문자열이 가장 짧다.
console.log('hex: ',crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ',crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

