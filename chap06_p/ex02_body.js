const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}))


app.get('/', (req,res)=> {
    res.send('<h1>Home page</h1>');
});

app.post('/post',(req,res) => {
    console.log('/post 요청'); //body.html에서 post 요청을 log로 확인
    console.log(req.body);// { name: '황상욱', id: 'lall21', password: 'forest95' } 의 형식으로 log 확인
    res.send(req.body);
    /*  name: '이름asedas',
  id: 'idedsadesa',
  password: 'passworddsaedsad' } 형식으로 페이지에 출력됨*/
    
    
})


app.listen(port, ()=> {
    console.log('server listen at... '+ port);
})