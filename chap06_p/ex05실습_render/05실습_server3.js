const express = require('express');
const path = require('path');
const app =express();
const cookieparser = require('cookie-parser');
const port = 3000;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
var hasher = require('pbkdf2-password')();
const morgan = require('morgan');

//html 렌더링 설정 ,ejs
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs'); //ejs view engine을 express를 통해 사용한다
app.engine('html', require('ejs').renderFile);//engine setting
//session 사용
app.use(session({
    secret: '1A@W#E$E',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
 }));
 //coockie사용 
app.use(cookieparser());
app.use(morgan('dev'));




app.use(express.urlencoded({
    extended: false//querystring 모듈 사용
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public1')));


// LOGIN_FORM(cookie)
/*app.get('/login_form', function(req, res){
    
    res.render('login_form.html');

});

app.post('/login_form',(req,res)=>{
    console.log(req.body); 
    res.cookie('user',req.body);
    res.redirect('/login'); 
    //login_form.html 에서 req.body정보를 cookie로 저장하여
    // browser에 저장하고 브라우저에서 /login으로 redirect해줌
});
app.get('/login',(req,res)=>{
    console.log(req.body);
    res.render('./login.html', {cookie: req.cookies});
}) //cookie: req.cookies 는 browser에 저장되어있는 cookie를 가져옴
//
app.get('/user', function(req, res){
    res.render('userlist.html');
});*/

//Login_session 시작
app.get('/login_form', function(req, res){
    
    res.render('login_form.html');

})

app.post('/login_form', (req, res) => {
    console.log(req.body);
    let userid=req.body.id;
    let password = req.body.password;
    console.log('userid = ', userid);
    console.log('password = ', password);
    console.log('userlist = ', sampleuserList);
    let bFound = false;
    for (let i = 0; i <sampleuserList.length; i++){
        let user = sampleuserList[i];
        console.log(sampleuserList[i]);
        if( userid === user.userid){
            console.log('[found] user = ', userid);
            bFound = true;
            return hasher ({
                password : password,
                salt: user.salt
            }, function(err, pass, salt, hash){
                if(err) {
                    console.log('ERR : ', err);
                    
                }
                if (hash === user.password){
                    console.log('INFO :', userid, ' 로그인 성공');

                    req.session.user = sampleuserList[i];
                    req.session.save(function () {
                        res.redirect('/carlist2');
                    })
                    return;
                }else{
                    res.redirect('/login_form');
                    return;
                }
            });
        }
        if (bFound) break;
    }

    if(!bFound){
        console.log('not found');
    }
    res.redirect('/login_form')
 })
 
 app.get('/login', (req, res) => {
    console.log('/login');
    res.render('login.html', {
        myid : req.session.myid
    });
 })
 //Login 끝




//pbkdf2 사용 패스워드 암호화
app.get('/signin_form', function(req, res){
    res.render('signin_form.html');
});
var sampleuserList=[]

app.post('/signin',(req,res)=>{
    let userid = req.body.id;
    let password =req.body.password;
    let name = req.body.name;
    let pnumber = req.body.pnumber;
    console.log('userid =', userid);
    console.log('password =', password);
    console.log('name = ', name);
    console.log('pnumber = ', pnumber);
 
    hasher({
        password: req.body.password
    } , (err, pass, salt, hash) => {
        if(err){ console.log('ERR = ', err);
        res.redirect('/signin_form');
    }
    let user = {
        userid: userid,
        password: hash,
        salt: salt,
        name: name,
        pnumber: pnumber
    }
    sampleuserList.push(user);
    console.log('user added : ', user);
    res.redirect('/login_form');
    });

});
// 암호화 종료

app.get('/main', (req,res)=>{
    res.render('main.html');
})

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
//Cookie를 이용
app.get('/test/setCookie',(req,res)=>{
 console.log('/test/setCookie');

 res.cookie('user',{'name':'황길동','id':'lall21'},{maxAge:1000,httpOnly:true});
 res.cookie('shoppingcart',{'poductno':'123','productname':'cleaner'},{maxAge:24*60*60*1000,httpOnly:true}); 

 res.redirect('/test/getCookie');
})
app.get('/test/getCookie',(req,res)=>{
    console.log(req.cookies);
    
    res.render('./test/getcookie.html', {cookie: req.cookies});
})
// Cookie


//session 시작
app.get('/test/setsession', (req, res) => {
    console.log('/test/setsession');
 
    req.session.myname = '홍길동';
    req.session.myid = 'hong'
    req.session.save(function () {
        res.redirect('/test/getsession');
    })
 })
 
 app.get('/test/getsession', (req, res) => {
    console.log('/test/getsession');
    console.log('session.myname = ', req.session.myname);
 
    res.render('test/getsession.html', {
        myname : req.session.myname,
        myid : req.session.myid
    });
 })
 
//session

app.get('/ejs', (req,res)=>{
    console.log(req.body);
    console.log('0번 구역');
    res.render('ejs.html', {userid:'aaaa', name:'황상욱',loop:5, title:"EJS"})
    console.log('0번 구역');
})

app.get('/carlist2',(req,res)=>{
    console.log(req.body);
    res.render('carlist2.html',{list:sampleCarList})
    
})


app.listen(port, ()=>{
    console.log('server listening ...'+port);
    
})