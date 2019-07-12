// 1. exports 를 통한 모듈화
// exports.a = 10;
// exports.b = 20;
// exports.funca = function (val) {
//     console.log(val);
// }

// module.exports = {
//     a: 10,
//     b: 20,
//     funca : function (val) {
//         console.log(val);
//     }
// }

// 3. module.exports 확장
// let mymodule = {
//     a: 10,
//     b: 20,
//     funca: function (val) {
//         console.log(val);
//     }
// }

// module.exports = mymodule;

// 4. 초기값이 있는 모듈 (생성자 패턴)

// module.exports = function (param1, param2) {
//     let mymodule = {
//         a : param1,
//         b : param2,
//         funca : function (val) {
//             console.log(val);
//         }
//     }
//     return mymodule;
// }

// 5. global 변수 사용
module.exports = function (param1, param2) {
    let mymodule = {
        a: param1,
        b: param2,
        c: myval,
        funca: function (val) {
            console.log(val);
        }
    }
    return mymodule;
}