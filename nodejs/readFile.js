'use strict';

//异步
//读取文本文件
// var fs = require('fs');

// fs.readFile('sample.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(Buffer.from(data)); // String -> Buffer
//     }
// });

//读取二进制文件
// var fs = require('fs');

// fs.readFile('1.png', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length+ 'bytes');
//         console.log(data.toString('utf-8'));  //Buffer -> String
//     }
// });

// 同步 捕获问题用try catch
  var fs = require('fs');
  try {
    var data = fs.readFileSync('sample.txt','utf-8')
    console.log(data);
  } catch (error) {
    console.log(error)
  }

