'use strict'

var
  fs = require('fs'),
  url = require('url'),
  path = require('path'),
  http = require('http');

var root = path.resolve(process.argv[2] || '.'); //root 本地目录
console.log('Static root fir:',root);

// 创建服务器:
var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname //获得url的path
  console.log(url.parse(request.url));
  console.log('pathname:',pathname);
  var filepath = path.join(root, pathname)
  console.log('filepath:',filepath);
  fs.stat(filepath, function (err, stats) {
    if(!err && stats.isFile()) {
      console.log('200:',request.url);
      response.writeHead(200)
      fs.createReadStream(filepath).pipe(response)
    }else {
      console.log('404:',request.url);
      response.writeHead(404)
      response.end('404 Not Found')
    }
  })
})

server.listen(8089)

console.log('Server is running at http://127.0.0.1:8089/');