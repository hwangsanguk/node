const http = require('http');//http설정
const url = require('url');//url 설정
var port = 3000;//3000번 포트
const server = http.createServer(); // 서버 생성

server.listen(port, function(){
    console.log('웹 서버 대기중...: %d', port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트:' +addr.port + addr.address+ '접속했습니다.');
    
}); //서버 LOG확인

server.on('close', function(){
    console.log('웹 서버 종료됨.'); 
});

server.on('request', function(req,res){
    //login 
    //signup 를 구분하고 싶음 => url 사용 , 2번 라인 url 추가
    var urlp = url.parse(req.url, true);//url을 통해 페이지 변경
    console.log(urlp.pathname);

    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h2>${urlp.pathname}</h2>');// http://localhost:3000//1234 => 1234가 출력 되도록 설정
    

    
    res.write('<h1 style="text-align: center">Hello World</h1>');
    res.write('<p>안녕하세요</p>')
    res.write('<table style="border: 1px solid black"><tr><td>comeone</td><td>hello</td></tr></table>')
    res.end();
})

// 192.168.111.136 => VM우분투 서버 