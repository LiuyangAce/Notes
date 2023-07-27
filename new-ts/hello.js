function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'tom';
console.log(sayHello(user));
var isDone = false;
// let createdByNewBoolean: Boolean = new Boolean(1);
var createdByNewBoolean = Boolean(1);
var myName = 'Tom';
var myAge = 25;
var setence = "hello, my name is ".concat(myName, " .\n").concat(myAge);
console.log(setence);
function alertName() {
    console.log('My name is Tom');
}
// let unuseable: void = undefined
// let unuseable2: void = null
// let num: number = undefined
// let a: undefined;
// let b: number = a
// let u:void;
// let num: number = u
var list = [1, 2, 4];
var list2 = [1, 2, 3];
var list3 = [{}, {}, {}];
// 元组 [type, type]
var x = ['123', 1];
x = ['4321', 34];
console.log(x[0].substring(1, 3)); // [)
// console.log(x[1].substring(1));
// eunm 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // 0
