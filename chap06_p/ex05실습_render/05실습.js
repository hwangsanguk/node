const express = require('express');
const path = require('path');
const app =express();
const port = 3000;

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public1')));


app.get('/login_form', function(req, res){
    res.render('login_form.html');
});

app.get('/user', function(req, res){
    res.render('userlist.html');
});

app.post('/login_form',(req,res)=>{
    console.log(req.body); 
    res.render('login.html');
});


app.get('/signin_form', function(req, res){
    res.render('signin_form.html');
});

//유저등록 시작
;// post안에 푸쉬를 지정해줘야 username에 푸쉬하고 그것을 통해 등록된 유저를 get으로 보냄

app.post('/signin',(req,res)=>{
    console.log(req.body);
    var data = req.body;
    username.push(data);
    console.log(username);
    res.render('sign.html');
});

var username = []

app.get('/api/signin', function(req, res){
    res.json(username);
});
//유저등록 끝




var sampleCarList = [{
    carNumber: '11주1111',
    owner: '홍길동',
    model: 'SONATA',
    company: 'HYUNDAI',
    numOfAccident: 2,
    numOfOwnerChange: 1
},

{
    carNumber: '22주2222',
    owner: '손오공',
    model: 'MORNING',
    company: 'KIA',
    numOfAccident: 1,
    numOfOwnerChange: 3
}
];


app.get('/carlist', function(req, res){
    res.render('carlist.html');
});

app.get('/api/carlist', function(req, res){
    res.json(sampleCarList);
});

app.post('/api/regcar',(req,res)=>{
    console.log(req.body);
    sampleCarList.push(req.body);
    res.json(sampleCarList);
    
    // sampleCarList.push(req.body);
    
})


app.listen(port, ()=>{
    console.log('server listening ...'+port);
    
})