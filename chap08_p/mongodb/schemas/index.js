//mongodb 연결
const mongoose = require('mongoose');


module.exports =() =>{
// mongodb 연결
mongoose.connect('mongodb://localhost/nodejs',{
    useNewUrlParser:true
},(err)=>{
    if(err){
    console.log('mongodb연결오류');
}else{
    console.log('mongodb연결 성공');
    
}
});

mongoose.connection.on('error', (error)=>{
    console.log('mongodb연결오류...');

});

mongoose.connection.on('disconnected',()=>{
    console.log('mongodb연결이 끝어짐');
    
});
}