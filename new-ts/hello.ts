function sayHello(person:string) {
  return 'Hello, ' + person;
}

let user = 'tom'
console.log(sayHello(user));

let isDone: boolean = false

// let createdByNewBoolean: Boolean = new Boolean(1);
let createdByNewBoolean: boolean = Boolean(1);

let myName: string = 'Tom'
let myAge: number = 25

let setence: string = `hello, my name is ${myName} .
${myAge}`

console.log(setence);


function alertName(): void {
  console.log('My name is Tom');
}

// let unuseable: void = undefined
// let unuseable2: void = null

// let num: number = undefined

// let a: undefined;
// let b: number = a

// let u:void;
// let num: number = u

let list: number[] = [1,2,4]
let list2: Array<number> = [1,2,3]

let list3: Array<object> = [{},{} ,{}]

// 元组 [type, type]
let x: [string, number] = ['123', 1]
x = ['4321', 34]

console.log(x[0].substring(1,3)); // [)
// console.log(x[1].substring(1));


