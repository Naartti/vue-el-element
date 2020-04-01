<template>
<div
  class="el-tag"
  :class="{
    'el-tag--warning': warning,
    'el-tag--success': success,
    'el-tag--info': info,
    'el-tag--danger': danger,
    'el-tag--nowrap': nowrap,
    [marginClassName]: true,
  }"
  >
  <slot />
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElTag',
  mixins: [margin],
  props: {
    warning: Boolean,
    danger: Boolean,
    success: Boolean,
    info: Boolean,
    nowrap: Boolean
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
    background-color: @color-grey-1;
    border: 1px solid @color-grey-5;
    color: @color-grey-5;
    box-sizing: border-box;

    &--warning {
      background-color: @color-warning-1;
      border: 1px solid @color-warning-4;
      color: @color-warning-7;
    }

    &--success {
      background-color: @color-success-1;
      border: 1px solid @color-success-4;
      color: @color-success-7;
    }

    &--info {
      background-color: @color-info-1;
      border: 1px solid @color-info-4;
      color: @color-info-7;
    }

    &--danger {
      background-color: @color-danger-1;
      border: 1px solid @color-danger-4;
      color: @color-danger-7;
    }

    &--nowrap {
      white-space: nowrap;
    }
  }
</style>
