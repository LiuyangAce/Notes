// interface Point1 {
//   x:number
//   y:number
// }


// function fun(pt: Point) {
//   console.log(`x:${pt.x};y:${pt.y}`);
// }
// let point1 = {
//   x:1,
//   y:2
// }

// fun(point1)

// // 拓展接口
// interface Animal {
//   name: string
// }
// interface Bear extends Animal {
//   honey: boolean
// }

// const bear: Bear = {
//   name:'xiongDa',
//   honey: true
// }

// console.log(bear);

// 拓展type
type Animal = {
  name: string
}
type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name:'xiongDa',
  honey: true
}

console.log(bear);