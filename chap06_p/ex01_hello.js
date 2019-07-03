//express 기본 코드
const express = require('express');
const app = express();
const port = 3000;



app.get('/', function(req,res){
    console.log('/ 요청이 들어옴');
    res.send('<h1>Home page</h1>');
});

app.get('/about', (req,res)=>{
    console.log('/about 요청이 들어옴');
    // res.send('<h1>About</h1>');
    res.writeHead(200,{
            'Content-Type' : 'text/html'
    })
    res.write('<h2>url.serch : </h2>');
    res.write('<h2>url.pathname : </h2>');
    res.write('<h2>url.path : </h2>');
    res.end();
});
//http://localhost:3000/query?id=wook&name=sang 이면 페이지에 {"id":"wook","name":"sang"}을 출력해줌
app.get('/query', function(req,res){
    var id = req.query.id; // id 변수설정
    var name = req.query.name; // name 변수 설정
    console.log(id,' , ', name); //log에 id 와 name 출력
    console.log(req.query); //req.query의 log 출력
    res.send(req.query); // 홈페이지에 req.query 출력
    
    
})
// http://localhost:3000/mybook/123

app.get('/semantic/:book/:page', (req, res) => {
    console.log(req.params.book);// :book 변수 내용을 받아서 log 출력
    console.log(req.params.page);// :page 변수 내용을 받아서 log 출력
    res.send(req.params); // 홈페이지에 :book 과 :page 의 변수 내용을 보내줌
    
});




app.listen(port, function(){
    console.log('server listen at .... '+ port);
 });