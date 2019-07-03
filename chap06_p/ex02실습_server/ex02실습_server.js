const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}))


app.get('/', (req,res)=> {
    res.send('<h1>Home page</h1>');
});

app.post('/Login',(req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log('/Login 요청');
    console.log(req.body);
    res.write('ID/Password 확인'+'<br>');
    res.write('Login이 되었습니다.');
    res.end();
})

app.post('/signin',(req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log('/signin 요청');
    console.log(req.body);
    res.write('클라이언트의 회원등록이 완료되었습니다.');
    res.end();
    
})


app.listen(port, ()=> {
    console.log('server listen at... '+ port);
})