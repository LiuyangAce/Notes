const Koa = require("koa");

const router = require("koa-router")();

const bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// router.get("/hello/:name", async (ctx, next) => {
//   var name = ctx.params.name;
//   ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

// router.get("/", async (ctx, next) => {
//   ctx.response.body = "<h1>Index</h1>";
// });

router.post("/", async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
      <p>Name: <input name="name" value="koa"></p>
      <p>Password: <input name="password" value="password"></p>
      <p><input type="submit" value="submit"></p>
  `;
});

router.post("/signin", async (ctx, next) => {
  var name = ctx.response.body.name || "";
  var password = ctx.request.body.password || "";
  console.log(`name: ${name} password: ${password}`);
  if(name === "liuyang" && password === "123456"){
    ctx.response.body = `<h1>Welcome,${name}</h1>`
  }else {
    ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Sign In</a></p>
    `
  }
});

//注意位置（middleware按顺序执行） 要放到   app.use(router.routes()) 前面
app.use(bodyParser());

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log("app started at port http://127.0.0.1:3000...");
