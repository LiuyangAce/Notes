<template>
  <div id="comprehensive-title">
    <dv-decoration-8 style="width: 25%; height: 60px" />
    <div class="title">{{ title }}</div>
    <dv-decoration-5 style="width: 50%; height: 50px; margin-top: 50px" />"
    <dv-decoration-8 :reverse="true" style="width: 25%; height: 60px" />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "施工养护综合数据",
    },
  },
}
</script>
<style>
#comprehensive-title {
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
}
.title {
  position: absolute;
  color: white;
  font-size: 30px;
  font-weight: 700;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
}
</style>
