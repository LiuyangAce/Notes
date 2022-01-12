const Koa = require('koa');

const fs = require('fs')

const bodyParser = require('koa-bodyparser');

const router = require('koa-router')();

const app = new Koa();

//逻辑部分 开始

function addControllers() {
  var files = fs.readdirSync(__dirname + '/controllers')

  var js_files = files.filter((f)=> {
    return f.endsWith('.js')
  })
  var controllers = []
  for (let index = 0; index < js_files.length; index++) {
    controllers.push(require(__dirname + '/controllers/' + js_files[index]))
  }
  return controllers
}

function addMapping(router) {
  let controllers = addControllers()
  console.log(111,controllers);
  for (const item in controllers) {
    if (item.startsWith('GET')){
      router.get(item.slice(4),controllers[item])
    }else if (item.startsWith('POST')) {
      router.post(item.slice(5),controllers[item])
    }else {
      console.log('这不是GET或者POST请求！');
    }
  }
}

addMapping(router)

// var files = fs.readdirSync(__dirname + '/controllers')

// var js_files = files.filter((f)=> {
//   return f.endsWith('.js')
// })
// js_files.forEach(element => {
//   var mapping = require(__dirname + '/controllers/' + element)
//   for (const item in mapping) {
//     if (item.startsWith('GET')){
//       router.get(item.slice(4),mapping[item])
//     }else if (item.startsWith('POST')) {
//       router.post(item.slice(5),mapping[item])
//     }else {
//       console.log('这不是GET或者POST请求！');
//     }
//   }
// });

//逻辑部分 结束

app.use(bodyParser())

// add router middleware:
app.use(router.routes());

app.listen(3001);
console.log('app started at port 3001...');