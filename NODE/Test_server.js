//server_form
const express = require('express');
const path = require('path');
const app =express();
const port = 3000;


//html 렌더링 설정 ,ejs
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs'); //ejs view engine을 express를 통해 사용한다
app.engine('html', require('ejs').renderFile);//engine setting


app.use(express.urlencoded({
    extended: false//querystring 모듈 사용
}));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
//

app.get('/login' ,(req,res)=>{
    res.render('login_form.html')
})

//
app.listen(port, ()=>{
    console.log('server listening ...'+port);
    
})