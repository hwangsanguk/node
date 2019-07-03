//static 파일
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//가장위에 있어야함 그래야 처리하기 편함
app.use(express.static(path.join(__dirname, 'public')));
//public이 기본 루트이다

app.get('/', (req, res) => {
    res.send('<img src="/images/img1.jpg">');
});//기본을 이미지로 설정함

app.listen(port, ()=>{
    console.log('Server listening ....'+port);
    
});