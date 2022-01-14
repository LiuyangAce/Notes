var mongoose = require('mongoose')
var url = "mongodb://localhost:27017/runoob"

mongoose.connect(url, function (err) {
  if(err){
    console.log('连接失败');
  }else {
    console.log('连接成功');
  }
})