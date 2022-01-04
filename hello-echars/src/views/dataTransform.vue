<template>
  <div id="echarsContain"></div>
</template>
<script>
import *as echarts from 'echarts'
export default {
  data() {
    return {
      option: {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
          }
        ]
      }
    }
  },
  created() {
    let a = echarts.init(document.getElementById('echarsContain'))
    console.log(a)
  },
  methods: {

  }
}
</script>