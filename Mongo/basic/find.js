var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
  if(err) throw err
  var dbo = db.db('runoob')
  // var whereStr = {'name':'菜鸟教程'}
  dbo.collection('site').find({}).toArray(function(err, result){
    if(err) throw err
    console.log(result);
    db.close()
  })
})