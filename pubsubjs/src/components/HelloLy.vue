<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      msg: ''
    }
  },
  created() {
    pubsub.subscribe('msgData2',(msg, data)=> {
      this.msg = data
      console.log(msg, data)
    })
  }
}
</script>