function add1(a,b){
    var result = a + b;
    console.log(a + "+" + b + "=" + result );
}
function add2(a,b){
    var result = a + b;
    console.log("result =" + result);
}
function add3(a,b){
    var result = a + b;
    console.log("["+result+"]");
}

function add4(a, b, callback){
    var result= a + b;
    callback(result);
}


add1(10,20);
add2(10,20);
add3(10,20);

add4(10, 20, function(result){
    console.log ("[" + result+"]");
});
