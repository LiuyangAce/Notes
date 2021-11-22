'use strict'

var url = require('url')

console.log(url.parse('http://user:pass@host.com:8089/path/to/file?query=string#hash'));