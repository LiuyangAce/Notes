'use strict';

//异步
//读取文本文件
// var fs = require('fs');

// fs.readFile('sample.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//读取二进制文件
var fs = require('fs');

fs.readFile('1.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length+ 'bytes');
        console.log(data.toString('utf-8'));
    }
});