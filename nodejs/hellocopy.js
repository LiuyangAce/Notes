"use strict"

var s = 'Hello';

function greet(name) {
  console.log(s + ',' + name +'!')
}
function number(num) {
  console.log(num);
}

exports.greet = greet
exports.number = number