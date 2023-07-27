// eunm 枚举
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
console.log(c); // 2

// 由枚举值得到名字
enum Color1 {Red = 1, Green, Blue}
let c1: string = Color1[2];
console.log(c1);