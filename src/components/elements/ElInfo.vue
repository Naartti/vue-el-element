<template>
<div
  class='el-info'
  :class="{
    'el-info--highlight': highlight === true,
    'el-animation': highlight === true,
    'el-info--clickable': clickable
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
    highlight: Boolean
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
    line-height: 30px;
    text-align: left;
    margin-top: @top-margin-element;
    color: @color-grey-super-dark;
    background-color: @color-grey-super-light;
    padding-left: 10px;

    border: 1px solid @color-grey-light;
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
