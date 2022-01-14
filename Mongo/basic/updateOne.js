var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'

MongoClient.connect(url, function(err, db){
  if(err)
    throw err
  else {
    var dbo = db.db('runoob')
    var whereStr = {'name':'菜鸟教程'}
    var updateStr = {$set: { "url" : "https://www.runoob.com" }}
    dbo.collection('site').updateOne(whereStr, updateStr,function(err, res){
      if(err){
        throw err
      }else {
        console.log('文档更新成功');
        console.log(res);
        db.close()
      }
    })
  }
})