var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){ //요청에 대한 콜백
    if(xhr.readyState==xhr.DONE){ //요청이 완료되면
        console.log(xhr.responseText); //서버에 보내주는 값
    }else{
        console.error(xhr.responseText);
    }
};
xhr.open('GET','http://www.zerocho.com/api/get'); //메서드와 주소 설정
xhr.send(); // 요청전송