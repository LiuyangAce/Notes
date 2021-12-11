<template>
  <div id="data-view">
    <dv-full-screen-container id="full-container">
      <div id="header">
        <comprehensive-title title="施工养护综合数据"></comprehensive-title>
      </div>
      <div id="content">
        <div
          class="digital-flop"
          v-for="(item, index) in flopTotal"
          :key="index"
        >
          <digtal-flop :title="item.title" :num="item.num" :unit="item.unit"></digtal-flop>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
import ComprehensiveTitle from "./hander/comprehensive-title.vue"
import DigtalFlop from "./content/digital-flop/digital-flop.vue"
export default {
  components: {
    ComprehensiveTitle,
    DigtalFlop,
  },
  data() {
    return {
      flopTotal: [
        {
          title: "管养里程",
          num: 24652,
          unit: "公里",
        },
        {
          title: "桥梁",
          num: 21,
          unit: "座",
        },
        {
          title: "涵洞隧道",
          num: 24652,
          unit: "公里",
        },
        // {
        //   title: "管养里程",
        //   num: "24652公里",
        // },
        // {
        //   title: "管养里程",
        //   num: "24652公里",
        // },
        // {
        //   title: "管养里程",
        //   num: "24652公里",
        // },
        // {
        //   title: "管养里程",
        //   num: "24652公里",
        // },
      ],
    }
  },
}
</script>
<style lang="less">
#data-view {
  margin: 0px;
}
#full-container {
  background-image: url("./img/construction-data/bg.png");
  background-size: 100% 100%;
}
#header {
  width: 100%;
  height: 100px;
}
#content {
  width: 100%;
  height: 15%;
}
.digital-flop {
  width: 100%;
  height: 15%;
}
</style>
