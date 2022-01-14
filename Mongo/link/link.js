var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://127.0.0.1:27017/'

MongoClient.connect(url,function (err, db) {
  if (err) {
    console.log(err)
  }else {
    var dbo = db.db('runoob')
    dbo.collection('orders').aggregate([
      { $lookup:
        {
          from: 'products',
          localField: 'product_id',
          foreignField: '_id',
          as: 'orderdetails'
        }
      }
    ]).toArray(function (err, res) {
      if (err) {
        console.log(err)
      }else {
        console.log(JSON.stringify(res));
        db.close()
      }
    })
  }
})