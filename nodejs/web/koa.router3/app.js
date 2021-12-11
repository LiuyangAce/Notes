var Koa = require('koa')

var router = require('koa-router')()

var bodyParser = require('koa-bodyparser')

var app = new Koa()

app.use(async (ctx,next)=> {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next()
})

router.get('/',async (ctx,next)=>{
  console.log(`in ${ctx.request.url}`);
  ctx.response.body = `<h1>Hello</h1>
  <a href='/login'>Login</a>`
})

router.get('/login',async (ctx,next)=> {
  console.log(`in ${ctx.request.url}`);
  ctx.response.body = `
    <form action="/index" method="post">
      <p><input type="text" name='name' value=''></input></p>
      <p><input type="password" name='password' value=''></input></p>
      <p><input type="submit"></input></p>
    </form>
  `
})

router.post('/index',async (ctx,next)=> {
  console.log(`in ${ctx.request.url}`);
  
  let name = ctx.request.body.name
  let password = ctx.request.body.password
  console.log(`name: ${name} password: ${password}`);
  if(name === 'liuyang' && password === '123456'){
    ctx.response.body = `
      <h2>Hello! ${name}</h2>
    `
  }else {
    ctx.response.body = `
      <h2>Login Falied!</h2>
      <a href='/login'>Login</a>
    `
  }
})

app.use(bodyParser())

app.use(router.routes())

app.listen(3000)
console.log("app started at port http://127.0.0.1:3000...")