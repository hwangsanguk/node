//로그인 가능한 페이지 만들기
//ejs를 사용 할거임( npm install --save ejs )
const express = require('express');
const path = require('path');
const app =express();
const port = 3000;

//html 렌더링 설정
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.use(express.urlencoded({
    extended: false // querystring 모듈 사용
}));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
    res.send('<h1>Home page</h1>');
});
app.get('/html', (req,res)=>{
    res.render('test.html');
});

app.get('/html2', (req,res)=>{
    res.render('test2.html');
});



app.listen(port, ()=>{
    console.log('Server listening ... ' + port);
    
})