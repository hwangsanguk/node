function add (a,b) {
    return a+b;
}

var add2 = function (a,b){ // 익명함수는 이름이 있어야 할 곳에 아무것도 없음
    return a+b;
}

var sum1 = add2(10,20);
console.log(sum1);
