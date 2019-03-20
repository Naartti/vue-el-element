<template>
<span
  class="el-tag-wrapper"
  :class="{
    warning,
    success,
    info,
    danger,
    marginRight,
    marginTop
  }"
  >
  <slot />
</span>
</template>
<script>
export default {
  props: {
    warning: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    },
    marginRight: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-tag-wrapper {
    position: relative;
    height: 30px;
    width: auto;
    padding: 0px 15px;
    border-radius: 15px;
    text-align: center;
    background-color: @color-grey-super-light;
    border: 1px solid @color-grey-medium;
    color: @color-grey-dark;
    box-sizing: border-box;
  }

  .warning {
    background-color: @color-warning-light;
    border: 1px solid @color-warning-medium;
    color: @color-warning-dark;
  }

  .success {
    background-color: @color-success-light;
    border: 1px solid @color-success-medium;
    color: @color-success-dark;
  }

  .info {
    background-color: @color-info-light;
    border: 1px solid @color-info-medium;
    color: @color-info-dark;
  }

  .danger {
    background-color: @color-danger-light;
    border: 1px solid @color-danger-medium;
    color: @color-danger-dark;
  }
</style>
