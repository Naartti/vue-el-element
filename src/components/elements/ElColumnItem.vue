<template>
<div
  class="el-column-item"
  :class="{
    'el-column-item-fix-width': width !== 'auto'
  }"
  :style="`flex-grow: ${grow}; width: ${styleWidth}; max-width: ${styleWidth};`"
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
    },
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },
  computed: {
    styleWidth () {
      return !isNaN(this.width) ? `${this.width}px` : this.width
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

  .el-column-item-fix-width {
    flex-basis: auto;
    flex-grow: 0;
  }
</style>
