var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function (err, db) {
  if(err) throw err
  var dbo = db.db('runoob')
  var myobj = [
    { name:'菜鸟教程3', url: 'www.runoob'},
    { name: 'Google3', url: 'https://www.google.com', type: 'en'},
    { name: 'Facebook3', url: 'https://www.google.com', type: 'en'}
  ]
  dbo.collection('site').insertMany(myobj, function (err, res) {
    if (err) throw err
    // res的结构
    // {
    //   acknowledged: true,
    //   insertedCount: 3,
    //   insertedIds: {
    //     '0': new ObjectId("61dfdd192a4dd63f08cc66b7"),
    //     '1': new ObjectId("61dfdd192a4dd63f08cc66b8"),
    //     '2': new ObjectId("61dfdd192a4dd63f08cc66b9") 
    //   }
    // }
    console.log('文档插入成功,插入的数量为：',res.insertedCount);
    db.close()
  })
})