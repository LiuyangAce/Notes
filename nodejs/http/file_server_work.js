'use strict'
//作业： 在浏览器输入http://localhost:8089/时，会返回404，
//原因是程序识别出HTTP请求的不是文件，而是目录。
//请修改file_server.js，
//如果遇到请求的路径是目录，
//则自动在目录下依次搜索index.html、default.html，如果找到了，就返回HTML文件的内容。
var
  fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');

  // C:\Users\17735\Desktop\file_serve\index.html
  // G:\gitProject\notes\nodejs\http\test.js
var root = path.resolve(process.argv[2] || '.')
console.log('当前本地目录:',root)


var server = http.createServer(function (request,response) {
  var pathname = url.parse(request.url).pathname
  var fullname = path.join(root, pathname)
  fs.stat(fullname, function (err,stats) {
    if(err){
      console.log(err);
    }else {
      if(stats.isFile()){
        console.log('200:',request.url);
        response.writeHead(200)
        fs.createReadStream(fullname).pipe(response)
      }else if(stats.isDirectory) {
        let readdir = fs.readdirSync(fullname)
        console.log(readdir);
        readdir.forEach(element => {
        console.log(readdir);
          fs.stat(path.join())
        });
      }
    }
  })
})

function isDir(fullname) {
  try{
    return fs.statSync(fullname).isDirectory()
  } catch(err) {
    console.log(err);
  }
}


server.listen(8089)

console.log('Server is running at http://127.0.0.1:8089/');