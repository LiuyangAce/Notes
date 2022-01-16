const Koa = require('koa')

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
})

app.use(async (ctx, next) => {
  const startTime = new Date().getTime()
  
  await next();

  const endTime = new Date().getTime()
  console.log(endTime - startTime);
})

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html'
  ctx.response.body = '<h1>Hello, koa2!!!</h1>'
})

app.listen(3000)
console.log('app started at port 3000...');