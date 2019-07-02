//배열의 비구조화 할당



var foo = ["one", "two", "three"];

var a = foo[0];
var b = foo[1];
var c = foo[2];

//배열의 구조 분해
var [a, b, c]= foo;

console.log(a);
console.log(b);
console.log(c);


//나머지 할당
var [a, b, ...c] = [1, 2, 3, 4, 5];

console.log(a);
console.log(b);
console.log(c);



//객체의 비구조화 할당
var obj = {p: 10, q: true};
var {p, q} = obj;

console.log(p);
console.log(q);


