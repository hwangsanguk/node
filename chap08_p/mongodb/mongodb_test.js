const mongoose = require('mongoose'); // npm install --save mongoose;
const { Schema } = mongoose; // 스키마 설정
// const Schema = mongoose.Schema; 위와 같음


//mongoDB연결 

mongoose.connect('mongodb://localhost/nodejs',{
    useNewUrlParser: true
}); // nodejs 부분은 내가 mongo 에서 쓸 스키마 부분


//user 스키마 정의
const userSchema = new Schema( {
    name :{
        type: String,
        required: true
        },
    age: {
        type: Number,
        required: true
    },
    married: {
        type:Boolean,
    },
    comment: {
        type:String
    },
    createdAt: {
        type:Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema); //model을 만들때는 user 로 단수형태로 만들어야함

User.find({}, function(err, docs){
    if(err){
    console.log(err);}
else{
    console.log(docs);
    
}
});

//Date insert
const user = new User({
    name:'hwang',
    age: 25,
    married: false
});
user.save((err,result)=>{
    if(err)
    console.log(err);
    else{
        console.log(result);
    }
});