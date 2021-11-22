"use strict"

var s = 'Hello';

function greet(name) {
  console.log(s + ',' + name +'!')
}
function number(num) {
  console.log(num);
}

module.exports = {
  greet:greet,
  number:number
}