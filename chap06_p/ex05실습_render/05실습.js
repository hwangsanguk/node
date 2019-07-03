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

app.use(express.static(path.join(__dirname, 'public1')));


app.get('/login_form', function(req, res){
    res.render('login_form.html');
});

app.get('/signin_form', function(req, res){
    res.render('signin_form.html');
});
app.get('/carinfo', function(req, res){
    res.render('carinfo.html');
});



app.listen(port, ()=>{
    console.log('server listening ...'+port);
    
})