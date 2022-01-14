var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/runoob'

MongoClient.connect(url,function (err, db) {
  if (err) {
    console.log(err)
  }else {
    var dbo = db.db('runoob')

    dbo.createCollection('orders')
    var ordersData = { _id: 1, product_id: 154, status: 1 }
    dbo.collection('orders').insertOne(ordersData, function (err, result) {
      if (err) {
        console.log('orders:',err);
      }else {
        console.log('orders:',result);
      }
    })

    dbo.createCollection('products')
    var productsData = [
      { _id: 154, name: '笔记本电脑' },
      { _id: 155, name: '耳机' },
      { _id: 156, name: '台式电脑' }
    ]
    dbo.collection('products').insertMany(productsData, function (err, result) {
      if (err) {
        console.log('products:',err);
      }else {
        console.log('products:',result);
      }
    })

    db.close()
  }
})