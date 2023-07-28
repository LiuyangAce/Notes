// interface StringArray {
//   [index: string]: string;
// }

// let myArray: StringArray;

// // 这样也可以
// myArray = {
//   1: 'jiuy',
//   '2': 'xxx'
// }
// // myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];
// console.log(myStr);

// class Animal {
//   name: string;
// }
// class Dog extends Animal {
//   breed: string;
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

interface numDir {
  [index: string]: number,
  name: string,
  age: number
}