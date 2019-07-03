//static 파일
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//가장위에 있어야함 그래야 처리하기 편함
app.use(express.static(path.join(__dirname, 'public')));
//public 안에 index.html은 default 파일이라 가장 먼저 실행됨 -(1)
// localhost:3000/ 뒤에 public 아래에 있는 파일의 경로를 적으면 된다.
// localhost:3000/index.html 이나 localhost:3000/images/img1.jpg 를 적으면 파일이 열림


app.get('/', (req, res) => {
    res.send('<h1>Home Page');
});//(1)에 의하여 localhost:3000로 검색하면 index.html이 실행된다.
// 따라서 localhost:3000/로 해야 app.get('/')이 실행
// 이게 싫다면 index.html을 index2.html 등으로 바꾸어준다

app.listen(port, ()=>{
    console.log('Server listening ....'+port);
    
});