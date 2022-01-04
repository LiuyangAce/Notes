<template>
  <div class="flop-item">
    <div class="flop-item-title">
      <span>{{ title }}</span>
    </div>
    <div class="flop-item-content">
      <span class="num">{{ num }}</span>
      <span class="unit">{{ unit }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true
    }
  },
}
</script>
<style>
#flop-item {
  height: 100%;
  widows: 100%;
}

.flop-item-title  span {
    color: white;
  }

.flop-item-content  .num {
    color: white;
  }
</style>
