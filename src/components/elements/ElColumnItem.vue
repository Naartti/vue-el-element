<template>
<div
  class="el-column-item"
  :class="{
    'el-column-item--fix-width': width !== 'auto',
    'el-column-item--flex-start': flexStart,
    'el-column-item--flex-end': flexEnd
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
    },
    flexStart: {
      type: Boolean,
      default: false
    },
    flexEnd: {
      type: Boolean,
      default: false
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
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: @side-margin;
    width: auto;
    flex-basis: 0;

    &--flex-start {
      align-items: flex-start;
    }

    &--flex-end {
      align-items: flex-end;
    }

    &--fix-width {
      flex-basis: auto;
      flex-grow: 0;
    }
  }
</style>
