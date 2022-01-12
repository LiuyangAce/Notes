const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser())

const controller = require('./controller')

// add 自定义的 router middleware 
app.use(controller())

app.listen(3001);
console.log('app started at port 3001...');