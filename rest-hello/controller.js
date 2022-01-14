const fs = require('fs')

function addMapping(router,mapping) {
  for (const item in mapping) {
    if (item.startsWith('GET')){
      router.get(item.slice(4),mapping[item])
    }else if (item.startsWith('POST')) {
      router.post(item.slice(5),mapping[item])
    }else {
      console.log('这不是GET或者POST请求！');
    }
  }
}

function addControllers(router,dir) {
  var files = fs.readdirSync(__dirname + dir)
  console.log('files:', files);
  var js_files = files.filter((f)=> {
    return f.endsWith('.js')
  })
  js_files.forEach(element => {
    var mapping = require(__dirname + dir + '/' + element)
    console.log('mapping:', mapping);
    addMapping(router,mapping)
  })
}

module.exports = function (dir) {
  console.log('dir:', dir);
  const router = require('koa-router')();
  let controllers_dir = dir || '/controllers'
  console.log('controllers_dir:', controllers_dir);
  addControllers(router,controllers_dir)
  return router.routes()
}