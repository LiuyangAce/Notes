'use strict'

var fs = require('fs')
let rs = fs.createReadStream('./output1.txt')
let ws = fs.createWriteStream('./input.txt')

// let ws2 = fs.createWriteStream('./input2.txt')

rs.pipe(ws) //读取完毕后 end时间触发 关闭write流
// rs.pipe(ws,{end: false})// 不想关闭

// rs.pipe(ws2)

ws

fs.stat('./input.txt',function (err,stat) {
  if(err){
    console.log(err);
  }else{
    console.log(stat.isFile());
    console.log(stat.size);
  }
})