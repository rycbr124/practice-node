const{odd, even} = require('./var'); //require의 인자로 모듈 경로 적어두기,js json 확장자 생략가능
//var.js의 module.exports에 담겨 있던 객체를 불러와 func.js에서 사용

function checkOddOrEven(num){
    if(num%2){ //홀수면
        return odd;
    }
    return even;
}

//함수,변수 exports 가능
module.exports = checkOddOrEven;