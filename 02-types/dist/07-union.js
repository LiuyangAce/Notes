"use strict";
// function printId(id: number|string) {
//   // console.log('this is your ID:',id); //ok
//   // console.log(id.toUpperCase()); //不行 修改方法: 用if判断来
//   // id....
// }
// printId(101)
// printId('jiang')
function fun(x) {
    return x.slice(0, 3);
}
console.log(fun([1, 2, 3, 4, 5]));
console.log(fun("12345"));
