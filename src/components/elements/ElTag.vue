<template>
<div
  class="el-tag"
  :class="{
    'el-tag--warning': warning,
    'el-tag--success': success,
    'el-tag--info': info,
    'el-tag--danger': danger,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop
  }"
  >
  <slot />
</div>
</template>
<script>
export default {
  props: {
    warning: Boolean,
    danger: Boolean,
    success: Boolean,
    info: Boolean,
    marginRight: Boolean,
    marginTop: Boolean
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-tag {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: auto;
    padding: 0px 15px;
    border-radius: 15px;
    text-align: center;
    background-color: @color-grey-super-light;
    border: 1px solid @color-grey-medium;
    color: @color-grey-dark;
    box-sizing: border-box;

    &--warning {
      background-color: @color-warning-light;
      border: 1px solid @color-warning-medium;
      color: @color-warning-dark;
    }

    &--success {
      background-color: @color-success-light;
      border: 1px solid @color-success-medium;
      color: @color-success-dark;
    }

    &--info {
      background-color: @color-info-light;
      border: 1px solid @color-info-medium;
      color: @color-info-dark;
    }

    &--danger {
      background-color: @color-danger-light;
      border: 1px solid @color-danger-medium;
      color: @color-danger-dark;
    }
  }
</style>
