var Koa = require('koa')

var router = require('koa-router')

var app = new Koa()

app.use(async (ctx,next)=> {
  console.log(`Process ${ctx.request}`);
})

app.listen(3000)
console.log("app started at port http://127.0.0.1:3000...")