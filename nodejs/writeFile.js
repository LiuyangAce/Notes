'use strict'

var fs = require('fs')
var data = 'Hello Node.js'

//异步方法
// fs.writeFile('output.txt',data,function(err) {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log('ok');
//   }
// })

//同步方法
try{
  fs.writeFileSync('output.txt',data)
}catch(err){
  console.log(err);
}