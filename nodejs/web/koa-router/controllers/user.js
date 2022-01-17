const Koa = require("koa");

const router = require("koa-router")({
  prefix: '/user'
});

const bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

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
    console.log('in here');
    ctx.throw(412)
  }
  // ctx.response.body = {
  //   code: 200,
  //   msg: '查询成功',
  //   data: userList[Number(id)]
  // }
});

// 添加
router.post("/add", async (ctx, next) => {
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

//注意位置（middleware按顺序执行） 要放到   app.use(router.routes()) 前面
app.use(bodyParser());

// add router middleware:
app.use(router.routes());

app.listen(3001);
console.log("app started at port http://127.0.0.1:3001...");
