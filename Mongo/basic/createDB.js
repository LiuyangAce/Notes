var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/runoob"

MongoClient.connect(url, function (err, db) {
  if(err) throw err
  console.log('数据库已创建！');
  var dbase = db.db("runoob")
  db.close();
})