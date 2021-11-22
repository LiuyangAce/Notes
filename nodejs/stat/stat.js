'use strict'

var fs = require('fs')

// 异步
// fs.stat('../sample.txt',function (err ,stat) {
//   if(err){
//     console.log(err);
//   }else {
//     console.log(stat);
//     //是否是文件
//     console.log('isFile:',stat.isFile());
//     //是否是目录
//     console.log('isDirectory:',stat.isDirectory());
//     if(stat.isFile()){
//       console.log('size:',stat.size); //文件大小
//       console.log('birth time:',stat.birthtime);  //文件创建时间
//       console.log('modified time:',stat.mtime); // 文件修改时间
//     }
//   }
// })

//同步
try{
  let data = fs.statSync('../sample.txt')
  // console.log(data);
  if(data.isFile()){
    console.log(data.size)
    console.log(data.birthtime);
    console.log(data.mtime);
  }
}catch(err) {
  console.log(err);
}