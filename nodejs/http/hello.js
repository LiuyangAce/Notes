'use strict'

var http = require('http')

var server = http.createServer(function (req,resp) {
  console.log(req.method + ':'+ req.url);
  resp.writeHead(200, {'Content-Type':'text/html'})
  resp.end('<h1>Hello world!</h1>')
})

server.listen(8089);
console.log('Server is running at http://127.0.0.1:8089/');