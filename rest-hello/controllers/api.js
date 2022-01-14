const MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"
let products = null

MongoClient.connect(url, function (err, db) {
  if(err) throw err
  else {
    var dbo = db.db('runoob')
    dbo.collection('products').find({}).toArray(function (err, result) {
      if(err) throw err
      else {
        products = result
        console.log('products:',products)
        db.close()
      }
    })
  }
})

module.exports = {
  'GET /api/products': async (ctx, next) => {
    // 设置Content-Type:
    ctx.response.type = 'application/json';
    // 设置Response Body:
    ctx.response.body = {
      products: products
    };
  }
}