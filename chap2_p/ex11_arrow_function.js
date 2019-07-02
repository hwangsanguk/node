function add1(x,y){
    return x + y;
} // 기존 함수

const add22 = (x, y) => {
    return x + y ;
} // function 대신 사용

const add2 = (x, y) =>{
    return x + y;
}
const add3 = (x, y) => (x + y);

const add4 = () => {
    console.log('xx');
}//매개변수가 없는 경우
const add5 = (x) => (x*x);//함수 몸체가 return 문인 경우