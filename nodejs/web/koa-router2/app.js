const Koa = require("koa");


// const router = require("koa-router")();

const bodyParser = require("koa-bodyparser");

const controller = require('./controller')

const app = new Koa()


app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next()
})

// 1 修改为2
// var files = fs.readdirSync(_dirname + '/controllers')

// //过滤出.js文件
// var js_files = files.filter((f) => {
//   return f.endsWith('.js')
// })

// for (var f of js_files) {
//   console.log(`process controller: ${f}...`);

//   //导入js文件
//   let mapping = require(_dirname + '/controllers/' +f)
//   for(var url in mapping) {
//     if(url.startsWith('GET')){
//       //如果url类似"GET xxx"
//       var path = url.substring(4)
//       router.get(path, mapping[url])
//       console.log(`register URL mapping: Get ${path}`)
//     } else if (url.startsWith('POST')) {
//       var path = url.substring(5)
//       router.post(path, mapping[url])
//       console.log(`register URL mapping: POST ${path}`);
//     } else {
//       console.log(`invalid URL: ${url}`);
//     }
//   }
// }

// ==================================
// 2 修改为3
// function addMapping(router, mapping) {
//   for(var url in mapping) {
//     if(url.startsWith("GET")){
//       var path = url.substring(4)
//       router.get(path, mapping[url])
//       console.log(`register URl mapping: GET ${path}`);
//     }else if (url.startsWith("POST")){
//       var path = url.substring(5);
//       router.post(path, mapping[url]);
//       console.log(`register URL mapping: POST ${path}`);
//     }else {
//       console.log(`invalid URL: ${url}`);
//     }
//   }
// }

// function addControllers(router) {
//   var files = fs.readdirSync(__dirname + '/controllers');
//   var js_files = files.filter((f) => {
//       return f.endsWith('.js');
//   });

//   for (var f of js_files) {
//       console.log(`process controller: ${f}...`);
//       let mapping = require(__dirname + '/controllers/' + f);
//       addMapping(router, mapping);
//   }
// }

// addControllers(router)


// ========================================
// 3 最简化 提取出来 到 control.js


app.use(bodyParser());

// app.use(router.routes());

app.use(controller())

app.listen(3000);
console.log("app started at port http://127.0.0.1:3000...");
















// //注意位置（middleware按顺序执行） 要放到   app.use(router.routes()) 前面
// app.use(bodyParser());

// // add router middleware:
// app.use(router.routes());

// app.listen(3000);
// console.log("app started at port http://127.0.0.1:3000...");
