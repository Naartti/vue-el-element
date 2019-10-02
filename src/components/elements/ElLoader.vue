<template>
<div
  class="el-loader"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  >
  <div
    v-if="!paused"
    class="el-loader__loader"
    />
</div>
</template>
<script>
export default {
  props: {
    paused: { type: Boolean, default: false },
    marginRight: { type: Boolean, default: false },
    marginTop: { type: Boolean, default: false },
    marginBottom: { type: Boolean, default: false },
    marginLeft: { type: Boolean, default: false }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  @height: 5px;

  .el-loader {
    position: relative;
    height: @height;
    width: 100%;
    overflow: hidden;

    &__loader {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: @height;

      animation-name: el-loader__animation;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      /* Safari 4.0 - 8.0 */
      -webkit-animation-name: el-loader__animation;
      -webkit-animation-duration: 2s;
      -webkit-animation-animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;

      &::before {
        content: " ";
        position: absolute;
        top: 0px;
        left: -20%;
        width: 20%;
        height: @height;
        background-color: @color-primary-4;
      }
    }
  }

  @keyframes el-loader__animation {
    0% { transform: translateX(0%); }
    50% { transform: translateX(120%); }
    100% { transform: translateX(0%); }
  }

  @-webkit-keyframes el-loader__animation {
    0% { transform: translateX(0%); }
    50% { transform: translateX(120%); }
    100% { transform: translateX(0%); }
  }

</style>
