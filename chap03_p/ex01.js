
//console 예제
var a = 'test';
var b = 10;
var c = true;
console.log(a + ' ' + b + ' ' + c);

//console.dir 객체 출력
const obj = {
        outside: { // depth:0
            inside: { // depth:1
                key: 'value', //depth:2
            }
        }
}
console.log(obj);
console.dir(obj, {colors: true, depth:2});

//수행 시간 출력
console.time('aaa');
for (let i = 0; i<10000 ; i++){
    continue;
}
console.timeEnd('aaa');

//에러 위치 추적
/*function b() {
        console.trace('에러위치 추적');
}

function a() {
    b() ;
}
a(); */

//console.log 포맷 출력
console.log('숫자: %d + %d = %d', 10, 29, 10+29);
console.log('문자열: %s', 'Hello World!');
console.log('JSON: %j', { name: 'node.js' });
console.log('문자열을', '연결시킬수도 있습니다.');



//console.log 파일명, 디렉토리명 출력 __ 언더바 2개
{
console.log(__filename);
console.log(__dirname);
}