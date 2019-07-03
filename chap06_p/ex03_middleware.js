//미들웨어
//클라이언트 요청과 클라이언트 중간에 끼여 있음
//app.use가 미들웨어임 (ex02_body)에 있음
const express = require('express'); //require => express를 가져오는것
const app = express();
const port = 3000;

//미들웨어 1
app.use(function(req, res, next){
    console.log('사용자 미들웨어1');
    // res.writeHead(200, {'Content-Type':'text/html;charset=UTF8'});
    // res.write('<h1>미들웨어가 전송함</h1>')
    req.body = {};
    req.body.id = 'hong';
    next();
});
app.use(function(req,res, next){
    console.log('사용자 미들웨어2');
    req.body.name = 'gildong';
    next();
});

app.get('/', function(req,res){
    console.log('/ 요청 받음');
    res.send(`<h1>${req.body.id}, ${req.body.name}</h1>`);
});

app.listen(port, ()=>{
    console.log('server listening..', port);
    
});
