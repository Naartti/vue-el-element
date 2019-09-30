<template>
<div
  class='el-info'
  :class="{
    'el-info--highlight': highlight === true,
    'el-animation': highlight === true,
    'el-info--clickable': clickable,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  @click="$emit('click')"
  @mouseover="$emit('mouseover')"
  @mouseleave="$emit('mouseleave')"
  >

  <slot />
</div>
</template>
<script>
export default {
  name: 'ElInfo',
  props: {
    highlight: Boolean,
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  computed: {
    clickable () {
      return this.$listeners && this.$listeners.click
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-info {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 30px;
    font-size: 12px;
    text-align: left;
    margin-top: @top-margin-element;
    color: @color-grey-7;
    background-color: @color-grey-1;
    padding: 6px 10px;

    border: 1px solid @color-grey-2;
    border-radius: @radius-small;
    outline: none;
    box-sizing: border-box;

    &--clickable {
      cursor: pointer;
    }

    &--highlight {
      border: @highlight-border;
      cursor: pointer;

      &:hover {
        box-shadow: @shadow;
      }
    }
  }
</style>
