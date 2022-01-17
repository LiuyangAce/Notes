const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://localhost:27017/jianshu',{useUnifiedTopology:true ,useNewUrlParser:true})
  .then(() => {
    console.log('数据库连接成功');
  }).catch ((err) => {
    console.error('数据库连接失败',err);
  })
}