// 排序 分页 跳过

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
  if(err) throw err
  var dbo = db.db('runoob')
  var sortStr = {name: -1} // 大->小排序
  var limitNum = 3
  var skipNum = 2
  dbo.collection('site').find().sort(sortStr).skip(skipNum).limit(limitNum).toArray(function(err, result){
    if(err) throw err
    console.log(result);
    db.close()
  })
})  