<template>
<div
  class="el-column"
  :class="{
    'el-column--wrap': wrap,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  >
  <slot />
</div>
</template>
<script>
export default {
  props: {
    wrap: {
      type: Boolean,
      default: false
    },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  }
}
</script>

<style lang="less" scoped>
  @import '~el-style/variables';

  .el-column {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: stretch;

    div:first-child {
      margin-left: 0px;
    }
  }

  .el-column--wrap {
   flex-direction: column;

    div.el-column-item {
      margin-left: 0px;
      width: 100%;
      margin-bottom: @bottom-margin-section;
    }
  }
</style>
