const Koa = require("koa");

const bodyParser = require("koa-bodyparser");

const controller = require('./controller')

const app = new Koa()


app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next()
})

// ========================================
// 3 最简化 提取出来 到 control.js

app.use(bodyParser());

app.use(controller())

app.listen(3000);
console.log("app started at port http://127.0.0.1:3000...");
















// //注意位置（middleware按顺序执行） 要放到   app.use(router.routes()) 前面
// app.use(bodyParser());

// // add router middleware:
// app.use(router.routes());

// app.listen(3000);
// console.log("app started at port http://127.0.0.1:3000...");
