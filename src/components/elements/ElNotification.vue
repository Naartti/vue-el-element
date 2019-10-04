<template>
<div
  class="el-notification"
  :class="{
    'el-notification--left': left,
    'el-notification--relative': relative
  }"
  >
  <slot />
</div>
</template>
<script>

export default {
  name: 'ElNotification',
  props: {
    relative: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="less">
  @import "~el-style/variables.less";

  .el-notification {
    display: flex;
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: @font-size-x-small;
    color: @color-grey-0;
    background-color: @color-danger-5;
    height: @font-size-x-small;
    border-radius: @font-size-x-small;
    min-width: @font-size-x-small;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 2px;
    border: 1px solid @color-grey-0;
    transform: translateX(50%) translateY(-50%);

    &--left {
      right: auto;
      left: 0px;
      transform: translateX(-50%) translateY(-50%);
    }

    &--relative {
      display: inline-flex;
      position: relative;
      left: auto;
      right: auto;
      transform: none;
    }
  }
</style>
