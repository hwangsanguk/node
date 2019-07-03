
//화살표 함수

// 기존 함수 java스타일
function add1(x,y){
    return x + y;
} 

var num1 = add1(3,5);
console.log(num1);


// function 대신 사용 
const add22 = (x, y) => {
    return x + y ;
} 
var num22 = add22(3,5);
console.log(num22);

const add2 = (x, y) =>{
    return x + y;
}
var num2 = add2(3,5);
console.log(num2);


const add3 = (x, y) => (x + y);
var num3 = (3,5);
console.log(num3);//함수와 리턴을 사용하지 않고 한번에 표현

//매개변수가 없는 경우
const add4 = () => {
    console.log('xx');
}


//함수 몸체가 return 문인 경우
const add5 = (x) => (x*x);
var num5 = add5(3);
console.log(num5);