//导入mongoose
const mongoose = require('mongoose')

//系统用户模型对象
const userSchema = new mongoose.Schema({
  username: String,
  pwd: String
})
const User = mongoose.model('users',userSchema)

module.exports = {
  User
}