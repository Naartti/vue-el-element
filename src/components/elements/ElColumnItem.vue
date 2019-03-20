<template>
<div
  class="el-column-item"
  :style="`flex-grow: ${grow};`"
  >
  <slot />
</div>
</template>
<script>
export default {
  props: {
    grow: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-column-item {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: @side-margin;
    width: auto;
    flex-basis: 0;
  }
</style>
