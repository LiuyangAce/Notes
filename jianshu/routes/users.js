const router = require('koa-router')()
const {User} = require('../models')

router.prefix('/users')

//添加
router.post('/add', async(ctx,next) => {
  let {username = '',pwd = ''} = ctx.request.body
  await User.create({username,pwd})
  .then((result)=> {
    if(result){
      ctx.response.body = {
        code:200,
        msg: '添加成功',
        data: result
      }
    }else {
      ctx.response.body = {
        code:300,
        msg: '添加失败',
      }
    }
  })
  .catch((err) => {
    ctx.response.body = {
      code: 400,
      msg: '添加出现异常'
    }
    console.error(err)
  })
})

//修改
router.post('/update', async(ctx,next) => {
  let params = ctx.request.body
  console.log(params);
  await User.updateOne(
    {'_id': params._id},
    {
      'username':params.username,
      'pwd':params.pwd
    }
  )
  .then((result)=> {
    ctx.response.body = {
      result,
    }
  })
  .catch(err => {
    ctx.response.body = {
      code: 400,
      msg: '修改出现异常'
    }
    console.error(err);
  })
})

//删除
router.post('/del', async(ctx,next) => {
  let {id} = ctx.request.body._id
  console.log(id);
  await User.findOneAndDelete(id)
  .then(result => {
    ctx.response.body = {
      result
    }
  })
  .catch(err => {
    ctx.response.body = {
      code: 400,
      msg: '修改出现异常'
    }
    console.error(err);
  })
})

//查询
router.get('/find', async(ctx,next) => {
  await User.find()
  .then((result)=> {
    ctx.response.body = {
      result: result
    }
  })
  .catch((err)=> {
    ctx.response.body = {
      code: 400,
      msg: '查询出现异常'
    }
    console.error(err);
  })
})
//查询单个用户
router.get('/find/:id', async(ctx,next) => {
  let id = ctx.request.params
  await User.findOne(id)
  .then((result)=> {
    ctx.response.body = {
      result: result
    }
  })
  .catch((err)=> {
    ctx.response.body = {
      code: 400,
      msg: '查询单个出现异常'
    }
    console.error(err);
  })
})
module.exports = router
