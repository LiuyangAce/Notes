'use strict'

var fs = require('fs')
var ws1 = fs.createWriteStream('output1.txt','utf-8')
ws1.write('使用Stream写入文本数据..\n')
ws1.write('END')
ws1.end()

var ws2 = fs.createWriteStream('output2.txt','utf-8')
ws2.write('使用Stream写入文本数据..\n')
ws2.write('END')
ws2.end()