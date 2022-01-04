vue-cli中简单使用

安装：
1. npm install pubsub-js --save

2. 需要用的地方【子组件】中订阅
import pubsub from 'pubsub-js' //导入
pubsub.subscribe('msgData', (msg, data) => {
  //msgData是订阅的标识 data 是传过来的值【Welcome2】
  console.log(msg, data)
})

3. 发布【父组件】
import pubsub from 'pubsub-js'
pubsub.publish('msgData', 'Welcome2 !')
