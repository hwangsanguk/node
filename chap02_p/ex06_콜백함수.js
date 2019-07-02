// function add(a, b, callback){
//     var result = a+b;
//     // return result;
//     callback(result);

// }

// function callback2(result){
//     console.log('콜백함수');
//     console.log('result=', result);
// }
// add (10,20, callback2);

function add(a, b, callback) {
    console.log("--> add 함수");    
    var result = a + b;

    callback(result);
    console.log("<-- add 함수");
}

console.log('--> add 함수 호출');
add(10, 20, function(result){
    console.log('--> callback()');
    console.log('result =' + result);
    console.log('<-- callback()');    
})



