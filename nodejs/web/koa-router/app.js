const Koa = require("koa");

const router = require("koa-router")({
  prefix: '/user'
});

const bodyParser = require("koa-bodyparser");
const jsonerror = require("koa-json-error")
const parameter = require("koa-parameter")

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

let userList = [
  {username: 'tom',pwd:'123'}
]

// 查询所有用户
router.get("/", async (ctx, next) => {
  ctx.body = {
    data: userList
  }
});

//根据id查询
router.get("/find/:id", async (ctx, next) => {
  let id = ctx.params.id
  if(Number(id) > (userList.length-1)){
    ctx.throw(412,'先决条件失败!')
  }
  ctx.response.body = {
    code: 200,
    msg: '查询成功',
    data: userList[Number(id)]
  }
});

// 添加
router.post("/add", async (ctx, next) => {
  ctx.verifyParams({
    username: {
      type: 'string',
      require: true
    },
    pwd: {
      type: 'string',
      require: true
    }
  })
  let {username,pwd} = ctx.request.body
  userList.push({
    username,
    pwd
  })
  ctx.response.body = {
    code: 200,
    msg: '请求成功'
  }
});

// 删除
router.delete('/del',async (ctx, next) => {
  let {id} = ctx.request.query
  userList.splice(Number(id),1)
  ctx.response.body = {
    code: 200,
    msg: '删除成功',
  }
})

// 修改
router.put('/updata',async (ctx, next) => {
  let user = ctx.request.query
  userList.splice(Number(user.id),1,{
    username:user.username,
    pwd:user.pwd
  })
  ctx.response.body = {
    code: 200,
    msg: '修改成功'
  }
})

// // 异常处理
// app.use(async(ctx,next) => {
//   try{
//     await next()
//   } catch (err) {
//     ctx.status = err.status || err.statusCode || 500
//     ctx.response.body = {
//       message: err.message
//     }
//   }
// })

app.use(jsonerror())

//注意位置（middleware按顺序执行） 要放到   app.use(router.routes()) 前面
app.use(bodyParser());

app.use(parameter(app))

// add router middleware:
app.use(router.routes());

app.listen(3001);
console.log("app started at port http://127.0.0.1:3001...");
