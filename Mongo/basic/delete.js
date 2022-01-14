var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log(err);
  }else {
    var dbo = db.db('runoob')
    var whereStr = {"name" : "菜鸟教程", "url" : "www.runoob"}
    dbo.collection('site').deleteOne(whereStr,function (err,result) {
      if (err) {
        console.log(err);
      }else {
        console.log(result);
        db.close()
      }
    })
  }
})