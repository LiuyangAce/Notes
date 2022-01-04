<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="clickHandler">按钮</button>
    <HelloWorld :msg=msg />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import pubsub from 'pubsub-js'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    clickHandler() {
      pubsub.publish('msgData', 'Welcome !')
      pubsub.publish('msgData1', 'Welcome1 !')
      pubsub.publish('msgData2', 'Welcome2 !')
      console.log(pubsub)
      console.log(pubsub.publish)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
