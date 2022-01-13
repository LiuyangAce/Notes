const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 1
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  var
      start = new Date().getTime(),
      execTime;
  await next();
  execTime = new Date().getTime() - start;
  ctx.response.set('X-Response-Time', `${execTime}ms`);
});

let staticFiles = require('./static-files');
// 2
app.use(staticFiles('/static/', __dirname + '/static'));

// 3
app.use(bodyParser())

const isProduction = process.env.NODE_ENV === 'production';
const templating = require('./templating')
// 4
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

const controller = require('./controller')
// 5 add 自定义的 router middleware 
app.use(controller())

app.listen(3001);
console.log('app started at port 3001...');