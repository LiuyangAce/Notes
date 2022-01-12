const Koa = require('koa');

const fs = require('fs')

const bodyParser = require('koa-bodyparser');

const router = require('koa-router')();

const app = new Koa();

//逻辑部分 开始

var files = fs.readdirSync(__dirname + '/controllers')

var js_files = files.filter((f)=> {
  return f.endsWith('.js')
})
js_files.forEach(element => {
  var mapping = require(__dirname + '/controllers/' + element)
  for (const item in mapping) {
    if (item.startsWith('GET')){
      router.get(item.slice(4),mapping[item])
    }else if (item.startsWith('POST')) {
      router.post(item.slice(5),mapping[item])
    }else {
      console.log('这不是GET或者POST请求！');
    }
  }
});

//逻辑部分 结束

app.use(bodyParser())

// add router middleware:
app.use(router.routes());

app.listen(3001);
console.log('app started at port 3001...');